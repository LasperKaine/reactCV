import { renderToFile } from '@react-pdf/renderer';
import path from 'path';
import resumeData from './data/resume.json';
import { CVDocument } from './CV';

// Set output location for the generated PDF file
const outputPath = path.join(__dirname, 'dist', 'resume.pdf');

// Render the CV document to a PDF file
// Uses the resume.json data to populate the CV template
renderToFile(CVDocument({ data: resumeData }), outputPath)
  .then(() => {
    // Success message with file path
    console.log(`PDF generated: ${outputPath}`);
  })
  .catch((error) => {
    // Handle any errors during PDF generation
    console.error('Error generating PDF:', error);
  });