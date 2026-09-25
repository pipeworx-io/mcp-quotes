import type { AuthorRef, QuoteRecord, WorkRef } from '../types';

export const dickinson: AuthorRef = {
  id: 'emily-dickinson',
  name: 'Emily Dickinson',
  born: 1830,
  died: 1886,
  public_domain: true,
};

// Most Dickinson poems were unpublished at her death (1886). The first three series
// — edited by Mabel Loomis Todd & T.W. Higginson — appeared 1890, 1891, 1896. Several
// poems below first reached print in Martha Dickinson Bianchi's 1924 "Complete Poems."
// Modern scholarship references Thomas H. Johnson's 1955 numbering (J-numbers) and
// R.W. Franklin's 1998 numbering (Fr-numbers); both are noted where helpful.
const POEMS_GUTENBERG = 'https://www.gutenberg.org/ebooks/12241';
const SERIES_1 = 'First published in "Poems by Emily Dickinson" (Series 1, 1890), ed. Todd & Higginson';
const SERIES_2 = 'First published in "Poems by Emily Dickinson" (Series 2, 1891), ed. Todd & Higginson';
const SERIES_3 = 'First published in "Poems by Emily Dickinson" (Series 3, 1896), ed. Todd';
const BIANCHI = 'First collected in "The Complete Poems of Emily Dickinson" (1924), ed. Martha Dickinson Bianchi';

function poemWork(title: string, year: number, edition: string): WorkRef {
  return { title, type: 'poem', year, edition, source_url: POEMS_GUTENBERG };
}

const cert = { confidence: 'certain' as const };
const claim = { claimed: 'Emily Dickinson', verified: true, ...cert };

