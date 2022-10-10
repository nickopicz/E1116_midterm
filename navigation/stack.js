import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LandingScreen } from "../screens/Landing";
import { CalcScreen } from "../screens/Calculator";
import { MapScreen } from "../screens/Map";
const MyStack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <MyStack.Navigator
      screenOptions={{
        headerShown: true,
      }}
      initialRouteName="Landing"
    >
      <MyStack.Screen name="Landing" component={LandingScreen} />
      <MyStack.Screen name="Calculator" component={CalcScreen} />
      <MyStack.Screen name="Map" component={MapScreen} />
    </MyStack.Navigator>
  );
}
