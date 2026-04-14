import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { SectionHeader } from './SectionHeader';

interface BoxProps {
  title: string;
  color?: string;
  children: React.ReactNode;
  style?: any;
}

export const Box = ({ children, title, color, style = {} }: BoxProps) => (
  <View wrap={false} style={{ marginBottom: 20 }}>
    <SectionHeader color={color}>{title}</SectionHeader>
    <View style={{ ...style }}>
      {typeof children === 'string' ? (
        <Text>{children}</Text>
      ) : (
        children
      )}
    </View>
  </View>
);