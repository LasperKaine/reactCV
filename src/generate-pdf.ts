import { renderToFile } from '@react-pdf/renderer';
import path from 'path';
import resumeDataEn from './data/resume-it-en.json';
import resumeDataFi from './data/resume-it-fi.json';
import resumeDataGeneralEn from './data/resume-general-en.json';
import resumeDataGeneralFi from './data/resume-general-fi.json';
import { CVDocument } from './CV';

const distPath = path.join(__dirname, 'dist');

// Generate English Developer resume
const englishPath = path.join(distPath, 'resume-en.pdf');
renderToFile(CVDocument({ data: { ...resumeDataEn, language: 'en' } }), englishPath)
  .then(() => console.log(`English Developer resume generated: ${englishPath}`))
  .catch((error) => console.error('Error generating English resume:', error));

// Generate Finnish Developer resume
const finnishPath = path.join(distPath, 'resume-fi.pdf');
renderToFile(CVDocument({ data: { ...resumeDataFi, language: 'fi' } }), finnishPath)
  .then(() => console.log(`Finnish Developer resume generated: ${finnishPath}`))
  .catch((error) => console.error('Error generating Finnish resume:', error));

// Generate General/Non-IT English resume
const generalEnPath = path.join(distPath, 'resume-general-en.pdf');
renderToFile(CVDocument({ data: { ...resumeDataGeneralEn, language: 'en' } }), generalEnPath)
  .then(() => console.log(`General English resume generated: ${generalEnPath}`))
  .catch((error) => console.error('Error generating general English resume:', error));

// Generate General/Non-IT Finnish resume
const generalFiPath = path.join(distPath, 'resume-general-fi.pdf');
renderToFile(CVDocument({ data: { ...resumeDataGeneralFi, language: 'fi' } }), generalFiPath)
  .then(() => console.log(`General Finnish resume generated: ${generalFiPath}`))
  .catch((error) => console.error('Error generating general Finnish resume:', error));