import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Switch
} from "react-native";
import firebase from "firebase";


export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        isEnabled: false,
        light_theme: true,
        profile_image: "",
        name: ""
        

    };
  }
  
  render() {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
              <Text style={styles.appTitleText}>Profile</Text>
          </View>
          <View style={styles.themeContainer}>
              <Switch
                style={{
                  transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
                }}
                trackColor={{ false: "#767577", true: "white" }}
                thumbColor={this.state.isEnabled ? "#ee8249" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
         
                
              />
            </View>
          <View style={{ flex: 0.08 }} />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  appTitle: {
    margin:40,
    flexDirection: "row"
  },
  appTitleText: {
    color: "white",
    fontSize:25
  },
  themeContainer: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    marginTop:20
  },

});