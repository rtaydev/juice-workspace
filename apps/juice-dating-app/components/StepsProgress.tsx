import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemedView } from './ThemedView';

interface StepsProgressProps {
  steps: string[] | null[];
  currentStep: number;
}

const StepsProgress: React.FC<StepsProgressProps> = ({ steps, currentStep }) => {
  return (
    <ThemedView style={styles.container}>
      {steps.map((step, index) => (
        <View
          key={index}
          style={[
            styles.step,
            index <= currentStep ? styles.activeStep : styles.inactiveStep,
          ]}
        >
          {step && <Text style={styles.stepText}>{step}</Text>}
        </View>
      ))}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  step: {
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  activeStep: {
    backgroundColor: '#4CAF50', // Replace with your theme's active color
  },
  inactiveStep: {
    backgroundColor: '#E0E0E0', // Replace with your theme's inactive color
  },
  stepText: {
    color: '#FFFFFF', // Replace with your theme's text color
  },
});

export default StepsProgress;