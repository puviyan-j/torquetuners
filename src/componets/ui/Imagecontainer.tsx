import { ReactNode } from "react";
import {
    ImageBackground,
    ImageSourcePropType,
    StyleSheet,
    View,
} from "react-native";

type ImageContainerProps = {
  children: ReactNode;
  source: ImageSourcePropType;
  opacity?: number;
};

export default function ImageContainer({
  children,
  source,
  opacity = 0.8,
}: ImageContainerProps) {
  return (
    <View style={styles.background}>
      <ImageBackground
        source={source}
        style={StyleSheet.absoluteFill}
        resizeMode="stretch"
      />

      {/* Dark transparent overlay */}
      <View
        style={{
          ...styles.overlay,
          backgroundColor: `rgba(0, 0, 0,${opacity})`,
        }}
      />

      {/* Content */}
      <View style={styles.container}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    ...StyleSheet.absoluteFill,
  },

  container: {
    flex: 1,
  },
});
