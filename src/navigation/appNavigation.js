import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';

import SelectRole from '../screens/SelectRole';
import TeacherSignUp from '../screens/TeacherSignUp';
import ParentSignUp from '../screens/ParentSignUp';
import StudentSignUp from '../screens/StudentSignUp';
const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
       
        <Stack.Screen name="SelectRole" options={{headerShown: false}} component={SelectRole} />
        <Stack.Screen name="TeacherSignUp" options={{headerShown: false}} component={TeacherSignUp} />
        <Stack.Screen name="ParentSignUp" options={{headerShown: false}} component={ParentSignUp} />
        <Stack.Screen name="StudentSignUp" options={{headerShown: false}} component={StudentSignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}