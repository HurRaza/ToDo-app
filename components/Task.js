import Icon from "@expo/vector-icons/MaterialIcons";
import Checkbox from "expo-checkbox";
import { Text, TouchableOpacity, View ,StyleSheet} from "react-native";

const Task = ({
  index,
  name,
  Completed,
  editTask,
  deleteTask,
  toggleComplete,
}) => {
  return (
    <View style={styles.item}>
      <Checkbox
        color="#493628"
        value={Completed}
        onValueChange={() => toggleComplete(index)}
        style={styles.checkbox}
      />
      <Text
        style={[
          styles.itemText,
          {
            textDecorationLine: Completed ? "line-through" : "none",
          },
        ]}
      >
        {name}
      </Text>
      <View style={styles.action}>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => editTask(index)}
        >
          <Icon name="edit" size={22} color="#493628" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => deleteTask(index)}
        >
          <Icon name="delete" size={22} color="#493628" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 10,
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#D6C0B3",
  },
  checkbox: {
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
    color: "#493628",
  },
  action: {
    flexDirection: "row",
    gap: 15,
  },
  actionBtn: {
    backgroundColor: "#E4E0E1",
    borderRadius: 8,
    padding: 5,
  },
});

export default Task;
