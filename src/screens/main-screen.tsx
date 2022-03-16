import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import React from 'react';

const Main: React.FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.headingTextContainer}>
        <Text style={styles.headingText}>Task Manager</Text>
      </View>
      <ScrollView style={styles.taskContainer}>
        <Text style={styles.task}>foo</Text>
        <Text style={styles.task}>bar</Text>
        <Text style={styles.task}>baz</Text>
      </ScrollView>
      <View style={styles.plusIconContainer}>
        <TouchableOpacity onPress={() => navigation.push("add-screen")}>
          <FontAwesome name="plus" size={50} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'springgreen',
    alignItems: 'center',

  },
  taskContainer: {
     
  },
  headingTextContainer: {
    paddingTop: 25,
  },
  headingText: {
    fontFamily: 'monospace',
    fontSize: 28,
  },
  plusIconContainer: {
    position: 'absolute',
    bottom: 18,
    paddingLeft: 16,
    alignItems: 'center'
  }
});
