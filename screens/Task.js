import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  SafeAreaView,
  Platform
} from "react-native";

import database from "../config";
import { MaterialIcons } from "@expo/vector-icons";


export default function Task({ navigation }) {
  // PRIMEIRO ELEMENTO task fica salvo uma lista de itens (precisa ser uma array)
  // SEGUNDO ELEMENTO é uma função responsavel por alterar o primeiro elemento
  const [task, setTask] = useState([]);

  function deleteTask(id) {
    Alert.alert(
      "Deletar",
      "Tem certeza que deseja deletar?",
      [
        {
          text: "Cancelar",
          onPress: () => {
            return;
          },
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => database.collection("Tasks").doc(id).delete(),
        },
      ],
      { cancelable: false }
    );
  }

  useEffect(() => {
    // toda vez q carregar nosso componente Task o useEffect será executado
    // vai pegar a coleção e atualizar sempre q o dado for atualizado
    database.collection("Tasks").onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      // aqui nós setamos dentro da nossa task
      setTask(list);
    });
  }, []);

  // aqui precisamos carregar as informacoes na tela
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea}/>
      <Text style={styles.label}>Lista</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={({ item }) => {
          return (
            <View style={styles.Tasks}>
              <View style={styles.checkContainer}></View>
              <Text
                style={styles.DescriptionTask}
                onPress={() =>
                  navigation.navigate("Details", {
                    id: item.id,
                    description: item.description,
                  })
                }
              >
                {item.description}
              </Text>
              <TouchableOpacity
                style={styles.deleteTask}
                onPress={() => {
                  deleteTask(item.id);
                }}
              >
                <MaterialIcons
                  name="delete-forever"
                  size={25}
                  color="#f64372"
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c",
    marginTop: 20,
  },
  label: {
    width: "90%",
    marginTop: 20,
    fontSize: 16,
    marginLeft: 20,
    color: "#F92E6A",
  },
  Tasks: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  deleteTask: {
    justifyContent: "center",
    paddingRight: 35,
  },
  DescriptionTask: {
    width: "75%",
    alignContent: "flex-start",
    backgroundColor: "#f5f5f5cf",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 5,
    marginRight: 15,
    color: "#282b2db5",
  },
  buttonNewTask: {
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 30,
    left: 20,
    backgroundColor: "#F92e6a",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 35
  },
});
