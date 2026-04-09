import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { Tag } from './Tag.tsx';
import { tagColors } from '../constants/tagColors.ts';

interface TimelineItemProps {
  title: string;
  employer: string;
  period: string;
  children?: string;
  tags?: string[];
  location?: string;
}

export const TimelineItem = ({
  title,
  period,
  children,
  employer,
  tags = [],
  location,
}: TimelineItemProps) => (
  <View wrap={false} style={{ marginBottom: 10 }}>
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
    {children && <Text style={{ marginBottom: 2.5 }}>{children}</Text>}
    {tags && tags.length > 0 && (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {tags.map((tag) => (
          <Tag key={tag} color={tagColors[tag.toLowerCase()] || tagColors.default}>
            {tag}
          </Tag>
        ))}
      </View>
    )}
  </View>
);