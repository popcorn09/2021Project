import React, { useState } from "react";
import { TextInput, StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { recipes } from "../screens/home";



export default function addRecipe({ navigation }) {

  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [procedures, setProcedures] = useState("");

  const addButton = () => {
    var length = recipes.length;
    var exist = false;
    if (name == "" || ingredients == "" || procedures == "") {
      Alert.alert(
        "Alert",
        "Not all of the entry is filled",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      );
    } else {
      if (length == 0) {
        recipes.push({ title: name, text: ingredients, text2: procedures, id: 0});
        navigation.goBack();
      } 
      else {
        for (var j = 0; j < length; j++) {
          if (recipes[j].title == name) {
            exist = true;
            Alert.alert(
              "Alert",
              "The Recipe Name already exist",
              [{ text: "OK", onPress: () => console.log("OK Pressed") }]
            );
            break;
          }
        }
        if (!exist) {
          recipes.push({ title: name, text: ingredients, text2: procedures, id: 0});
          navigation.goBack();
          exist = false;
        }
      }
    } 
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={{flex: 1}}>
        
        <View style={styles.inputView}>
          <Text style={styles.inputText}> Recipe Name: </Text>
          <TextInput 
            style={styles.inputName}
            multiline
            onChangeText={name => setName(name.trim())}/>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputText}> Ingredients: </Text>
          <TextInput
            style={styles.inputIngredients}
            onChangeText={ingredients => setIngredients(ingredients.trim())}
            multiline={true}/>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputText}> Procedures: </Text>
          <TextInput
            style={styles.inputIngredients}
            onChangeText={procedures => setProcedures(procedures.trim())}
            multiline={true}/>
        </View>
        
      </KeyboardAwareScrollView>

      <TouchableOpacity style={styles.doneButton} onPress={addButton}>
        <Text style={{fontSize: 20}}> Done </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBF3FA",
  },
  inputView: {
    marginHorizontal: 40,
    marginTop: 15,
  },
  inputName: {
    backgroundColor: "white",
    marginHorizontal: 5,
    fontSize: 20,
    padding: 10,
    color: "black",
    borderRadius: 10,
  },
  inputIngredients: {
    backgroundColor: "white",
    marginHorizontal: 5,
    fontSize: 20,
    padding: 10,
    color: "black",
    borderRadius: 10,
    height: 250,
  },
  inputText: {
    fontSize: 20,
    marginBottom: 10,
  },
  doneButton: {
    padding: 20,
    marginVertical: 30,
    marginHorizontal: 60,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
  },
});