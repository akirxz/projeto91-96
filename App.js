import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Task from './screens/Task';
import Details from './screens/Details';
import TabNavigator from './navigation/TabNavigator';

const Stack = createStackNavigator();

const StackNav = () => {
  return(
  <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Task" component={Task} />
    <Stack.Screen name="Details" component={Details} />
    <Stack.Screen name="Home" component={TabNavigator} />
   
  </Stack.Navigator>)
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>)

}