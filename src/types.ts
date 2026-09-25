export type WorkType =
  | 'novel'
  | 'play'
  | 'essay'
  | 'poem'
  | 'short_story'
  | 'letter'
  | 'speech'
  | 'interview'
  | 'notebook'
  | 'cable';

export interface WorkRef {
  title: string;
  type: WorkType;
  year: number;
  edition?: string;
  source_url?: string;
}

export interface Location {
  act?: number;
  scene?: number;
  line?: string;
  chapter?: number;
  page?: number;
}

export interface Attribution {
  claimed: string;
  verified: boolean;
  confidence?: 'certain' | 'likely' | 'disputed';
  actual_author?: string;
  earliest_known_source?: string;
}

export interface QuoteRecord {
  id: string;
  text: string;
  attribution: Attribution;
  speaker?: string;
  work?: WorkRef;
  location?: Location;
  context?: string;
  notes?: string;
  tags?: string[];
  famous?: boolean;
  popular_paraphrase?: string;
}

export interface AuthorRef {
  id: string;
  name: string;
  born: number;
  died: number;
  public_domain: boolean;
}
