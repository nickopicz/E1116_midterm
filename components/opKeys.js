import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

export const OperKey = (props) => {
  return (
    <View style={styles.key}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.text}>{props.opkey}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#00FF00",
    textAlign: "center",
    fontSize: 34,
  },
  key: {
    backgroundColor: "black",
    flex: 0.2,
    height: 60,
    marginBottom: 10,
  },
});
