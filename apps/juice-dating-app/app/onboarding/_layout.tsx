import React from "react";
import { Stack } from "expo-router";
import { StepsProvider } from "@/context/StepsContext";

const OnboardingLayout: React.FC = () => {
  return (
    <StepsProvider>
      <Stack>
        <Stack.Screen name="login" options={{ title: "Login" }} />
        <Stack.Screen
          name="register/step1"
          options={{ title: "Register - Step 1" }}
        />
        <Stack.Screen
          name="register/step2"
          options={{ title: "Register - Step 2" }}
        />
        <Stack.Screen
          name="register/step3"
          options={{ title: "Register - Step 3" }}
        />
      </Stack>
    </StepsProvider>
  );
};

export default OnboardingLayout;
