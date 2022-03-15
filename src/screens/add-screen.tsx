import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import React from 'react';

const AddScreen: React.FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text>Add Screen</Text>
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
})
