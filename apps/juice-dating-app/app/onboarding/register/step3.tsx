import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { useRouter } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import * as ImagePicker from "expo-image-picker";
import StepsProgress from "@/components/StepsProgress";
import { useSteps } from "@/context/StepsContext";
import { ThemedView } from "@/components/ThemedView";
import ThemedInput from "@/components/ThemedInput";

const schema = z.object({
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  occupation: z.string().min(2, "Occupation must be at least 2 characters"),
  education: z.string().optional(),
  profilePicture: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const Step3Screen: React.FC = () => {
  const router = useRouter();
  const { currentStep, setCurrentStep, setFormData } = useSteps();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const profilePicture = watch("profilePicture");

  const onSubmit = (data: FormData) => {
    setFormData((prevData: any) => ({ ...prevData, ...data }));
    setCurrentStep(4);
    // Navigate to the main app or show a completion screen
    //@ts-ignore
    router.push("/main");
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setValue("profilePicture", result.assets[0].uri);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <StepsProgress steps={[null, null, null]} currentStep={currentStep} />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <ThemedInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Bio"
            multiline
            label={""}
          />
        )}
        name="bio"
        defaultValue=""
      />
      {errors.bio && <Text style={styles.errorText}>{errors.bio.message}</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <ThemedInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Occupation"
            label={""}
          />
        )}
        name="occupation"
        defaultValue=""
      />
      {errors.occupation && (
        <Text style={styles.errorText}>{errors.occupation.message}</Text>
      )}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <ThemedInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Education (optional)"
            label={""}
          />
        )}
        name="education"
        defaultValue=""
      />

      <Button title="Pick a profile picture" onPress={pickImage} />
      {profilePicture && (
        <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
      )}

      <Button title="Finish" onPress={handleSubmit(onSubmit)} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginVertical: 10,
  },
});

export default Step3Screen;
