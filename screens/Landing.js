import React from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import { RoundedButton } from "../components/common/Button";

export const LandingScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header}>Mystery Page (aka Landing Screen)</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonPad}>
            <RoundedButton
              onPress={() => {
                navigation.navigate("Calculator");
              }}
              text="To Calculator"
              buttonStyle={styles.calcButton}
              textStyle={styles.text}
            />
          </View>
          <View style={styles.buttonPad}>
            <RoundedButton
              text="To Map"
              onPress={() => {
                navigation.navigate("Map");
              }}
              buttonStyle={styles.mapButton}
              textStyle={styles.text}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  calcButton: {
    backgroundColor: "blue",
    padding: 30,
    borderRadius: 30,
    alignItems: "center",
  },
  header: { fontSize: 40 },
  mapButton: {
    backgroundColor: "green",
    padding: 30,
    borderRadius: 30,
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
  text: {
    color: "white",
  },
  buttonContainer: {
    marginTop: 80,
  },
  buttonPad: {
    padding: 15,
  },
});
