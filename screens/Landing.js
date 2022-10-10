import React from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import { RoundedButton } from "../components/common/Button";

export const LandingScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Mystery Page (aka Landing Screen)</Text>
        <RoundedButton
          onPress={() => {
            navigation.navigate("Calculator");
          }}
          text="To Calculator"
          buttonStyle={styles.calcButton}
        />

        <RoundedButton
          text="To Map"
          onPress={() => {
            navigation.navigate("Map");
          }}
          buttonStyle={styles.mapButton}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  calcButton: {
    backgroundColor: "blue",
    alignContent: "center",
    padding: 30,
  },
  mapButton: {
    backgroundColor: "green",
    alignContent: "center",
    padding: 30,
  },
  container: {
    justifyContent: "center",
    bottom: "0%",
    alignItems: "center",
  },
});
