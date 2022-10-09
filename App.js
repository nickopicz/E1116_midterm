import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CalcScreen } from "./screens/Calculator";
import { NumKey } from "./components/numKeys";

export default function App() {
  return <CalcScreen />;
}
