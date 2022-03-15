import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main from './src/screens/main-screen';

const StackRoot = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StackRoot.Navigator>
        <StackRoot.Screen name="main" component={Main} />
      </StackRoot.Navigator>
    </NavigationContainer>
  );
}
