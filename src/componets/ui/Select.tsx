import { Picker } from "@react-native-picker/picker";
import { FieldError } from "react-hook-form";
import { StyleSheet, View } from "react-native";

interface MultiSelectItem {
  label: string;
  value: string;
}

interface SelectProps {
  items: MultiSelectItem[];
  value: string;
  onChange: (value: string) => void;
  error: FieldError | undefined;
}

export default function Select({ items, value, onChange, error }: SelectProps) {
  return (
    <View
      style={{
        borderColor: error ? "#f50808" : "#fff",
        borderWidth: 2,
        borderRadius: 12,
      }}
    >
      <Picker
        selectedValue={value}
        onValueChange={onChange}
        dropdownIconColor={"#fff"}
        style={{ ...styles.input, color: value ? "#fff" : "#777" }}
      >
        {items.map((item) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 52,
    borderColor: "#fff",
  },
});
