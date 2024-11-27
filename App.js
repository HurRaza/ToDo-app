import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Todo from "./screens/Todo.js";
import Calculator from "./screens/Calculator.js";
import StopWatch from "./screens/StopWatch.js";

export default function App() {
  return (
    <View style={styles.container}>
      <StopWatch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
