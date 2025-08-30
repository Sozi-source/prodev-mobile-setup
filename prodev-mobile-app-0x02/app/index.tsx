import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <ImageBackground
      source={require("../assets/images/background-image.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image source={require("../assets/images/Logo.png")} style={styles.companyLogo} />
        
        <View style={styles.textGroup}>
          <Text style={styles.textLarge}>Find your favorite place here</Text>
          <Text style={styles.textSmall}>The best prices for over 2</Text>
          <Text style={styles.textSmall}>million properties worldwide</Text>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.transparentButton}>
            <Text style={styles.textSmall}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", paddingVertical: 20 }}>
          <Text style={{ color: "white" }}>Continue to home</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // centers content vertically
    alignItems: "center", // centers horizontally
    paddingHorizontal: 20,
  },
  background: {
    flex: 1,
    width: "100%",
    height: Dimensions.get("window").height,
  },
  companyLogo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  textGroup: {
    alignItems: "center",
    marginBottom: 30,
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "white",
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
  },
});
