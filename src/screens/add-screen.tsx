import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react';

const AddScreen: React.FC = ({ navigation }) => {

  // state
  const [taskInput, setTaskInput] = useState("")
  const [addEnable, setAddEnable] = useState(false)

  // on handle onChangeText
  const handleTaskInput = (input: string) => {
    setTaskInput(input)

    console.log(input.length)
  }

  useEffect(() => {
    if (taskInput.length > 0) {
      setAddEnable(true)
    } else {
      setAddEnable(false)
    }
  })


  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <KeyboardAvoidingView style={styles.inputContainer} behavior="padding">
        <TextInput
          style={styles.taskInput}
          placeholder="TASK ...."
          value={taskInput}
          onChangeText={handleTaskInput}
        />
      </KeyboardAvoidingView>
      <View style={styles.buttonsContainer}>
        <View style={styles.addButton}>
          <TouchableOpacity disabled={!addEnable}>
            <FontAwesome name="check" size={35} />
          </TouchableOpacity>
        </View>
        <View style={styles.reminderButton}>
          <TouchableOpacity>
            <FontAwesome name="clock-o" size={35} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default AddScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'springgreen',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    marginBottom: 50,
  },
  taskInput: {
    paddingBottom: 5,
    paddingTop: 19,
    paddingHorizontal: 98,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 19,
  },
  addButton: {
    marginHorizontal: 10,
  },
  reminderButton: {
    marginHorizontal: 10,
  },
  closeButton: {
    marginHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: 'row'
  }
})
