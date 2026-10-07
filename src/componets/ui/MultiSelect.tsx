import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

interface MultiSelectItem {
  label: string;
  value: string;
}

interface MultiSelectProps {
  items: MultiSelectItem[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  error: string | undefined;
}

export default function MultiSelect({
  items,
  value,
  onChange,
  placeholder = "Select services",
  error,
}: MultiSelectProps) {
  const [visible, setVisible] = useState(false);

  const toggleItem = (itemValue: string) => {
    if (value.includes(itemValue)) {
      onChange(value.filter((item) => item !== itemValue));
    } else {
      onChange([...value, itemValue]);
    }
  };

  const selectedLabels = items
    .filter((item) => value.includes(item.value))
    .map((item) => item.label)
    .join(", ");

  return (
    <>
      {/* Picker Button */}
      <Pressable
        style={{ ...styles.button, borderColor: error ? "#f50808" : "#fff" }}
        onPress={() => setVisible(true)}
      >
        <Text
          style={[styles.buttonText, value.length === 0 && styles.placeholder]}
          numberOfLines={1}
        >
          {selectedLabels || placeholder}
        </Text>

        <Text>
          <FontAwesome6 name="caret-down" size={14} color="#fff" />
        </Text>
      </Pressable>

      {/* Selection Container */}
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.title}>Select Services</Text>

            {items.map((item) => {
              const selected = value.includes(item.value);

              return (
                <Pressable
                  key={item.value}
                  style={styles.option}
                  onPress={() => toggleItem(item.value)}
                >
                  <Text style={styles.optionText}>{item.label}</Text>

                  <View
                    style={[
                      styles.checkbox,
                      selected && styles.checkboxSelected,
                    ]}
                  >
                    {selected && <Text style={styles.check}>✓</Text>}
                  </View>
                </Pressable>
              );
            })}

            {/* Done */}
            <Pressable
              style={styles.doneButton}
              onPress={() => setVisible(false)}
            >
              <Text style={styles.doneText}>DONE</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 52,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  buttonText: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 15,
  },

  placeholder: {
    color: "#777",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  modalContainer: {
    backgroundColor: "#111",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#333",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 16,
  },

  option: {
    minHeight: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },

  optionText: {
    color: "#FFFFFF",
    fontSize: 15,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#555",
    alignItems: "center",
    justifyContent: "center",
  },

  checkboxSelected: {
    backgroundColor: "#E10600",
    borderColor: "#E10600",
  },

  check: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "900",
  },

  doneButton: {
    height: 48,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#E10600",
    alignItems: "center",
    justifyContent: "center",
  },

  doneText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 1,
  },
});
