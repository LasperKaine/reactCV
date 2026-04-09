import { renderToFile } from '@react-pdf/renderer';
import path from 'path';
import resumeData from './data/resume.json';
import { CVDocument } from './CV.tsx';

const outputPath = path.join(__dirname, 'dist', 'resume.pdf');

renderToFile(CVDocument({ data: resumeData }), outputPath)
  .then(() => {
    console.log(`PDF generated: ${outputPath}`);
  })
  .catch((error) => {
    console.error('Error generating PDF:', error);
  });