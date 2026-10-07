import { FontAwesome6 } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

export default function SocialLinks() {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 20,
      }}
    >
      <Pressable>
        <FontAwesome6 name="instagram" size={24} color={"#fff"} />
      </Pressable>
      <Pressable>
        <FontAwesome6 name="whatsapp" size={24} color={"#fff"} />
      </Pressable>
      <Pressable>
        <FontAwesome6 name="envelope" size={24} color={"#fff"} />
      </Pressable>

      <Pressable>
        <FontAwesome6 name="location-dot" size={24} color={"#fff"} />
      </Pressable>
    </View>
  );
}