export const dickinsonQuotes: QuoteRecord[] = [
  {
    id: 'dickinson-hope-feathers',
    text: '"Hope" is the thing with feathers — That perches in the soul.',
    attribution: claim,
    work: poemWork('"Hope" is the thing with feathers', 1891, SERIES_2),
    context: 'Opening of one of the most-anthologized Dickinson poems. Johnson J254, Franklin F314.',
    famous: true,
    tags: ['hope', 'opening-line'],
  },
  {
    id: 'dickinson-because-death',
    text: 'Because I could not stop for Death — He kindly stopped for me.',
    attribution: claim,
    work: poemWork('Because I could not stop for Death', 1890, SERIES_1),
    context: 'Opening couplet. Johnson J712, Franklin F479.',
    famous: true,
    tags: ['death', 'opening-line'],
  },
  {
    id: 'dickinson-im-nobody',
    text: "I'm Nobody! Who are you?",
    attribution: claim,
    work: poemWork("I'm Nobody! Who are you?", 1891, SERIES_2),
    context: 'Opening line. Johnson J288, Franklin F260.',
    famous: true,
    tags: ['identity', 'opening-line'],
  },
  {
    id: 'dickinson-tell-truth-slant',
    text: 'Tell all the truth but tell it slant — Success in Circuit lies.',
    attribution: claim,
    work: poemWork('Tell all the truth but tell it slant', 1945, 'First published 1945 in "Bolts of Melody"; composed c.1872'),
    context: 'Johnson J1129, Franklin F1263. The poem first appeared in print only in 1945.',
    famous: true,
    tags: ['truth', 'art'],
  },
  {
    id: 'dickinson-stop-one-heart',
    text: 'If I can stop one Heart from breaking I shall not live in vain.',
    attribution: claim,
    work: poemWork('If I can stop one Heart from breaking', 1929, 'First published 1929 in "Further Poems"'),
    context: 'Opening lines. Johnson J919.',
    famous: true,
    tags: ['kindness', 'purpose'],
  },
  {
    id: 'dickinson-soul-selects',
    text: 'The Soul selects her own Society — Then — shuts the Door.',
    attribution: claim,
    work: poemWork('The Soul selects her own Society', 1890, SERIES_1),
    context: 'Opening couplet. Johnson J303, Franklin F409.',
    famous: true,
    tags: ['solitude', 'self'],
  },
  {
    id: 'dickinson-success-counted',
    text: "Success is counted sweetest By those who ne'er succeed.",
    attribution: claim,
    work: poemWork('Success is counted sweetest', 1864, 'First published 1864 in "A Masque of Poets"; one of fewer than a dozen poems published in Dickinson\'s lifetime'),
    context: 'Opening couplet. Johnson J67, Franklin F112. One of the rare Dickinson poems published anonymously in her lifetime.',
    famous: true,
    tags: ['success', 'paradox'],
  },
  {
    id: 'dickinson-after-great-pain',
    text: 'After great pain, a formal feeling comes.',
    attribution: claim,
    work: poemWork('After great pain, a formal feeling comes', 1929, 'First published 1929 in "Further Poems"; composed c.1862'),
    context: 'Opening line. Johnson J341, Franklin F372.',
    famous: true,
    tags: ['suffering', 'opening-line'],
  },
  {
    id: 'dickinson-fly-buzz',
    text: 'I heard a Fly buzz — when I died.',
    attribution: claim,
    work: poemWork('I heard a Fly buzz — when I died', 1896, SERIES_3),
    context: 'Opening line. Johnson J465, Franklin F591.',
    famous: true,
    tags: ['death', 'opening-line'],
  },
  {
    id: 'dickinson-wild-nights',
    text: 'Wild Nights — Wild Nights!',
    attribution: claim,
    work: poemWork('Wild Nights — Wild Nights!', 1891, SERIES_2),
    context: 'Opening line. Johnson J249, Franklin F269.',
    famous: true,
    tags: ['love', 'opening-line'],
  },
  {
    id: 'dickinson-much-madness',
    text: 'Much Madness is divinest Sense — To a discerning Eye.',
    attribution: claim,
    work: poemWork('Much Madness is divinest Sense', 1890, SERIES_1),
    context: 'Opening couplet. Johnson J435, Franklin F620.',
    famous: true,
    tags: ['madness', 'sanity', 'paradox'],
  },
  {
    id: 'dickinson-certain-slant-light',
    text: "There's a certain Slant of light, Winter Afternoons.",
    attribution: claim,
    work: poemWork("There's a certain Slant of light", 1890, SERIES_1),
    context: 'Opening couplet. Johnson J258, Franklin F320.',
    famous: true,
    tags: ['nature', 'mood'],
  },
  {
    id: 'dickinson-loaded-gun',
    text: 'My Life had stood — a Loaded Gun.',
    attribution: claim,
    work: poemWork('My Life had stood — a Loaded Gun', 1929, 'First published 1929 in "Further Poems"; composed c.1863'),
    context: 'Opening line. Johnson J754, Franklin F764. Among the most-debated poems in American literature.',
    famous: true,
    tags: ['violence', 'self', 'opening-line'],
  },
  {
    id: 'dickinson-died-for-beauty',
    text: 'I died for Beauty — but was scarce Adjusted in the Tomb.',
    attribution: claim,
    work: poemWork('I died for Beauty — but was scarce', 1890, SERIES_1),
    context: 'Opening couplet. Johnson J449, Franklin F448.',
    famous: true,
    tags: ['beauty', 'death'],
  },
  {
    id: 'dickinson-letter-to-world',
    text: 'This is my letter to the World That never wrote to Me.',
    attribution: claim,
    work: poemWork('This is my letter to the World', 1890, SERIES_1),
    context: 'Opening couplet. Johnson J441, Franklin F519.',
    famous: true,
    tags: ['solitude', 'art'],
  },
  {
    id: 'dickinson-life-closed-twice',
    text: 'My life closed twice before its close — It yet remains to see.',
    attribution: claim,
    work: poemWork('My life closed twice before its close', 1896, SERIES_3),
    context: 'Opening couplet. Johnson J1732, Franklin F1773.',
    famous: true,
    tags: ['loss', 'death'],
  },
  {
    id: 'dickinson-some-keep-sabbath',
    text: 'Some keep the Sabbath going to Church — I keep it, staying at Home.',
    attribution: claim,
    work: poemWork('Some keep the Sabbath going to Church', 1864, 'First published 1864 in "The Round Table"; one of the few published in Dickinson\'s lifetime'),
    context: 'Opening couplet. Johnson J324, Franklin F236.',
    famous: true,
    tags: ['religion', 'individualism'],
  },
  {
    id: 'dickinson-taste-liquor',
    text: 'I taste a liquor never brewed — From Tankards scooped in Pearl.',
    attribution: claim,
    work: poemWork('I taste a liquor never brewed', 1890, SERIES_1),
    context: 'Opening couplet. Johnson J214, Franklin F207. Published anonymously in the Springfield Republican in 1861.',
    famous: true,
    tags: ['nature', 'ecstasy'],
  },
  {
    id: 'dickinson-narrow-fellow',
    text: 'A narrow Fellow in the Grass Occasionally rides.',
    attribution: claim,
    work: poemWork('A narrow Fellow in the Grass', 1890, SERIES_1),
    context: 'Opening couplet. Johnson J986, Franklin F1096. Published in the Springfield Republican in 1866 under the title "The Snake."',
    famous: true,
    tags: ['nature'],
  },
  {
    id: 'dickinson-funeral-brain',
    text: 'I felt a Funeral, in my Brain.',
    attribution: claim,
    work: poemWork('I felt a Funeral, in my Brain', 1896, SERIES_3),
    context: 'Opening line. Johnson J280, Franklin F340.',
    famous: true,
    tags: ['mind', 'breakdown', 'opening-line'],
  },
  {
    id: 'dickinson-haunted-chamber',
    text: 'One need not be a Chamber — to be Haunted.',
    attribution: claim,
    work: poemWork('One need not be a Chamber — to be Haunted', 1891, SERIES_2),
    context: 'Opening line. Johnson J670, Franklin F407.',
    famous: true,
    tags: ['mind', 'ghosts'],
  },
  {
    id: 'dickinson-faith-fine',
    text: '"Faith" is a fine invention When Gentlemen can see.',
    attribution: claim,
    work: poemWork('"Faith" is a fine invention', 1891, SERIES_2),
    context: 'Opening couplet. Johnson J185, Franklin F202. From a letter to Samuel Bowles, c.1860.',
    famous: true,
    tags: ['faith', 'irony'],
  },
  {
    id: 'dickinson-bustle-house',
    text: 'The Bustle in a House The Morning after Death.',
    attribution: claim,
    work: poemWork('The Bustle in a House', 1891, SERIES_2),
    context: 'Opening couplet. Johnson J1078, Franklin F1108.',
    famous: true,
    tags: ['death', 'grief'],
  },
  {
    id: 'dickinson-frigate-book',
    text: 'There is no Frigate like a Book To take us Lands away.',
    attribution: claim,
    work: poemWork('There is no Frigate like a Book', 1894, 'First published 1894 in "Letters of Emily Dickinson"; later collected in 1924'),
    context: 'Opening couplet. Johnson J1263, Franklin F1286.',
    famous: true,
    tags: ['reading', 'imagination'],
  },
  {
    id: 'dickinson-little-madness',
    text: 'A little Madness in the Spring Is wholesome even for the King.',
    attribution: claim,
    work: poemWork('A little Madness in the Spring', 1914, 'First published 1914 in "The Single Hound"'),
    context: 'Opening couplet. Johnson J1333, Franklin F1356.',
    famous: true,
    tags: ['spring', 'madness'],
  },
  {
    id: 'dickinson-pedigree-honey',
    text: 'The pedigree of honey Does not concern the bee.',
    attribution: claim,
    work: poemWork('The pedigree of Honey', 1929, 'First published 1929 in "Further Poems"'),
    context: 'Opening couplet. Johnson J1627.',
    famous: true,
    tags: ['nature', 'class'],
  },
  {
    id: 'dickinson-never-saw-moor',
    text: 'I never saw a Moor — I never saw the Sea.',
    attribution: claim,
    work: poemWork('I never saw a Moor', 1890, SERIES_1),
    context: 'Opening couplet. Johnson J1052, Franklin F800.',
    famous: true,
    tags: ['imagination', 'faith'],
  },
  {
    id: 'dickinson-safe-alabaster',
    text: 'Safe in their Alabaster Chambers — Untouched by Morning.',
    attribution: claim,
    work: poemWork('Safe in their Alabaster Chambers', 1862, 'Published anonymously 1862 in the Springfield Republican; one of the few in Dickinson\'s lifetime'),
    context: 'Opening couplet. Johnson J216, Franklin F124.',
    famous: true,
    tags: ['death', 'rest'],
  },

  // ── Misattributions ─────────────────────────────────────────────────
  {
    id: 'dickinson-misattrib-first-time',
    text: 'Whenever a thing is done for the first time, it releases a little demon.',
    attribution: {
      claimed: 'Emily Dickinson',
      verified: false,
      confidence: 'disputed',
      actual_author: 'Dave Sim',
      earliest_known_source:
        'Dave Sim, "Cerebus" #65 (1984). The line is from Sim\'s comic-book series and predates its first known Dickinson attribution by years.',
    },
    notes:
      'Frequently attributed to Dickinson in self-help contexts; the actual source is comic-book writer Dave Sim. Per Wikiquote.',
    famous: true,
    tags: ['change', 'misattributed'],
  },
  {
    id: 'dickinson-misattrib-cannot-fly',
    text: 'If you cannot fly then run, if you cannot run then walk, if you cannot walk then crawl, but whatever you do you have to keep moving forward.',
    attribution: {
      claimed: 'Emily Dickinson',
      verified: false,
      confidence: 'disputed',
      actual_author: 'Martin Luther King Jr.',
      earliest_known_source:
        'Sermon at Spelman College, 10 April 1960 (also delivered in modified form at Barratt Junior High School, 26 October 1967). King\'s actual line: "If you can\'t fly, run; if you can\'t run, walk; if you can\'t walk, crawl; but by all means keep moving."',
    },
    notes:
      "Among the most viral fake Dickinson quotes online. The actual source is a 1960 sermon by Martin Luther King Jr. The Dickinson misattribution appears mostly in late-2000s and 2010s social-media posts.",
    famous: true,
    tags: ['perseverance', 'misattributed'],
  },
];
