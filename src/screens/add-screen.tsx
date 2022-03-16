import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import React from 'react';

const AddScreen: React.FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <KeyboardAvoidingView style={styles.inputContainer} behavior="padding">
        <TextInput
          style={styles.taskInput}
          placeholder="TASK ...."
        />
      </KeyboardAvoidingView>
      <View style={styles.buttonsContainer}>
        <View style={styles.addButton}>
          <TouchableOpacity>
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
    fontFamily: 'monospace',
    fontSize: 19,
  },
  addButton: {
    marginHorizontal: 10,
  },
  reminderButton: {
    marginHorizontal: 0,
  },
  buttonsContainer: {
    padding: 10,
    flexDirection: 'row'
  }
})
