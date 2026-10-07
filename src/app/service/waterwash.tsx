import { Container, ImageContainer, Textinput } from "@/componets/ui";
import {
  waterwashSchema,
  waterwashSchemaFormData,
} from "@/schemas/waterwash.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button, Linking, StyleSheet, Text, View } from "react-native";

export default function Waterwash() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<waterwashSchemaFormData>({
    resolver: zodResolver(waterwashSchema),
  });

  const formhandleSubmit = async (data: waterwashSchemaFormData) => {
    const message = `Torque Tuners\nWater Wash Details\n\nname:${data.name}\nPhone:${data.phone}`;
    const wa = `https://wa.me/919786345463?text=${message}`;
    await Linking.openURL(wa);
  };

  return (
    <ImageContainer source={require("../../../assets/images/waterwash.png")}>
      <Container>
        <View style={{ gap: 16 }}>
          <Text style={styles.title}>Water Wash</Text>
          <View style={{ gap: 10 }}>
            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, value } }) => (
                <Textinput
                  onChange={onChange}
                  value={value}
                  placeholder={"Enter mobile number"}
                  error={errors.phone}
                />
              )}
            />

            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Textinput
                  onChange={onChange}
                  value={value}
                  placeholder={"Enter your name"}
                  error={errors.name}
                />
              )}
            />
          </View>

          <Button
            title="Send via WhatsApp"
            onPress={handleSubmit(formhandleSubmit)}
          />
        </View>
      </Container>
    </ImageContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    textAlign: "center",
    fontWeight: "600",
    color: "#fff",
  },

  input: {
    height: 52,
    borderWidth: 2,
    width: 270,
    borderColor: "#333",
    borderRadius: 12,
    paddingHorizontal: 16,
  },
});
