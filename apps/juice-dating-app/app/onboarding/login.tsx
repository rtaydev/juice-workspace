import React from 'react';
import { StyleSheet } from 'react-native';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ThemedView } from '@/components/ThemedView';
import ThemedInput from '@/components/ThemedInput';
import ThemedButton from '@/components/ThemedButton';

// Define validation schema
const loginSchema = z.object({
  emailOrPhone: z.string().nonempty("Email or Phone is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginScreen: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <ThemedView style={styles.container}>
      <Controller<LoginFormInputs>
        control={control}
        name="emailOrPhone"
        render={({ field: { onChange, onBlur, value } }) => (
          <ThemedInput
            label="Email or Phone"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={errors.emailOrPhone?.message}
          />
        )}
      />
      <Controller<LoginFormInputs>
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <ThemedInput
            label="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
            error={errors.password?.message}
          />
        )}
      />
      <ThemedButton title="Login" onPress={handleSubmit(onSubmit)} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 60,
  },
});

export default LoginScreen;