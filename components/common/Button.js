import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

export const RoundedButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.buttonStyle}>
      <Text style={props.textStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
};
