import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { Tag } from './Tag';

interface TimelineItemProps {
  title: string;
  employer: string;
  period: string;
  children?: string;
  tags?: string[];
  location?: string;
}

// Timeline entry component for work experience and other chronological items
// Displays job title, company, dates, description, and associated skills
export const TimelineItem = ({
  title,
  period,
  children,
  employer,
  tags = [],
  location,
}: TimelineItemProps) => (
  <View wrap={false} style={{ marginBottom: 10 }}>
    {/* Header row with title/employer on left and dates on right */}
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2.5,
        flexWrap: 'wrap',
      }}
    >
      <Text style={{ fontWeight: 'bold' }}>
        {title}, <Text style={{ fontWeight: 'normal' }}>{employer}</Text>
      </Text>
      <Text>{period}</Text>
    </View>

    {/* Job description or summary */}
    {children && <Text style={{ marginBottom: 2.5 }}>{children}</Text>}

    {/* Skills/tags associated with this position */}
    {tags && tags.length > 0 && (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {tags.map((tag) => (
          <Tag key={tag} color="#b565f5">
            {tag}
          </Tag>
        ))}
      </View>
    )}
  </View>
);