import { FlatList, StyleSheet, View } from "react-native";
import Task from "./Task.js";

const CustomFlatList = ({ list, editTask, deleteTask, toggleComplete }) => {
  return (
    <View style={styles.itemCont}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Task
            index={index}
            name={item.name}
            Completed={item.Completed}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemCont: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    width: "90%",
  },
});

export default CustomFlatList;
