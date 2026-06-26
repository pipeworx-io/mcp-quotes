interface McpToolDefinition {
  name: string;
  description: string;
  inputSchema: {
    type: 'object';
    properties: Record<string, unknown>;
    required?: string[];
  };
}

interface McpToolExport {
  tools: McpToolDefinition[];
  callTool: (name: string, args: Record<string, unknown>) => Promise<unknown>;
  meter?: { credits: number };
  cost?: Record<string, unknown>;
  provider?: string;
}

/**
 * Quotes MCP — citation-grade quote API for public-domain authors.
 *
 * Tools:
 * - random_quote: random quote with optional filters
 * - search_quotes: substring search across the corpus
 * - check_attribution: verify whether a quote is genuinely attributed (the differentiator)
 * - quote_by_location: structural lookup (act/scene/chapter)
 * - list_authors: list available authors
 */

import {
  checkAttribution,
  getAct,
  getChapter,
  getFullWorkByAuthorSlug,
  getScene,
  listAuthors,
  listFullTextWorks,
  quotesByLocation,
  randomQuote,
  searchQuotes,
} from './query';

const tools: McpToolExport['tools'] = [
  {
    name: 'random_quote',
    description:
      'Return a random quote from the corpus, optionally filtered by author, fame, verification status, or tag. Each result includes citation: work, year, speaker (for plays/fiction), and source URL.',
    inputSchema: {
      type: 'object',
      properties: {
        author_id: {
          type: 'string',
          description: 'Optional author id (e.g., "oscar-wilde", "william-shakespeare", "mark-twain"). Use list_authors to discover ids.',
        },
        famous_only: {
          type: 'boolean',
          description: 'If true, only return famous/canonical quotes.',
        },
        verified_only: {
          type: 'boolean',
          description: 'If true, exclude misattributed quotes.',
        },
        tag: {
          type: 'string',
          description: 'Filter by tag (e.g., "wit", "love", "misattributed", "commonly-misquoted").',
        },
      },
    },
  },
  {
    name: 'search_quotes',
    description:
      "Search quotes by substring. Matches both canonical text and known popular paraphrases — searching for 'protest' finds Hamlet's 'The lady doth protest too much, methinks' even though the popular form 'Methinks the lady doth protest too much' is what most people remember.",
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Substring to search for (case-insensitive).',
        },
        author_id: {
          type: 'string',
          description: 'Optional author filter.',
        },
        verified_only: {
          type: 'boolean',
          description: 'If true, exclude misattributed quotes.',
        },
        limit: {
          type: 'number',
          description: 'Max results to return (default 10, max 25).',
        },
      },
      required: ['query'],
    },
  },
  {
    name: 'check_attribution',
    description:
      'Given a quote and (optionally) the author it is claimed to be by, return one of four verdicts: "verified" (genuine, with citation), "misattributed" (no primary source — popular but fake), "paraphrase_of_verified" (popular corruption of a real quote, returns the actual text), or "no_match" (not in corpus). Useful for journalists, researchers, and anyone tired of fake Mark Twain quotes.',
    inputSchema: {
      type: 'object',
      properties: {
        text: {
          type: 'string',
          description: 'The quote text to check.',
        },
        claimed_author: {
          type: 'string',
          description: 'Optional: who the quote is popularly attributed to (e.g., "Oscar Wilde", "Mark Twain"). Narrows the check.',
        },
      },
      required: ['text'],
    },
  },
  {
    name: 'quote_by_location',
    description:
      'Look up quotes by structural address within a work — act/scene for plays, chapter for novels. Example: author_id="william-shakespeare", work_title="Hamlet", act=3, scene=1 returns the "To be, or not to be" line.',
    inputSchema: {
      type: 'object',
      properties: {
        author_id: { type: 'string', description: 'Author id (e.g., "william-shakespeare").' },
        work_title: { type: 'string', description: 'Title of the work (e.g., "Hamlet", "The Picture of Dorian Gray").' },
        act: { type: 'number', description: 'Act number (plays only).' },
        scene: { type: 'number', description: 'Scene number (plays only).' },
        chapter: { type: 'number', description: 'Chapter number (novels/essays).' },
      },
      required: ['author_id', 'work_title'],
    },
  },
  {
    name: 'list_authors',
    description:
      'Return all authors available in the corpus — each entry includes author id (used as input to other tools), display name, birth/death dates, and public-domain status.',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'list_full_text_works',
    description:
      'List works for which the full text (every scene, speech, and line) is loaded — beyond just the famous-quote excerpts. Use this to discover what is available for deep structural lookup via get_scene and get_act.',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'get_scene',
    description:
      'Return the full text of a specific scene from a play (every speech, every line, in order). Example: author_id="william-shakespeare", work_slug="hamlet", act=3, scene=1 returns the entire "To be, or not to be" scene including all of Hamlet\'s soliloquy and the subsequent dialogue with Ophelia. Useful for context, citation, or close reading.',
    inputSchema: {
      type: 'object',
      properties: {
        author_id: { type: 'string', description: 'Author id (e.g., "william-shakespeare").' },
        work_slug: { type: 'string', description: 'Work slug (e.g., "hamlet").' },
        act: { type: 'number', description: 'Act number.' },
        scene: { type: 'number', description: 'Scene number.' },
      },
      required: ['author_id', 'work_slug', 'act', 'scene'],
    },
  },
  {
    name: 'get_act',
    description:
      'Return the full text of an entire act (all scenes within it). Use this to read a full structural unit at once. Returned object contains nested scenes with their speeches and lines.',
    inputSchema: {
      type: 'object',
      properties: {
        author_id: { type: 'string', description: 'Author id (e.g., "william-shakespeare").' },
        work_slug: { type: 'string', description: 'Work slug (e.g., "hamlet").' },
        act: { type: 'number', description: 'Act number.' },
      },
      required: ['author_id', 'work_slug', 'act'],
    },
  },
  {
    name: 'get_chapter',
    description:
      'Return the full text of a chapter from a novel/prose work (all paragraphs in order). Example: author_id="oscar-wilde", work_slug="the-picture-of-dorian-gray", chapter=2 returns the entire chapter where Lord Henry tempts Dorian. Use list_full_text_works to discover which works are chapter-based.',
    inputSchema: {
      type: 'object',
      properties: {
        author_id: { type: 'string', description: 'Author id (e.g., "mark-twain").' },
        work_slug: { type: 'string', description: 'Work slug (e.g., "adventures-of-huckleberry-finn").' },
        chapter: { type: 'number', description: 'Chapter number.' },
      },
      required: ['author_id', 'work_slug', 'chapter'],
    },
  },
];

