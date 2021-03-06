import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddScreen from './src/screens/add-screen';
import Main from './src/screens/main-screen';

const StackRoot = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StackRoot.Navigator>
        <StackRoot.Screen name="main" component={Main} options={{ headerShown: false }} initialParams={{ tasks: [] }} />
        <StackRoot.Screen name="add-screen" component={AddScreen} options={{ headerShown: true, title: '', headerTintColor: 'black', headerTransparent: true, headerStyle: { backgroundColor: 'springgreen' }}} />
      </StackRoot.Navigator>
    </NavigationContainer>
  );
}
