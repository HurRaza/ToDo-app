import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header.js";
import Input from "../components/Input.js";
import CustomFlatList from "../components/CustomFlatList.js";

const tasks = [
  { id: "1", name: "buy coffee", Completed: false },
  { id: "2", name: "learn javascript", Completed: false },
];

export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState(tasks);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const addTask = () => {
    if (task.trim() !== "") {
      if (isEdit) {
        const newList = [...list];
        newList[editId].name = task;
        setList(newList);
        setIsEdit(false);
        setEditId(null);
      } else {
        setList((prev) => [
          ...prev,
          { id: Date.now().toString(), name: task, Completed: false },
        ]);
      }
      setTask("");
    }
  };

  const toggleComplete = (index) => {
    const newList = [...list];
    newList[index].Completed = !newList[index].Completed;
    setList(newList);
  };

  const editTask = (index) => {
    setTask(list[index].name);
    setIsEdit(true);
    setEditId(index);
  };

  const deleteTask = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <View style={styles.container}>
      <Header heading="MY TO DOs" />
      <Input task={task} setTask={setTask} addTask={addTask} isEdit={isEdit} />
      <CustomFlatList
        list={list}
        editTask={editTask}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
});
