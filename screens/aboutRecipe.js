import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { recipies } from "../screens/home";



export default function aboutRecipe({ navigation }) {

  const deleteRecipe = (id) => {
    for (var index = 0; index < recipies.length; index++) {
      if (recipies[index].id == id) {
        recipies.splice(index, 1);
        navigation.goBack();
      }
    }
  }
  
  return (
    
    <View style={styles.container}>

      <View style={styles.titleView}>
        <Text style={styles.title}> { navigation.getParam("title") } </Text>
      </View>
      <View style={styles.ingredientsView}>
        <Text style={styles.ingredients}> Ingredients: </Text>
        <ScrollView style={styles.scrollIngredients}>
          <Text style={styles.ingredients}> { navigation.getParam("text") } </Text>
        </ScrollView>
        <TouchableOpacity style={styles.deleteBtn} onPress={() => deleteRecipe( navigation.getParam("id"))}>
        <Text> DELETE </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleView: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  ingredientsView: {
    flex: 1,
  },
  ingredients: {
    fontSize: 20,
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  deleteBtn: {
    position: "absolute",
    padding: 8,
    top: 20,
    right: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  scrollIngredients: {
    flex: 1,
    marginBottom: 10,
    marginTop:10,
  },
});