import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export default function Container({ children }: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  background: {
    flex: 1,
  },

  blueOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    opacity: 1,
  },
});
