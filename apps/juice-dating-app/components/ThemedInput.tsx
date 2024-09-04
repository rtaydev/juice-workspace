import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

interface ThemedInputProps extends TextInputProps {
  label: string;
  error?: string;
}

const ThemedInput: React.FC<ThemedInputProps> = ({ label, error, ...props }) => {
  const { colors } = useTheme();

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={[styles.label, { color: colors.text }]}>{label}</ThemedText>
      <TextInput
        style={[styles.input, { borderColor: colors.border, color: colors.text }]}
        {...props}
      />
      {error && <ThemedText style={styles.error}>{error}</ThemedText>}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginLeft: 10,
    marginBottom: 3,
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginTop: 4,
  },
});

export default ThemedInput;