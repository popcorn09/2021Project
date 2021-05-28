import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Dimensions, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { recipes } from "../screens/home";



export default function editRecipe({ navigation }) {

    const [name, setName] = useState( navigation.getParam("title") );
    const [ingredients, setIngredients] = useState( navigation.getParam("text") );
    const [procedures, setProcedures] = useState( navigation.getParam("text2") );

    const editButton = () => {
        for (var j = 0; j < recipes.length; j++) {
            if (navigation.getParam("title") == recipes[j].title) {
                recipes[j].title = name;
                recipes[j].text = ingredients;
                recipes[j].text2 = procedures;
            }
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
          <KeyboardAwareScrollView style={{flex: 1}}>
            
            <View style={styles.inputView}>
              <Text style={styles.inputText}> Recipe Name: </Text>
              <TextInput 
                value={name}
                style={styles.inputName}
                multiline
                onChangeText={name => setName(name)}/>
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputText}> Ingredients: </Text>
              <TextInput
                value={ingredients}
                style={styles.inputIngredients}
                onChangeText={ingredients => setIngredients(ingredients)}
                multiline={true}
                numberOfLine={10}/>
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputText}> Procedures: </Text>
              <TextInput
                value={procedures}
                style={styles.inputIngredients}
                onChangeText={procedures => setProcedures(procedures)}
                multiline={true}
                numberOfLine={10}/>
            </View>
            
          </KeyboardAwareScrollView>
    
          <TouchableOpacity style={styles.doneButton} onPress={editButton}>
            <Text style={{fontSize: 20}}> Save </Text>
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