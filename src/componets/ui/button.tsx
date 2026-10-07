import { FontAwesome6 } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import { useEffect } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export interface Buttom {
  text: string;
  route: Href;
  icon?: string;
  fontsize?: number;
  duration?: number;
}

export default function Button({
  text,
  route,
  icon,
  fontsize,
  duration,
}: Buttom) {
  const router = useRouter();

  const translateX = useSharedValue(500);

  useEffect(() => {
    translateX.value = withTiming(0, {
      duration: duration ? duration : 0,
    });
  }, []);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        style={styles.botton}
        onPress={() => {
          router.push(route);
        }}
      >
        <Text
          style={{ ...styles.buttontext, fontSize: fontsize ? fontsize : 18 }}
        >
          {text} {icon && <FontAwesome6 name={icon} size={18} />}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  botton: {
    height: 54,
    // backgroundColor: "#ffff",
    borderWidth: 1,
    borderColor: "#E10600",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
  },
  buttontext: {
    color: "#FFFFFF",
    fontWeight: "800",
    letterSpacing: 1,
  },
});
