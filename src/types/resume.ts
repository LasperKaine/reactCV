export interface Profile {
  network: string;
  url: string;
}

export interface BasicsData {
  name: string;
  email: string;
  phone?: string;
  summary?: string;
  profiles?: Profile[];
}

export interface WorkItem {
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string;
  skills?: string[];
  color?: string;
}

export interface EducationItem {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
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
  work: WorkItem[];
  education: EducationItem[];
  skills?: Skill[];
  languages?: Language[];
}