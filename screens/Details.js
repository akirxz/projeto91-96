import React, { useState } from "react"
import {View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Platform}  from "react-native"
 
import database from "../config"

export default function Details({navigation, route}){
  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
  const idTask = route.params.id
 
  function editTask(description, id){
    database.collection("Tasks").doc(id).update({
      description: description,
    })
    navigation.navigate("Task")
  }
  
return(
    <View style={styles.container}>
      <SafeAreaView/>
      <Text style={styles.label}>Descrição</Text>
      <TextInput
      style={styles.input}
      placeholder="Ex: estudar javascript"
      onChangeText={setDescriptionEdit}
      value={descriptionEdit}
      />
      <TouchableOpacity 
        style={styles.buttonNewTask}
        onPress={()=>{
          editTask(descriptionEdit, idTask)
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
      backgroundColor: "#15193c",
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
     padding:10,
     height:50,
     borderBottomWidth: 1,
     borderBottomColor:"#F92E6A",
     marginLeft:"auto",
     marginRight:"auto",
     color: "#282b2db5",
     backgroundColor: "#f5f5f5cf",
     borderRadius: 50,
    },
    buttonNewTask:{
     width:60,
     height:60,
     position:"absolute",
     bottom: 30,
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
