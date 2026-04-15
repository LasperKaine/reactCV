import { renderToFile } from '@react-pdf/renderer';
import path from 'path';
import resumeDataEn from './data/resume-en.json';
import resumeDataFi from './data/resume-fi.json';
import { CVDocument } from './CV';

const distPath = path.join(__dirname, 'dist');

// Generate English resume
const englishPath = path.join(distPath, 'resume-en.pdf');
renderToFile(CVDocument({ data: { ...resumeDataEn, language: 'en' } }), englishPath)
  .then(() => console.log(`English resume generated: ${englishPath}`))
  .catch((error) => console.error('Error generating English resume:', error));

// Generate Finnish resume
const finnishPath = path.join(distPath, 'resume-fi.pdf');
renderToFile(CVDocument({ data: { ...resumeDataFi, language: 'fi' } }), finnishPath)
  .then(() => console.log(`Finnish resume generated: ${finnishPath}`))
  .catch((error) => console.error('Error generating Finnish resume:', error));