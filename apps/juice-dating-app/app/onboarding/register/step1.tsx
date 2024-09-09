import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import StepsProgress from "@/components/StepsProgress";
import { useSteps } from "@/context/StepsContext";
import ThemedButton from "@/components/ThemedButton";
import ThemedInput from "@/components/ThemedInput";
import { ThemedView } from "@/components/ThemedView";

const emailPhoneSchema = z.string().refine(
  (value) => {
    // Email regex
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // Phone regex (simple international format)
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;

    return emailRegex.test(value) || phoneRegex.test(value);
  },
  {
    message: "Invalid email or phone number",
  }
);

const schema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    emailOrPhone: emailPhoneSchema,
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

const Step1Screen: React.FC = () => {
  const router = useRouter();
  const { currentStep, setCurrentStep, setFormData } = useSteps();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    setFormData((prevData: any) => ({ ...prevData, ...data }));
    setCurrentStep(2);
    //@ts-ignore
    router.push("/onboarding/register/step2");
  };

  return (
    <ThemedView style={styles.container}>
      <StepsProgress steps={[null, null, null]} currentStep={currentStep} />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <ThemedInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Name"
            label={""}
          />
        )}
        name="name"
        defaultValue=""
      />
      {errors.name && (
        <Text style={styles.errorText}>{errors.name.message}</Text>
      )}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <ThemedInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Email or Phone"
            keyboardType="email-address"
            label={""}
          />
        )}
        name="emailOrPhone"
        defaultValue=""
      />
      {errors.emailOrPhone && (
        <Text style={styles.errorText}>{errors.emailOrPhone.message}</Text>
      )}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <ThemedInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Password"
            secureTextEntry
            label={""}
          />
        )}
        name="password"
        defaultValue=""
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <ThemedInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Confirm Password"
            secureTextEntry
            label={""}
          />
        )}
        name="confirmPassword"
        defaultValue=""
      />
      {errors.confirmPassword && (
        <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>
      )}

      <ThemedButton title="Continue" onPress={handleSubmit(onSubmit)} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default Step1Screen;
