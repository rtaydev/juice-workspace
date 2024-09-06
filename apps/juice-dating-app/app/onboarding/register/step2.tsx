import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import StepsProgress from "@/components/StepsProgress";
import { useSteps } from "@/context/StepsContext";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ThemedButton from "@/components/ThemedButton";
import ThemedInput from "@/components/ThemedInput";

const schema = z.object({
  interestedIn: z.enum(["men", "women", "both"]),
  minAge: z.number().min(18, "Minimum age must be at least 18"),
  maxAge: z.number().min(18, "Maximum age must be at least 18"),
  distance: z.number().min(1, "Distance must be at least 1 km"),
  lookingFor: z.enum(["casual", "serious", "friendship"]),
});

type FormData = z.infer<typeof schema>;

const Step2Screen: React.FC = () => {
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
    setCurrentStep(3);
    //@ts-ignore
    router.push("/onboarding/step3");
  };

  return (
    <ThemedView style={styles.container}>
      <StepsProgress steps={[null, null, null]} currentStep={currentStep} />
      <ThemedText style={styles.label}>Interested in:</ThemedText>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.radioGroup}>
            {["men", "women", "both"].map((option) => (
              <ThemedButton
                key={option}
                title={option}
                onPress={() => onChange(option)}
                style={{
                  backgroundColor: value === option ? "#4CAF50" : "#ccc",
                }}
              />
            ))}
          </View>
        )}
        name="interestedIn"
        defaultValue={undefined}
      />
      {errors.interestedIn && (
        <Text style={styles.errorText}>{errors.interestedIn.message}</Text>
      )}

      <Text style={styles.label}>Age Range:</Text>
      <View style={styles.ageRange}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <ThemedInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(text) => onChange(parseInt(text))}
              value={value?.toString()}
              placeholder="Min Age"
              keyboardType="numeric"
              label={""}
            />
          )}
          name="minAge"
          defaultValue={undefined}
        />
        <Text style={styles.toText}>to</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <ThemedInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(text) => onChange(parseInt(text))}
              value={value?.toString()}
              placeholder="Max Age"
              keyboardType="numeric"
              label={""}
            />
          )}
          name="maxAge"
          defaultValue={undefined}
        />
      </View>
      {errors.minAge && (
        <Text style={styles.errorText}>{errors.minAge.message}</Text>
      )}
      {errors.maxAge && (
        <Text style={styles.errorText}>{errors.maxAge.message}</Text>
      )}

      <Text style={styles.label}>Maximum Distance (km):</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <ThemedInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(text) => onChange(parseInt(text))}
            value={value?.toString()}
            placeholder="Distance"
            keyboardType="numeric"
            label={""}
          />
        )}
        name="distance"
        defaultValue={undefined}
      />
      {errors.distance && (
        <Text style={styles.errorText}>{errors.distance.message}</Text>
      )}

      <Text style={styles.label}>Looking for:</Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.radioGroup}>
            {["casual", "serious", "friendship"].map((option) => (
              <ThemedButton
                key={option}
                title={option}
                onPress={() => onChange(option)}
                style={{
                  backgroundColor: value === option ? "#4CAF50" : "#ccc",
                }}
              />
            ))}
          </View>
        )}
        name="lookingFor"
        defaultValue={undefined}
      />
      {errors.lookingFor && (
        <Text style={styles.errorText}>{errors.lookingFor.message}</Text>
      )}

      <ThemedButton title="Next" onPress={handleSubmit(onSubmit)} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    flex: 1,
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  ageRange: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  toText: {
    marginHorizontal: 10,
  },
});

export default Step2Screen;
