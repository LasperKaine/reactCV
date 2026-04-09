export interface BasicsData {
  name: string;
  email: string;
}

export interface WorkExperience {
  position: string;
  name: string;
  startDate: string;
  endDate: string;
  summary: string;
  skills?: string[];
  color?: string;
}

export interface Education {
  studyType: string;
  institution: string;
  startDate: string;
  endDate: string;
  area: string;
}

export interface ResumeData {
  basics: BasicsData;
  work?: WorkExperience[];
  education?: Education[];
}