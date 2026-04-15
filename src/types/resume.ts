export interface BasicsData {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  summary?: string;
  about?: string;
  profiles?: Array<{ url: string; label?: string; display?: string }>;
}

export interface WorkItem {
  position: string;
  name: string;
  startDate: string;
  endDate: string;
  summary: string;
  skills?: string[];
  color?: string;
  location?: string;
}

export interface Education {
  studyType: string;
  institution: string;
  startDate: string;
  endDate: string;
  area: string;
}

export interface Skill {
  name: string;
  keywords: string[];
}

export interface Language {
  language: string;
  fluency: string;
}

export interface ResumeData {
  basics: BasicsData;
  work?: WorkItem[];
  education?: Education[];
  skills?: Skill[];
  languages?: Language[];
}