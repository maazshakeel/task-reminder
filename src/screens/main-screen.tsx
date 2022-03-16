import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import React from 'react';

const Main: React.FC = ({ route, navigation }) => {

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.headingTextContainer}>
        <Text style={styles.headingText}>Task Manager</Text>
        <Text>{JSON.stringify(route.params.tasks.length)}</Text>
      </View>
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
    fontSize: 28,
  },
  plusIconContainer: {
    position: 'absolute',
    bottom: 18,
    paddingLeft: 16,
    alignItems: 'center'
  }
});
