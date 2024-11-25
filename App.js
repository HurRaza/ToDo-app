import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const tasks = [
  { id: "1", name: "buy coffee", isCompleted: false },
  { id: "2", name: "buy coffee", isCompleted: false },
  { id: "3", name: "buy coffee", isCompleted: false },
  { id: "4", name: "buy coffee", isCompleted: false },
];

export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState(tasks);

  const addTask = () => {
    setList((prev) => [
      ...prev,
      { id: Math.random().toString(8), name: task, isCompleted: false },
    ]);
    setTask("");
    console.log(list);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>MY TO DOs</Text>
      </View>
      <View style={styles.inputCont}>
        <TextInput
          style={styles.input}
          value={task}
          placeholder="new todo...."
          onChangeText={(task) => setTask(task)}
        />
        <Button title="Add Task" onPress={addTask} />
      </View>
      <View style={styles.itemCont}>
        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: 40,
    backgroundColor: "cyan",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  inputCont: {
    width: "80%",
    marginVertical: 20,
    alignSelf: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#777",
    padding: 10,
    marginVertical: 10,
    width: "100%",
  },
  itemCont: {
    alignSelf: "center",
    justifyContent: "center",
    width: "80%",
  },
  item: {
    marginVertical: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
    padding: 5,
  },
});
