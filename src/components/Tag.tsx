import React from 'react';
import { View, Text } from '@react-pdf/renderer';

interface TagProps {
  children: string;
  color?: string;
}

export const Tag = ({ children, color = '#e0e0e0' }: TagProps) => (
  <View
    style={{
      backgroundColor: color,
      marginRight: 5,
      marginBottom: 5,
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 3,
    }}
  >
    <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#fff' }}>
      {children}
    </Text>
  </View>
);