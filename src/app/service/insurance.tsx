import { Container, ImageContainer, Select, Textinput } from "@/componets/ui";
import {
  type insuranceFormData,
  insuranceSchema,
} from "@/schemas/insurance.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button, Linking, StyleSheet, Text, View } from "react-native";

const items = [
  {
    label: "Select Service",
    value: "",
  },
  {
    label: "2 Wheeler",
    value: "2 wheeler",
  },
  {
    label: "4 wheeler",
    value: "4 wheeler",
  },
];

export default function Insurance() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<insuranceFormData>({
    resolver: zodResolver(insuranceSchema),
  });

  const formhandleSubmit = async (data: insuranceFormData) => {
    console.log(data);
    const message = `Torque Tuners\nInsurance Details\n\nname:${data.name}\nVehicle:${data.type}\nPhone:${data.phone}\nregNo:${data.regNo}`;
    const wa = `https://wa.me/919786345463?text=${message}`;

    await Linking.openURL(wa);
  };

  return (
    <ImageContainer source={require("../../../assets/images/insurance.jpg")}>
      <Container>
        <View style={{ gap: 16 }}>
          <Text style={styles.title}>Insurance</Text>
          <View style={{ gap: 10 }}>
            <Controller
              control={control}
              name="type"
              render={({ field: { onChange, value } }) => (
                <Select
                  onChange={onChange}
                  value={value}
                  items={items}
                  error={errors.type}
                />
              )}
            />

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

            <Controller
              control={control}
              name="regNo"
              render={({ field: { onChange, value } }) => (
                <Textinput
                  onChange={onChange}
                  value={value?.toLocaleUpperCase()}
                  placeholder={"Register No:TN88A1234"}
                  error={errors.regNo}
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