async function callTool(name: string, args: Record<string, unknown>): Promise<unknown> {
  switch (name) {
    case 'random_quote': {
      const result = randomQuote({
        authorId: args.author_id as string | undefined,
        famousOnly: args.famous_only as boolean | undefined,
        verifiedOnly: args.verified_only as boolean | undefined,
        tag: args.tag as string | undefined,
      });
      if (!result) return { error: 'No quotes match the given filters.' };
      return result;
    }

    case 'search_quotes': {
      const limit = Math.max(1, Math.min(25, (args.limit as number | undefined) ?? 10));
      const results = searchQuotes(args.query as string, {
        authorId: args.author_id as string | undefined,
        verifiedOnly: args.verified_only as boolean | undefined,
      });
      return {
        query: args.query,
        count: results.length,
        quotes: results.slice(0, limit),
      };
    }

    case 'check_attribution': {
      return checkAttribution(
        args.text as string,
        args.claimed_author as string | undefined,
      );
    }

    case 'quote_by_location': {
      const results = quotesByLocation(
        args.author_id as string,
        args.work_title as string,
        {
          act: args.act as number | undefined,
          scene: args.scene as number | undefined,
          chapter: args.chapter as number | undefined,
        },
      );
      return {
        author_id: args.author_id,
        work: args.work_title,
        count: results.length,
        quotes: results,
      };
    }

    case 'list_authors':
      return { authors: listAuthors() };

    case 'list_full_text_works':
      return { works: listFullTextWorks() };

    case 'get_scene': {
      const scene = getScene(
        args.author_id as string,
        args.work_slug as string,
        args.act as number,
        args.scene as number,
      );
      if (!scene) {
        return {
          error: `Scene ${args.act}.${args.scene} of ${args.author_id}/${args.work_slug} not found. Use list_full_text_works to see what is available.`,
        };
      }
      return {
        author_id: args.author_id,
        work_slug: args.work_slug,
        act: args.act,
        scene: scene.number,
        setting: scene.setting,
        speech_count: scene.speeches.length,
        speeches: scene.speeches,
      };
    }

    case 'get_act': {
      const act = getAct(args.author_id as string, args.work_slug as string, args.act as number);
      if (!act) {
        return {
          error: `Act ${args.act} of ${args.author_id}/${args.work_slug} not found. Use list_full_text_works to see what is available.`,
        };
      }
      const work = getFullWorkByAuthorSlug(args.author_id as string, args.work_slug as string);
      return {
        author_id: args.author_id,
        work_slug: args.work_slug,
        work_title: work?.workTitle,
        act: act.number,
        scene_count: act.scenes.length,
        scenes: act.scenes,
      };
    }

    case 'get_chapter': {
      const chapter = getChapter(
        args.author_id as string,
        args.work_slug as string,
        args.chapter as number,
      );
      if (!chapter) {
        return {
          error: `Chapter ${args.chapter} of ${args.author_id}/${args.work_slug} not found. Use list_full_text_works to see which chapter-based works are available.`,
        };
      }
      return {
        author_id: args.author_id,
        work_slug: args.work_slug,
        chapter: chapter.number,
        title: chapter.title,
        paragraph_count: chapter.paragraphs.length,
        paragraphs: chapter.paragraphs,
      };
    }

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

export default { tools, callTool, meter: { credits: 1 } } satisfies McpToolExport;
