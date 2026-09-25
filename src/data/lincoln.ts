import type { AuthorRef, QuoteRecord, WorkRef } from '../types';

export const lincoln: AuthorRef = {
  id: 'abraham-lincoln',
  name: 'Abraham Lincoln',
  born: 1809,
  died: 1865,
  public_domain: true,
};

const COLLECTED_WORKS = "The Collected Works of Abraham Lincoln, ed. Roy P. Basler (Rutgers, 1953-55)";

const GETTYSBURG: WorkRef = {
  title: 'Gettysburg Address',
  type: 'speech',
  year: 1863,
  edition: "Delivered at the Soldiers' National Cemetery, Gettysburg, Pennsylvania, 19 November 1863",
  source_url: 'https://en.wikisource.org/wiki/Gettysburg_Address',
};
const SECOND_INAUGURAL: WorkRef = {
  title: 'Second Inaugural Address',
  type: 'speech',
  year: 1865,
  edition: 'Delivered at the U.S. Capitol, 4 March 1865 — five weeks before Lincoln\'s assassination',
  source_url: 'https://en.wikisource.org/wiki/Second_Inaugural_Address',
};
const FIRST_INAUGURAL: WorkRef = {
  title: 'First Inaugural Address',
  type: 'speech',
  year: 1861,
  edition: 'Delivered at the U.S. Capitol, 4 March 1861',
  source_url: 'https://en.wikisource.org/wiki/First_Inaugural_Address_(Lincoln)',
};
const HOUSE_DIVIDED: WorkRef = {
  title: 'House Divided Speech',
  type: 'speech',
  year: 1858,
  edition: 'Delivered at the Illinois Republican State Convention, Springfield, IL, 16 June 1858',
  source_url: 'https://en.wikisource.org/wiki/House_Divided_Speech',
};
const COOPER_UNION: WorkRef = {
  title: 'Cooper Union Address',
  type: 'speech',
  year: 1860,
  edition: 'Delivered at the Cooper Union, New York City, 27 February 1860',
  source_url: 'https://en.wikisource.org/wiki/Cooper_Union_speech',
};
const LYCEUM: WorkRef = {
  title: 'The Lyceum Address',
  type: 'speech',
  year: 1838,
  edition: "Delivered to the Young Men's Lyceum, Springfield, Illinois, 27 January 1838",
  source_url: 'https://en.wikisource.org/wiki/Lyceum_address',
};
const PEORIA: WorkRef = {
  title: 'Peoria Speech',
  type: 'speech',
  year: 1854,
  edition: 'Delivered at Peoria, Illinois, 16 October 1854 — in reply to Senator Stephen Douglas',
  source_url: 'https://en.wikisource.org/wiki/Speech_at_Peoria,_Illinois',
};

const cert = { confidence: 'certain' as const };
const claim = { claimed: 'Abraham Lincoln', verified: true, ...cert };

