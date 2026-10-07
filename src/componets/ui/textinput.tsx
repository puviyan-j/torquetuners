import { FieldError } from "react-hook-form";
import { StyleSheet, TextInput } from "react-native";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error: FieldError | undefined;
}

export default function Textinput({
  onChange,
  value,
  placeholder,
  error,
}: TextInputProps) {
  return (
    <TextInput
      onChangeText={onChange}
      value={value}
      style={{ ...styles.input, borderColor: error ? "#f50808" : "#fff" }}
      placeholder={placeholder ? placeholder : ""}
      placeholderTextColor="#777"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 52,
    borderWidth: 2,
    width: 270,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#ffffff",
  },
});
