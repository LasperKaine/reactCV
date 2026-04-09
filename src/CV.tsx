import React from 'react';
import { Document, Page, View, Text } from '@react-pdf/renderer';
import { Box, TimelineItem } from './components/index.ts';
import { ResumeData } from './types/resume.ts';

export const CVDocument = ({ data }: { data: ResumeData }) => (
  <Document>
    <Page style={{ padding: 30 }}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          {data.basics.name}
        </Text>
        <Text>{data.basics.email}</Text>
      </View>

      {data.work && data.work.length > 0 && (
        <Box title="Work Experience" color={data.work[0]?.color}>
          {data.work.map((job, idx) => (
            <TimelineItem
              key={idx}
              title={job.position}
              employer={job.name}
              period={`${job.startDate} - ${job.endDate}`}
              tags={job.skills}
            >
              {job.summary}
            </TimelineItem>
          ))}
        </Box>
      )}

      {data.education && data.education.length > 0 && (
        <Box title="Education">
          {data.education.map((edu, idx) => (
            <TimelineItem
              key={idx}
              title={edu.studyType}
              employer={edu.institution}
              period={`${edu.startDate} - ${edu.endDate}`}
            >
              {edu.area}
            </TimelineItem>
          ))}
        </Box>
      )}
    </Page>
  </Document>
);