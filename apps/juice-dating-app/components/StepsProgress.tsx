import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

interface StepsProgressProps {
  steps: string[] | null[];
  currentStep: number;
}

const StepsProgress: React.FC<StepsProgressProps> = ({
  steps,
  currentStep,
}) => {
  const theme = useColorScheme() ?? "light";
  const activeStepStyle = (theme: "light" | "dark") => ({
    backgroundColor: Colors[theme].secondary,
  });

  const inactiveStepStyle = (theme: "light" | "dark") => ({
    backgroundColor: Colors[theme].secondaryInactive,
  });
  const stepText = (theme: "light" | "dark") => ({
    color: Colors[theme].text,
  });

  return (
    <ThemedView style={styles.container}>
      {steps.map((step, index) => (
        <View
          key={index}
          style={[
            styles.step,
            index <= currentStep
              ? activeStepStyle(theme)
              : inactiveStepStyle(theme),
          ]}
        >
          {step && <Text style={stepText(theme)}>{step}</Text>}
        </View>
      ))}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  step: {
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    flex: 1,
  },
});

export default StepsProgress;
