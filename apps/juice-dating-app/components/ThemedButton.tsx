import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

interface ThemedButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  variant?: 'default' | 'text';
  style?: any;
  lightColor?: string;
  darkColor?: string;
  rest?: any;
}

const ThemedButton: React.FC<ThemedButtonProps> = ({ onPress, title, variant = 'default', style, lightColor, darkColor, ...rest }) => {
  const primaryColor = useThemeColor({ light: lightColor, dark: darkColor }, 'primary');

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        variant === 'default' && { backgroundColor: primaryColor },
        variant === 'text' && styles.textButton,
        style
      ]}
      {...rest}
    >
      <ThemedText
        style={[
          styles.buttonText,
          variant === 'text' && { color: primaryColor },
        ]}
      >
        {title}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  }, 
  textButton: {
    backgroundColor: 'transparent',
  },
});

export default ThemedButton;