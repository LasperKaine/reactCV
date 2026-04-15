import React from 'react';
import { View, Text } from '@react-pdf/renderer';

interface SectionHeaderProps {
  children: string;
  color?: string;
}

// Renders a section title with a colored bottom border
// Used as the header for all major CV sections
export const SectionHeader = ({ children, color = '#000' }: SectionHeaderProps) => (
  <View
    style={{
      borderBottomColor: color,
      borderBottomWidth: 2,
      marginBottom: 10,
      paddingBottom: 5,
    }}
  >
    {/* Bold title text that matches the border color */}
    <Text style={{ fontSize: 16, fontWeight: 'bold', color }}>
      {children}
    </Text>
  </View>
);