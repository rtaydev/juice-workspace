import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ThemedButton from '@/components/ThemedButton';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import HeartIcon from '@/components/icons/HeartIcon';
import { useThemeColor } from '@/hooks/useThemeColor';
import { router } from 'expo-router';

// WelcomeScreen Component
const WelcomeScreen = () => {
  const backgroundColor = useThemeColor({}, 'primary');
  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={styles.topSection}>
        <ThemedText type="title" lightColor="#fff" darkColor="#fff">Juice Dating App</ThemedText>
      </ThemedView>
      <ThemedView style={styles.middleSection}>
        <HeartIcon width={100} height={100} />
      </ThemedView>
      <ThemedView style={styles.bottomSection}>
        <ThemedButton title="Login" onPress={() => router.push('/onboarding/login')} darkColor="#fff" />
        <ThemedButton title="Sign Up" onPress={() => router.push('/onboarding/register/step1')} variant="text" />
      </ThemedView>
    </SafeAreaView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  topSection: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  middleSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

export default WelcomeScreen;