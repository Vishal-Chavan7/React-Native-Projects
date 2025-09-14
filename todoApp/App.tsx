import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<String []>([]);

  
  const addTask = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  
  const deleteTask = (index: number) => {
    const updatedList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedList);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.headinText}>Todo App</Text>

      <View style={styles.container}>
        
        <View style={styles.inputArea}>
          <TextInput
            placeholder="Enter your task"
            style={styles.inputData}
            value={task}
            onChangeText={setTask}
          />
          <TouchableOpacity onPress={addTask}>
            <Text style={styles.addBtn}>Add</Text>
          </TouchableOpacity>
        </View>

        
        <View style={styles.taskListContainer}>
          <Text style={styles.listHeading}>Your Tasks</Text>

          {taskList.length === 0 ? (
            <Text style={styles.noTask}>No tasks yet</Text>
          ) : (
            <FlatList
              data={taskList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View style={styles.taskItem}>
                  <Text style={styles.taskText}>{item}</Text>
                  <TouchableOpacity
                    style={styles.deleteBtn}
                    onPress={() => deleteTask(index)}
                  >
                    <Text style={styles.deleteText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headinText: {
    fontSize: 25,
    color: "blue",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  inputArea: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  inputData: {
    borderWidth: 2,
    padding: 5,
    height: 40,
    flex: 1,
    borderRadius: 10,
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 10,
  },
  addBtn: {
    fontSize: 16,
    borderWidth: 2,
    height: 40,
    fontWeight: "bold",
    paddingHorizontal: 15,
    textAlignVertical: "center",
    color: "white",
    backgroundColor: "orange",
    borderRadius: 10,
    textAlign: "center",
    lineHeight: 36,
  },
  taskListContainer: {
    flex: 1,
  },
  listHeading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
  noTask: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#777",
    marginTop: 10,
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  taskText: {
    fontSize: 18,
    color: "#333",
    flex: 1,
  },
  deleteBtn: {
    marginLeft: 10,
    backgroundColor: "red",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default App;
