import React, {useState} from "react";
import { TextInput, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { recipies } from "../screens/home";

export function add() {
  addButton();
}

export default function addRecipe({ navigation }) {

  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");

  const ingredientSet = (text) => {
    console.log(text);
    setIngredients(text);
  }

  const addButton = () => {
    console.log("Recipe Added");
    var recipiesLength = recipies.length;
  
    for(var j = 0; j < recipiesLength - 1; j++) {
      var nextId = parseInt(recipies[j].id) + 1;
      console.log( nextId + " " + parseInt(recipies[j+1].id) );
  
      if ( nextId != parseInt(recipies[j+1].id) ) {
        var id = parseInt(recipies[j].id) + 2; 
        recipies.push({ title: name, text: ingredients, id: id });
        console.log(" Added ID = " + id );
        break;
      }
      else if ( j == recipiesLength - 2 ) {
        var id = parseInt(recipies[j].id) + 2;
        recipies.push({ title: name, text: ingredients, id: id });
        console.log(" Added ID = " + id );
      }
    }
    navigation.goBack();
    console.log(recipies);
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={{flex: 1}}>
        
        <View style={styles.inputView}>
          <Text style={styles.inputText}> Recipe Name: </Text>
          <TextInput 
            style={styles.inputName}
            onChangeText={name => setName(name)}/>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputText}> Ingredients: </Text>
          <TextInput
            style={styles.inputIngredients}
            onChangeText={ingredients => ingredientSet(ingredients)}
            multiline={true}
            numberOfLine={10}/>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputText}> Procedures: </Text>
          <TextInput
            style={styles.inputIngredients}
            onChangeText={ingredients => ingredientSet(ingredients)}
            multiline={true}
            numberOfLine={10}/>
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
    marginHorizontal: 30,
    marginTop: 30,
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
    flex: 1,
    padding: 10,
    margin: 70,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    right: 35,
    bottom: 35,
    position: "relative",
    left: 1,
  },
});