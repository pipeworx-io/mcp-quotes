export interface FullSpeech {
  speaker: string | null;
  lines: string[];
  stage: string | null;
}

export interface FullScene {
  number: number;
  setting: string;
  speeches: FullSpeech[];
}

export interface FullAct {
  number: number;
  scenes: FullScene[];
}

export interface FullChapter {
  number: number;
  title: string | null;
  paragraphs: string[];
}

export interface FullTextWork {
  workId: string;
  authorId: string;
  workSlug: string;
  workTitle: string;
  year: number;
  source: string;
  // Plays carry acts; chapter-based works carry chapters. Exactly one is present.
  acts?: FullAct[];
  chapters?: FullChapter[];
}
