import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, ScrollView } from "react-native";
import { screenHeight } from "../const";
import Nav from "../componentt/Nav";
import React, { useEffect, useState } from "react";
import Task from "../componentt/Task";
import Color from "../const/Color";
import { addTodo, deleteDO, getTodo, updateStatus, updateTodoText } from "../action";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Home = () => {
  useEffect(() => {
    getlistOftodo()
  }, []);
  const inputRef = React.useRef()
  const getlistOftodo = async () => {
    let result = await getTodo()
    setTaskItems([...result.data])
  }
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [isSelected, setSelection] = useState(false);
  const [completedId, setComletedId] = useState("")
  const [selectedId, setSelectedId] = useState("")

  const handleAddTask = async () => {
    Keyboard.dismiss();
    if (task.length > 0) {
      let result = await addTodo(task)
      getlistOftodo()
    }
    setTask("");
  }

  const updateTodo = (id, name) => {
    inputRef.current.focus()

    setTask(name)
    setSelectedId(id)
    setSelection(true)
  }

  const TodoTextupdate = async () => {
    Keyboard.dismiss();
    if (task.length > 0) {
      let result = await updateTodoText(selectedId, task)
      getlistOftodo()
    }
    setTask("");
    setSelection(false)
    setSelectedId("")
  }

  const changeStatus = async (id, val) => {
    setComletedId(id)
    let result = await updateStatus(id, val)
    getlistOftodo()
    setComletedId("")
  }

  const deleteTodo = async (id) => {
    let result = await deleteDO(id)
    getlistOftodo();
  }

  return (
    <View style={styles.conatianer}>
      <Nav></Nav>
      <View style={{height:600}}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {
              taskItems.map((item, index) => {
                return (
                  <>
                    {item.status == 1 &&
                    <View key={index} style={styles.tasksConatin}>
                      <TouchableOpacity onPress={() => updateTodo(item.id, item.todo_name)}>
                        <Task
                          item={item}
                          deleteTodo={(id) => deleteTodo(id)}
                          isSelected={completedId == item.id ? true : false}
                          setSelection={(id) => changeStatus(id, 0)}
                          text={item.todo_name} />
                      </TouchableOpacity>
                     <MaterialCommunityIcons name="delete-empty" 
                     size={30} onPress={()=>deleteTodo(item.id)}
                     color={"red"} style={styles.icon}/>
                      </View>
                    }
                  </>
                )
              })
            }
          </View>
        </View>
        {/* Completed Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Compeleted tasks</Text>
          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {
              taskItems.map((item, index) => {
                return (
                  <>
                    {item.status == 0 &&
                      <TouchableOpacity key={index} onPress={() => updateTodo(item.id, item.todo_name)}>
                        <Task
                          item={item}
                          isSelected={completedId == item.id ? true : false}
                          setSelection={(id) => changeStatus(id, 1)}
                          text={item.todo_name} />
                      </TouchableOpacity>
                    }
                  </>
                )
              })
            }
          </View>
        </View>

      </ScrollView>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput ref={inputRef} style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => isSelected ? TodoTextupdate() : handleAddTask()}>
          <View style={styles.addWrapper}>
            {isSelected ? <FontAwesome5
              name="pen" size={20} color="#fff" /> :
              <Text style={styles.addText}>+</Text>}

          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  conatianer: {
    flex: 1,
    backgroundColor: "#fff",
    height: screenHeight
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 22,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 280,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    backgroundColor: Color.noticeBackground
  },
  addText: {
    fontSize: 40,
    color: "#fff"
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  tasksConatin:{
    
  },
  icon:{
    position:'absolute',
    right:8,
    top:17,
  }
})