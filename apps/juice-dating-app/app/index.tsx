import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import ThemedButton from '@/components/ThemedButton';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
// WelcomeScreen Component
const WelcomeScreen = () => (
  <ThemedView style={styles.container}>
    <ThemedText type="title">Welcome to Juice Dating</ThemedText>
    <Svg height="100" width="100" viewBox="0 0 100 100">
      <Path d="M50 0 L100 100 L0 100 Z" fill="blue" />
    </Svg>
    <ThemedButton title="Login" onPress={() => {}} />
    <ThemedButton title="Sign Up" onPress={() => {}} variant="text" />
  </ThemedView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default WelcomeScreen;