export const lincolnQuotes: QuoteRecord[] = [
  // ── Gettysburg Address (1863) ───────────────────────────────────────
  {
    id: 'lincoln-gettysburg-four-score',
    text: 'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.',
    attribution: claim,
    work: GETTYSBURG,
    context: 'Opening sentence of the Gettysburg Address.',
    famous: true,
    tags: ['liberty', 'opening-line', 'civil-war'],
  },
  {
    id: 'lincoln-gettysburg-government',
    text: 'That this nation, under God, shall have a new birth of freedom — and that government of the people, by the people, for the people, shall not perish from the earth.',
    attribution: claim,
    work: GETTYSBURG,
    context: 'Closing of the Gettysburg Address.',
    famous: true,
    tags: ['government', 'democracy', 'closing-line'],
  },
  {
    id: 'lincoln-gettysburg-died-vain',
    text: 'We here highly resolve that these dead shall not have died in vain.',
    attribution: claim,
    work: GETTYSBURG,
    famous: true,
    tags: ['sacrifice', 'civil-war'],
  },
  {
    id: 'lincoln-gettysburg-cannot-dedicate',
    text: 'The world will little note, nor long remember what we say here, but it can never forget what they did here.',
    attribution: claim,
    work: GETTYSBURG,
    context: "Lincoln's modest framing — proven mistaken by history.",
    famous: true,
    tags: ['memory', 'sacrifice'],
  },

  // ── Second Inaugural Address (1865) ─────────────────────────────────
  {
    id: 'lincoln-second-inaugural-malice',
    text: 'With malice toward none, with charity for all, with firmness in the right as God gives us to see the right, let us strive on to finish the work we are in, to bind up the nation\'s wounds.',
    attribution: claim,
    work: SECOND_INAUGURAL,
    context: 'Closing passage of the Second Inaugural — written in the war\'s final weeks.',
    famous: true,
    tags: ['reconciliation', 'closing-line', 'civil-war'],
  },
  {
    id: 'lincoln-second-inaugural-both-read',
    text: 'Both read the same Bible, and pray to the same God; and each invokes His aid against the other.',
    attribution: claim,
    work: SECOND_INAUGURAL,
    famous: true,
    tags: ['religion', 'civil-war'],
  },

  // ── First Inaugural Address (1861) ──────────────────────────────────
  {
    id: 'lincoln-first-inaugural-not-enemies',
    text: 'We are not enemies, but friends. We must not be enemies. Though passion may have strained, it must not break our bonds of affection.',
    attribution: claim,
    work: FIRST_INAUGURAL,
    context: 'Closing passage as the nation stood on the brink of civil war.',
    famous: true,
    tags: ['unity', 'civil-war'],
  },
  {
    id: 'lincoln-first-inaugural-mystic-chords',
    text: 'The mystic chords of memory, stretching from every battlefield, and patriot grave, to every living heart and hearthstone, all over this broad land, will yet swell the chorus of the Union, when again touched, as surely they will be, by the better angels of our nature.',
    attribution: claim,
    work: FIRST_INAUGURAL,
    context: 'Final sentence of the First Inaugural — Lincoln substantially edited William Seward\'s draft.',
    famous: true,
    tags: ['unity', 'memory', 'closing-line'],
  },

  // ── House Divided Speech (1858) ─────────────────────────────────────
  {
    id: 'lincoln-house-divided',
    text: 'A house divided against itself cannot stand.',
    attribution: claim,
    work: HOUSE_DIVIDED,
    context: "The phrase derives from the Gospel of Mark 3:25; Lincoln applied it to slavery in the United States.",
    famous: true,
    tags: ['unity', 'slavery'],
  },
  {
    id: 'lincoln-house-divided-half',
    text: 'I believe this government cannot endure, permanently half slave and half free.',
    attribution: claim,
    work: HOUSE_DIVIDED,
    famous: true,
    tags: ['slavery', 'union'],
  },

  // ── Letter to Horace Greeley (22 Aug 1862) ──────────────────────────
  {
    id: 'lincoln-greeley-save-union',
    text: 'My paramount object in this struggle is to save the Union, and is not either to save or to destroy slavery. If I could save the Union without freeing any slave I would do it, and if I could save it by freeing all the slaves I would do it; and if I could save it by freeing some and leaving others alone I would also do that.',
    attribution: claim,
    work: {
      title: 'Letter to Horace Greeley',
      type: 'letter',
      year: 1862,
      edition: 'Public letter to Horace Greeley of the New-York Tribune, 22 August 1862; published 25 August 1862',
      source_url: 'https://en.wikisource.org/wiki/Letter_to_Horace_Greeley',
    },
    context: 'Lincoln\'s public defense of his cautious approach to emancipation, written while the Emancipation Proclamation was already drafted but not yet announced.',
    famous: true,
    tags: ['union', 'slavery', 'civil-war'],
  },

  // ── Letter to Mrs. Bixby (21 Nov 1864) ──────────────────────────────
  {
    id: 'lincoln-bixby-letter',
    text: 'I feel how weak and fruitless must be any words of mine which should attempt to beguile you from the grief of a loss so overwhelming. But I cannot refrain from tendering you the consolation that may be found in the thanks of the Republic they died to save.',
    attribution: claim,
    work: {
      title: 'Bixby Letter',
      type: 'letter',
      year: 1864,
      edition: 'Letter to Lydia Bixby, 21 November 1864 — written believing she had lost five sons in the Civil War',
      source_url: 'https://en.wikisource.org/wiki/Bixby_letter',
    },
    notes:
      "Authorship is disputed — some scholars credit John Hay, Lincoln's secretary. The letter is widely treated as canonical Lincoln. Mrs. Bixby had actually lost two sons (not five); the others survived.",
    famous: true,
    tags: ['grief', 'civil-war'],
  },

  // ── Cooper Union Address (1860) ─────────────────────────────────────
  {
    id: 'lincoln-cooper-union-right-might',
    text: 'Let us have faith that right makes might, and in that faith, let us, to the end, dare to do our duty as we understand it.',
    attribution: claim,
    work: COOPER_UNION,
    context: 'Closing line of the Cooper Union Address — the speech that made Lincoln a national figure and put him on the path to the presidency.',
    famous: true,
    tags: ['duty', 'closing-line'],
  },

  // ── Lyceum Address (1838) ───────────────────────────────────────────
  {
    id: 'lincoln-lyceum-suicide',
    text: 'If destruction be our lot, we must ourselves be its author and finisher. As a nation of freemen, we must live through all time, or die by suicide.',
    attribution: claim,
    work: LYCEUM,
    context: "Lincoln at 28, on the dangers of mob violence and tyranny.",
    famous: true,
    tags: ['nation', 'mob', 'civil-war'],
  },
  {
    id: 'lincoln-lyceum-towering-genius',
    text: 'Towering genius disdains a beaten path. It seeks regions hitherto unexplored.',
    attribution: claim,
    work: LYCEUM,
    famous: true,
    tags: ['ambition', 'genius'],
  },
  {
    id: 'lincoln-lyceum-reason',
    text: 'Reason, cold, calculating, unimpassioned reason, must furnish all the materials for our future support and defence.',
    attribution: claim,
    work: LYCEUM,
    famous: true,
    tags: ['reason', 'governance'],
  },

  // ── Peoria Speech (1854) ────────────────────────────────────────────
  {
    id: 'lincoln-peoria-no-man-good-enough',
    text: "No man is good enough to govern another man without that other's consent.",
    attribution: claim,
    work: PEORIA,
    context: "Lincoln's repudiation of the Kansas-Nebraska Act and the principle of popular sovereignty over slavery.",
    famous: true,
    tags: ['democracy', 'consent', 'slavery'],
  },
  {
    id: 'lincoln-peoria-stand-with-right',
    text: 'Stand with anybody that stands RIGHT. Stand with him while he is right and PART with him when he goes wrong.',
    attribution: claim,
    work: PEORIA,
    famous: true,
    tags: ['principle', 'integrity'],
  },
  {
    id: 'lincoln-peoria-slavery-selfishness',
    text: "Slavery is founded in the selfishness of man's nature — opposition to it, in his love of justice.",
    attribution: claim,
    work: PEORIA,
    famous: true,
    tags: ['slavery', 'justice'],
  },

  // ── Definition of Democracy (1858) ──────────────────────────────────
  {
    id: 'lincoln-democracy-slave-master',
    text: 'As I would not be a slave, so I would not be a master. This expresses my idea of democracy.',
    attribution: claim,
    work: {
      title: 'Definition of Democracy',
      type: 'essay',
      year: 1858,
      edition: 'Fragment, c. 1 August 1858. ' + COLLECTED_WORKS + ', Vol. 2, p. 532',
      source_url: 'https://en.wikisource.org/wiki/Definition_of_Democracy',
    },
    famous: true,
    tags: ['democracy', 'slavery'],
  },

  // ── Fragment on Government (1854) ───────────────────────────────────
  {
    id: 'lincoln-government-fragment',
    text: 'The legitimate object of government, is to do for a community of people, whatever they need to have done, but can not do, at all, or can not, so well do, for themselves.',
    attribution: claim,
    work: {
      title: 'Fragment on Government',
      type: 'essay',
      year: 1854,
      edition: 'Fragment, July 1854. ' + COLLECTED_WORKS + ', Vol. 2, pp. 220-221',
    },
    famous: true,
    tags: ['government', 'philosophy'],
  },

  // ── Fragment on Slavery (1854) ──────────────────────────────────────
  {
    id: 'lincoln-fragment-slavery-color',
    text: 'You say A. is white, and B. is black. It is color, then; the lighter, having the right to enslave the darker? Take care.',
    attribution: claim,
    work: {
      title: 'Fragment on Slavery',
      type: 'essay',
      year: 1854,
      edition: 'Fragment, c. April 1854. ' + COLLECTED_WORKS + ', Vol. 2, pp. 222-223',
    },
    famous: true,
    tags: ['slavery', 'racism', 'logic'],
  },

  // ── Notes for a Law Lecture (1850) ──────────────────────────────────
  {
    id: 'lincoln-law-discourage-litigation',
    text: 'Discourage litigation. Persuade your neighbors to compromise whenever you can. Point out to them how the nominal winner is often a real loser — in fees, expenses, and waste of time.',
    attribution: claim,
    work: {
      title: 'Notes for a Law Lecture',
      type: 'essay',
      year: 1850,
      edition: 'Manuscript fragment, c. 1 July 1850. ' + COLLECTED_WORKS,
    },
    famous: true,
    tags: ['law', 'advice'],
  },
  {
    id: 'lincoln-law-leave-nothing',
    text: 'Leave nothing for to-morrow which can be done to-day. Never let your correspondence fall behind.',
    attribution: claim,
    work: {
      title: 'Notes for a Law Lecture',
      type: 'essay',
      year: 1850,
      edition: 'Manuscript fragment, c. 1 July 1850. ' + COLLECTED_WORKS,
    },
    famous: true,
    tags: ['advice', 'discipline'],
  },

  // ── Letters and miscellany ──────────────────────────────────────────
  {
    id: 'lincoln-stuart-letter-misery',
    text: 'I am now the most miserable man living. If what I feel were equally distributed to the whole human family, there would not be one cheerful face on the earth.',
    attribution: claim,
    work: {
      title: 'Letter to John T. Stuart',
      type: 'letter',
      year: 1841,
      edition: '23 January 1841. ' + COLLECTED_WORKS + ', Vol. 1, pp. 229-230',
    },
    context: "Lincoln writing during one of his deepest depressive episodes, after his broken engagement to Mary Todd (later reconciled).",
    famous: true,
    tags: ['depression', 'biography'],
  },
  {
    id: 'lincoln-mexican-war-rise-up',
    text: 'Any people anywhere, being inclined and having the power, have the right to rise up, and shake off the existing government, and form a new one that suits them better.',
    attribution: claim,
    work: {
      title: 'Speech in the U.S. House of Representatives',
      type: 'speech',
      year: 1848,
      edition: 'Delivered 12 January 1848 — opposing the Mexican-American War',
    },
    famous: true,
    tags: ['revolution', 'liberty'],
  },
  {
    id: 'lincoln-mexican-war-rainbow-blood',
    text: 'Military glory, — that attractive rainbow that rises in showers of blood.',
    attribution: claim,
    work: {
      title: 'Speech in the U.S. House of Representatives',
      type: 'speech',
      year: 1848,
      edition: 'Delivered 12 January 1848 — opposing the Mexican-American War',
    },
    famous: true,
    tags: ['war', 'cynicism'],
  },
  {
    id: 'lincoln-friendships',
    text: "The better part of one's life consists of his friendships.",
    attribution: claim,
    work: {
      title: 'Letter to Joseph Gillespie',
      type: 'letter',
      year: 1849,
      edition: '13 July 1849. ' + COLLECTED_WORKS,
    },
    famous: true,
    tags: ['friendship'],
  },
  {
    id: 'lincoln-marriage-blockhead',
    text: 'I have now come to the conclusion never again to think of marrying, and for this reason; I can never be satisfied with anyone who would be blockhead enough to have me.',
    attribution: claim,
    work: {
      title: 'Letter to Mrs. Orville H. Browning',
      type: 'letter',
      year: 1838,
      edition: '1 April 1838. ' + COLLECTED_WORKS + ', Vol. 1, p. 119',
    },
    context: "Lincoln writing in self-deprecating jest after a failed courtship of Mary Owens.",
    famous: true,
    tags: ['marriage', 'wit', 'self-deprecation'],
  },
  {
    id: 'lincoln-education-1832',
    text: 'I view [education] as the most important subject which we as a people can be engaged in.',
    attribution: claim,
    work: {
      title: 'Address Delivered in Candidacy for the State Legislature',
      type: 'speech',
      year: 1832,
      edition: '9 March 1832 — Lincoln\'s first political address, age 23',
    },
    famous: true,
    tags: ['education'],
  },
  {
    id: 'lincoln-presidential-war-power',
    text: 'Allow the President to invade a neighboring nation whenever he shall deem it necessary to repel an invasion, and you allow him to make war at pleasure.',
    attribution: claim,
    work: {
      title: 'Letter to William H. Herndon',
      type: 'letter',
      year: 1848,
      edition: '15 February 1848. Written from Washington opposing the Mexican-American War',
    },
    famous: true,
    tags: ['war', 'executive-power'],
  },
  {
    id: 'lincoln-determine-thing-done',
    text: 'Determine that the thing can and shall be done, and then we shall find the way.',
    attribution: claim,
    work: {
      title: 'Speech in the House of Representatives on Internal Improvements',
      type: 'speech',
      year: 1848,
      edition: '20 June 1848',
    },
    famous: true,
    tags: ['determination', 'will'],
  },
  {
    id: 'lincoln-some-laboured',
    text: 'It has so happened in all ages of the world, that some have laboured, and others have, without labour, enjoyed a large proportion of the fruits. This is wrong, and should not continue.',
    attribution: claim,
    work: {
      title: 'Fragments of a Tariff Discussion',
      type: 'essay',
      year: 1847,
      edition: 'c. 1 December 1847. ' + COLLECTED_WORKS + ', Vol. 1',
    },
    famous: true,
    tags: ['labor', 'inequality'],
  },
  {
    id: 'lincoln-free-labor-hope',
    text: 'Free labor has the inspiration of hope; pure slavery has no hope.',
    attribution: claim,
    work: {
      title: 'Fragmentary manuscript on free labor',
      type: 'essay',
      year: 1859,
      edition: 'c. 17 September 1859. ' + COLLECTED_WORKS + ', Vol. 3, pp. 463-464',
    },
    famous: true,
    tags: ['labor', 'hope', 'slavery'],
  },

  // ── Misattributions ─────────────────────────────────────────────────
  {
    id: 'lincoln-misattrib-fool-people',
    text: 'You can fool all the people some of the time, and some of the people all the time, but you cannot fool all the people all the time.',
    attribution: {
      claimed: 'Abraham Lincoln',
      verified: false,
      confidence: 'disputed',
      earliest_known_source:
        "First documented attribution to Lincoln in 1887 (22 years after his death) in the prohibitionist publication 'The Voice.' No contemporary documentation. The aphorism may have been said by Lincoln in conversation, but no primary source places the words in his writing or recorded speech.",
    },
    notes:
      "Among the most-attributed-to-Lincoln quotations. Per Quote Investigator and Don and Virginia Fehrenbacher's 'Recollected Words of Abraham Lincoln' (1996), the attribution is unverifiable. The phrasing also surfaces in 19th-century French (attributed to Jacques Abbadie, 1684) — a sentiment older than the United States.",
    famous: true,
    tags: ['politics', 'truth', 'misattributed'],
  },
  {
    id: 'lincoln-misattrib-predict-future',
    text: 'The best way to predict your future is to create it.',
    attribution: {
      claimed: 'Abraham Lincoln',
      verified: false,
      confidence: 'disputed',
      actual_author: 'Peter Drucker',
      earliest_known_source:
        "Peter Drucker's 1970s management writing ('The best way to predict the future is to create it'). Also widely attributed to Alan Kay, who said something similar at PARC. NOT documented in any 19th-century Lincoln source.",
    },
    notes:
      "A management-consulting aphorism reattributed to Lincoln in late-20th-century motivational writing. Per Quote Investigator: no Lincoln connection.",
    famous: true,
    tags: ['future', 'misattributed'],
  },
  {
    id: 'lincoln-misattrib-whatever-good',
    text: 'Whatever you are, be a good one.',
    attribution: {
      claimed: 'Abraham Lincoln',
      verified: false,
      confidence: 'disputed',
      earliest_known_source:
        "No documentation in any of Lincoln's writings, speeches, or recorded conversations. The earliest attributions to Lincoln appear in 20th-century motivational publications.",
    },
    notes:
      "Frequently used on motivational posters and graduation speeches. Per Quote Investigator: no Lincoln source. Some variants attributed to a 19th-century pastor, but no firm trail.",
    famous: true,
    tags: ['advice', 'misattributed'],
  },
  {
    id: 'lincoln-misattrib-life-in-years',
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    attribution: {
      claimed: 'Abraham Lincoln',
      verified: false,
      confidence: 'disputed',
      earliest_known_source:
        "First documented in 1947 in the Adlai E. Stevenson II tradition; not in any 19th-century Lincoln source. Per Quote Investigator, similar lines appear in early-20th-century inspirational writing.",
    },
    notes: "A 20th-century motivational saying with no Lincoln origin.",
    famous: true,
    tags: ['life', 'misattributed'],
  },
  {
    id: 'lincoln-misattrib-character-power',
    text: "Nearly all men can stand adversity, but if you want to test a man's character, give him power.",
    attribution: {
      claimed: 'Abraham Lincoln',
      verified: false,
      confidence: 'disputed',
      earliest_known_source:
        "Closest historical source is Robert G. Ingersoll's 1883 lecture, where Ingersoll attributed similar phrasing to others. No primary Lincoln document contains it.",
    },
    notes: "Per Quote Investigator: the attribution to Lincoln is unverifiable and post-dates his death by decades.",
    famous: true,
    tags: ['character', 'power', 'misattributed'],
  },
  {
    id: 'lincoln-misattrib-internet',
    text: "Don't believe everything you read on the internet just because there's a picture with a quote next to it.",
    attribution: {
      claimed: 'Abraham Lincoln',
      verified: false,
      confidence: 'disputed',
      actual_author: 'Internet meme (2010s)',
      earliest_known_source: '2010s social-media posts. The joke is self-referential — attributing a comment about internet misattribution to a 19th-century figure who never used the internet is the punchline.',
    },
    notes: 'Frequently shared as a Lincoln quote ironically. Useful as a sanity-check entry — anyone querying check_attribution with this text should get the joke spelled out.',
    famous: true,
    tags: ['internet', 'meta', 'misattributed'],
  },
];
