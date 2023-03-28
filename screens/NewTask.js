import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Platform } from "react-native";
import database from '../config'

export default function NewTask({ navigation }, props) {
 
    const [description, setDescription] = useState(null);
   
    function addTask(){
      database.collection('Tasks').add({
        description: description,
        status: false
      })
      navigation.navigate("Task");
    }

    return(
        <View style={styles.container}>
          <SafeAreaView styles={styles.droidSafeArea}/>
          <Text style={styles.label}>Description</Text>
          <TextInput
          style={styles.input}
          placeholder="Ex: estudar javascript"
          onChangeText={setDescription}
          value={description}
          />
          <TouchableOpacity 
            style={styles.buttonNewTask}
            onPress={()=>{
              addTask()
            }}
          >
            <Text style={styles.iconButton}>Save</Text>
          </TouchableOpacity>
        </View>
      )
    }

    const styles = StyleSheet.create({
        container: { 
          flex:1,
          backgroundColor:"#15193c",
          marginTop: 20,
        },
        label:{
          width:"90%",
          marginTop: 20,
          fontSize:16,
          marginLeft: 20,
          color:"#F92E6A"
        },
        input:{
         width:"90%",
         marginTop:10,
         padding:12,
         height:50,
         borderBottomWidth: 1,
         borderBottomColor:"#F92E6A",
         marginLeft:"auto",
         marginRight:"auto",
         borderRadius:50,
         backgroundColor:"#f5f5f5cf",
        },
        buttonNewTask:{
         width:80,
         height:80,
         position:"absolute",
         bottom: 70,
         left:20,
         backgroundColor:"#F92e6a",
         borderRadius:50,
         justifyContent:"center",
         alignItems: "center"
        },
        iconButton:{
         color:"#ffffff",
         fontSize:16,
         fontWeight:"bold",
        },
        droidSafeArea: {
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        },
        
       });