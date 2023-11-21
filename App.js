

import React from 'react';
import FirstScreen from './src/FirstScreen';
import SecondScreen from './src/SecondScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer> 
      <stack.Navigator screenOptions={{
        headerShown: false
      }}
        initialRouteName="FirstScreen">
           <stack.Screen name='FirstScreen' component={FirstScreen} options={{ headerShown: false }} />
           <stack.Screen name='SecondScreen' component={SecondScreen} options={{ headerShown: false }} />          
      </stack.Navigator>
    </NavigationContainer>
  

  )
}
export default App