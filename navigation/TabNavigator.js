import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import  Task  from "../screens/Task";
import  NewTask  from "../screens/NewTask";
import  Profile  from "../screens/Profile";

const Tab = createMaterialBottomTabNavigator()

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomTabStyleLight}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Task") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "New Task") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            } else if (route.name === "Profile") {
                iconName = focused ? "color-palette":"color-palette-outline";
              }
            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
                style={styles.icons}
              />
            );
          }
        })}
        activeColor={"#ee8249"}
        inactiveColor={"gray"}
      >
        <Tab.Screen name="Task" component={Task} /> 
        <Tab.Screen name="New Task" component={NewTask} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  bottomTabStyleLight: {
    backgroundColor: "#eaeaea",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: 30,
    height: 30
  }
});