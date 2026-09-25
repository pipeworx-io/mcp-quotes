import type { AuthorRef, Location, QuoteRecord } from './types';
import { wilde, wildeQuotes } from './data/wilde';
import { shakespeare, shakespeareQuotes } from './data/shakespeare';
import { twain, twainQuotes } from './data/twain';
import { austen, austenQuotes } from './data/austen';
import { dickinson, dickinsonQuotes } from './data/dickinson';
import { lincoln, lincolnQuotes } from './data/lincoln';

export {
  getAct,
  getChapter,
  getFullWorkByAuthorSlug,
  getScene,
  listFullTextWorks,
  type FullAct,
  type FullChapter,
  type FullScene,
  type FullSpeech,
  type FullTextWork,
  type FullTextWorkSummary,
} from './fulltext/index';

interface AuthorEntry {
  author: AuthorRef;
  quotes: QuoteRecord[];
}

const corpus: Record<string, AuthorEntry> = {
  [wilde.id]: { author: wilde, quotes: wildeQuotes },
  [shakespeare.id]: { author: shakespeare, quotes: shakespeareQuotes },
  [twain.id]: { author: twain, quotes: twainQuotes },
  [austen.id]: { author: austen, quotes: austenQuotes },
  [dickinson.id]: { author: dickinson, quotes: dickinsonQuotes },
  [lincoln.id]: { author: lincoln, quotes: lincolnQuotes },
};

const allQuotes: QuoteRecord[] = Object.values(corpus).flatMap((e) => e.quotes);

export function listAuthors(): AuthorRef[] {
  return Object.values(corpus).map((e) => e.author);
}

export function getQuotesByAuthor(authorId: string): QuoteRecord[] {
  return corpus[authorId]?.quotes ?? [];
}

export function getQuoteById(id: string): QuoteRecord | undefined {
  return allQuotes.find((q) => q.id === id);
}

export interface QueryFilters {
  authorId?: string;
  verifiedOnly?: boolean;
  famousOnly?: boolean;
  tag?: string;
}

function applyFilters(quotes: QuoteRecord[], filters: QueryFilters = {}): QuoteRecord[] {
  return quotes.filter((q) => {
    if (filters.verifiedOnly && !q.attribution.verified) return false;
    if (filters.famousOnly && !q.famous) return false;
    if (filters.tag && !(q.tags ?? []).includes(filters.tag)) return false;
    return true;
  });
}

export function randomQuote(filters: QueryFilters = {}): QuoteRecord | undefined {
  const pool = filters.authorId
    ? applyFilters(getQuotesByAuthor(filters.authorId), filters)
    : applyFilters(allQuotes, filters);
  if (pool.length === 0) return undefined;
  const idx = Math.floor(Math.random() * pool.length);
  return pool[idx];
}

export function searchQuotes(query: string, filters: QueryFilters = {}): QuoteRecord[] {
  const needle = query.toLowerCase();
  const pool = filters.authorId ? getQuotesByAuthor(filters.authorId) : allQuotes;
  return applyFilters(pool, filters).filter(
    (q) =>
      q.text.toLowerCase().includes(needle) ||
      (q.popular_paraphrase ?? '').toLowerCase().includes(needle),
  );
}

export function quotesByLocation(
  authorId: string,
  workTitle: string,
  location: Location,
): QuoteRecord[] {
  return getQuotesByAuthor(authorId).filter((q) => {
    if (q.work?.title.toLowerCase() !== workTitle.toLowerCase()) return false;
    const loc = q.location;
    if (!loc) return false;
    if (location.act !== undefined && loc.act !== location.act) return false;
    if (location.scene !== undefined && loc.scene !== location.scene) return false;
    if (location.chapter !== undefined && loc.chapter !== location.chapter) return false;
    return true;
  });
}

export interface AttributionCheck {
  query: string;
  matches: QuoteRecord[];
  verdict: 'verified' | 'misattributed' | 'no_match' | 'paraphrase_of_verified';
  message: string;
}

export function checkAttribution(text: string, claimedAuthor?: string): AttributionCheck {
  const needle = normalize(text);
  const matches = allQuotes.filter((q) => {
    if (claimedAuthor && q.attribution.claimed !== claimedAuthor) return false;
    if (normalize(q.text).includes(needle) || needle.includes(normalize(q.text))) return true;
    if (q.popular_paraphrase && normalize(q.popular_paraphrase).includes(needle)) return true;
    return false;
  });

  if (matches.length === 0) {
    return {
      query: text,
      matches: [],
      verdict: 'no_match',
      message: 'No quote in the corpus matches this text. Cannot verify or refute attribution.',
    };
  }

  const verifiedHit = matches.find(
    (q) => q.attribution.verified && normalize(q.text).includes(needle),
  );
  if (verifiedHit) {
    return {
      query: text,
      matches,
      verdict: 'verified',
      message: `Verified: ${verifiedHit.attribution.claimed}, ${verifiedHit.work?.title ?? 'unknown work'} (${verifiedHit.work?.year ?? '?'}).`,
    };
  }

  const paraphraseHit = matches.find(
    (q) =>
      q.attribution.verified &&
      q.popular_paraphrase &&
      normalize(q.popular_paraphrase).includes(needle),
  );
  if (paraphraseHit) {
    return {
      query: text,
      matches,
      verdict: 'paraphrase_of_verified',
      message: `Popular paraphrase. The verified text is: "${paraphraseHit.text}" — ${paraphraseHit.attribution.claimed}, ${paraphraseHit.work?.title ?? ''} (${paraphraseHit.work?.year ?? '?'}).`,
    };
  }

  const misattribHit = matches.find((q) => !q.attribution.verified);
  if (misattribHit) {
    return {
      query: text,
      matches,
      verdict: 'misattributed',
      message:
        `Commonly attributed to ${misattribHit.attribution.claimed}, but no primary source exists. ${misattribHit.attribution.earliest_known_source ?? ''}`.trim(),
    };
  }

  return { query: text, matches, verdict: 'no_match', message: 'Indeterminate match.' };
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
}
