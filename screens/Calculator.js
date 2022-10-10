import React, { useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import { NumKey } from "../components/numKeys";
import { OperKey } from "../components/opKeys";

export const CalcScreen = ({ navigation }) => {
  const [display, setDisplay] = useState("");
  const [numer, setNumer] = useState("");
  const [denom, setDenom] = useState("");
  const [op, setOp] = useState("");
  const [fracSect, setFracSect] = useState(false);

  function clearDisplay() {
    setDisplay("");
  }

  function evaluate(integerx, integery, operator) {
    if (operator == "+") {
      setDisplay(parseInt(integerx) + parseInt(integery));
      setFracSect(false);
    } else if (operator == "-") {
      setDisplay(parseInt(integerx) - parseInt(integery));
      setFracSect(false);
    } else if (operator == "x") {
      setDisplay(parseInt(integerx) * parseInt(integery));
      setFracSect(false);
    } else {
      setDisplay(parseInt(integerx) / parseInt(integery));
      setFracSect(false);
    }

    //Clear state
    setDenom("");
    setNumer("");
  }
  function addNum(x) {
    let currDisplay = display;
    let currDenom = denom;
    let currNumer = numer;
    setDisplay(currDisplay + x);
    if (fracSect == true) {
      setDenom(currDenom + x);
    } else {
      setNumer(currNumer + x);
    }
  }

  function operatorSymbol(x) {
    currDisplay = display;
    //If display already have a number and the user press a operator button, then the current display number is save as the numerator
    if (numer == "" && fracSect == false) {
      setNumer(display);
    }

    setDisplay(display + x);
    setOp(x);
    setFracSect(true);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Calculator</Text>
      </View>
      <View style={styles.display}>
        <Text style={styles.title}>{display}</Text>
      </View>
      <View style={styles.calcKeyRow}>
        <NumKey num="1" onPress={() => addNum("1")} />
        <NumKey num="2" onPress={() => addNum("2")} />
        <NumKey num="3" onPress={() => addNum("3")} />
      </View>
      <View style={styles.calcKeyRow}>
        <NumKey num="4" onPress={() => addNum("4")} />
        <NumKey num="5" onPress={() => addNum("5")} />
        <NumKey num="6" onPress={() => addNum("6")} />
      </View>
      <View style={styles.calcKeyRow}>
        <NumKey num="7" onPress={() => addNum("7")} />
        <NumKey num="8" onPress={() => addNum("8")} />
        <NumKey num="9" onPress={() => addNum("9")} />
      </View>
      <View style={styles.calcKeyRow}>
        <NumKey num="0" onPress={() => addNum("0")} />
        <NumKey num="C" onPress={() => clearDisplay()} />
        <NumKey num="=" onPress={() => evaluate(numer, denom, op)} />
      </View>
      <View style={styles.calcKeyRow}>
        <OperKey opkey="+" onPress={() => operatorSymbol("+")} />
        <OperKey opkey="-" onPress={() => operatorSymbol("-")} />
        <OperKey opkey="*" onPress={() => operatorSymbol("x")} />
        <OperKey opkey="/" onPress={() => operatorSymbol("/")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "space-around",
  },

  calcKeyRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },

  title: {
    color: "green",
    textAlign: "center",
    fontSize: 36,
  },
  display: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "white",
    width: "70%",
    height: "10%",
    //textAlign:"center",
  },
});
