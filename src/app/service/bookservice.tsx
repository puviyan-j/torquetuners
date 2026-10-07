import {
  Container,
  ImageContainer,
  MultiSelect,
  Select,
  Textinput,
} from "@/componets/ui";
import { bookingSchema, type BookingFormData } from "@/schemas/booking.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";

import {
  Button,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const items = [
  {
    label: "Select Service",
    value: "",
  },
  {
    label: "Pickup & Drop",
    value: "Pickup & Drop",
  },
  {
    label: "Door step",
    value: "door step",
  },
];

const itemsofdoorstep = [
  {
    label: "Oil Change",
    value: "Oil Change",
  },
  {
    label: "Chain Adjustment",
    value: "Chain Adjustment",
  },
  {
    label: "Brake Adjustment",
    value: "Brake Adjustment",
  },
  {
    label: "Clutch Adjustment",
    value: "Clutch Adjustment",
  },
];

export default function Bookservice() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { date: new Date() },
  });

  const servicetype = useWatch({ control, name: "service" });

  const handlesubmit = async (data: BookingFormData) => {
    console.log(data);
    const message = `Torque Tuners\nvehicle service Details\n\n
    name:${data.name}
    Vehicle:${data.bike}
    Phone:${data.phone}
    Service Type:${data.service}
    ${data.service === "door step" ? data.services?.join(",") : ""}
    Date:${data.date.toLocaleDateString()}`;
    const wa = `https://wa.me/919786345463?text=${message}`;

    await Linking.openURL(wa);
  };

  return (
    <ImageContainer source={require("../../../assets/images/service.jpg")}>
      <Container>
        <View style={{ gap: 16 }}>
          <Text style={styles.title}>Book Service</Text>
          <View style={{ gap: 10 }}>
            <Controller
              control={control}
              name="service"
              render={({ field: { onChange, value } }) => (
                <Select
                  onChange={onChange}
                  value={value}
                  items={items}
                  error={errors.service}
                />
              )}
            />

            {servicetype === "door step" && (
              <Controller
                control={control}
                name="services"
                render={({ field: { value, onChange } }) => (
                  <MultiSelect
                    items={itemsofdoorstep}
                    onChange={onChange}
                    value={value ?? []}
                    error={errors.services?.message}
                  />
                )}
              />
            )}

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
              name="bike"
              render={({ field: { onChange, value } }) => (
                <Textinput
                  onChange={onChange}
                  value={value?.toLocaleUpperCase()}
                  placeholder={"Register No:TN88A1234"}
                  error={errors.bike}
                />
              )}
            />

            <Controller
              control={control}
              name="brandmodel"
              render={({ field: { onChange, value } }) => (
                <Textinput
                  onChange={onChange}
                  value={value}
                  placeholder={"Brand & Model"}
                  error={errors.brandmodel}
                />
              )}
            />

            <Controller
              control={control}
              name="date"
              render={({ field: { onChange, value } }) => {
                const [showPicker, setShowPicker] = useState(false);
                return (
                  <View>
                    <Pressable
                      style={styles.input}
                      onPress={() => setShowPicker(true)}
                    >
                      <Text
                        style={{
                          height: 52,
                          textAlignVertical: "center",
                          color: "#777",
                        }}
                      >
                        {value
                          ? value.toLocaleDateString()
                          : "Select appointment date"}
                      </Text>
                    </Pressable>

                    {showPicker && (
                      <DateTimePicker
                        value={value || new Date()}
                        mode="date"
                        display="default"
                        minimumDate={new Date()}
                        onValueChange={(_, selectedDate) => {
                          setShowPicker(false);

                          if (selectedDate) {
                            onChange(selectedDate);
                          }
                        }}
                      />
                    )}
                  </View>
                );
              }}
            />
          </View>

          <View>
            <Button
              title="Send via WhatsApp"
              onPress={handleSubmit(handlesubmit)}
            />
          </View>
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
    borderColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
  },
});
