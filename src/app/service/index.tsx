import SocialLinks from "@/componets/sociallink";
import { Button, Container, ImageContainer } from "@/componets/ui";
import type { Buttom } from "@/componets/ui/button";
import { StyleSheet, Text, View } from "react-native";

const buttons: Buttom[] = [
  {
    route: "/service/bookservice",
    text: "Book service",
    icon: "wrench",
    duration: 400,
  },
  {
    route: "/service/insurance",
    text: "Insurance",
    icon: "shield-halved",
    duration: 450,
  },
  {
    route: "/service/batteries",
    text: "Batteries",
    icon: "battery-half",
    duration: 500,
  },
  {
    route: "/service/waterwash",
    text: "Water Wash",
    icon: "droplet",
    duration: 550,
  },
];

export default function () {
  return (
    <ImageContainer source={require("../../../assets/images/baner.png")}>
      <Container>
        {/* title */}
        <View>
          <Text style={styles.title}>Our Service</Text>
        </View>
        {/* buttons */}
        <View style={{ gap: 15 }}>
          {buttons.map((data, index) => (
            <Button
              key={index}
              route={data.route}
              text={data.text}
              icon={data.icon}
              duration={data.duration}
              fontsize={22}
            />
          ))}
        </View>
        {/* contact us */}
        <View style={{ gap: 10 }}>
          <Text style={{ textAlign: "center", fontSize: 18, color: "#fff" }}>
            Contact us
          </Text>
          <SocialLinks />
        </View>
      </Container>
    </ImageContainer>
  );
}

const styles = StyleSheet.create({
  botton: {
    height: 54,
    backgroundColor: "#111111",
    borderWidth: 1,
    borderColor: "#E10600",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
  },
  buttontext: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: 1,
  },
  title: {
    fontSize: 38,
    fontWeight: 600,
    color: "#fff",
  },
});
