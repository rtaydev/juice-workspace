import React from 'react';
import { Stack } from 'expo-router';

const OnboardingLayout: React.FC = () => {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ title: 'Login' }} />
      {/* <Stack.Screen name="register/step1" options={{ title: 'Register - Step 1' }} />
      <Stack.Screen name="register/step2" options={{ title: 'Register - Step 2' }} />
      <Stack.Screen name="register/step3" options={{ title: 'Register - Step 3' }} /> */}
    </Stack>
  );
};

export default OnboardingLayout;