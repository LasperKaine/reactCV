import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { SectionHeader } from './SectionHeader';

interface BoxProps {
  title: string;
  color?: string;
  children: React.ReactNode;
  style?: any;
}

// Reusable box component for CV sections
// Wraps content with a styled header and maintains consistent spacing
export const Box = ({ children, title, color, style = {} }: BoxProps) => (
  <View wrap={false} style={{ marginBottom: 20 }}>
    {/* Section header with optional color customization */}
    <SectionHeader color={color}>{title}</SectionHeader>
    
    {/* Content area - handles both string and component children */}
    <View style={{ ...style }}>
      {typeof children === 'string' ? (
        <Text>{children}</Text>
      ) : (
        children
      )}
    </View>
  </View>
);