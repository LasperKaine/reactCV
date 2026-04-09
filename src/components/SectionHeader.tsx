import React from 'react';
import { View, Text } from '@react-pdf/renderer';

interface SectionHeaderProps {
  children: string;
  color?: string;
}

export const SectionHeader = ({ children, color = '#000' }: SectionHeaderProps) => (
  <View
    style={{
      borderBottomColor: color,
      borderBottomWidth: 2,
      marginBottom: 10,
      paddingBottom: 5,
    }}
  >
    <Text style={{ fontSize: 16, fontWeight: 'bold', color }}>
      {children}
    </Text>
  </View>
);