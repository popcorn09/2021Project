import React, { useState, useEffect, Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, StatusBar, Alert } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { sampleRecipes, sampleRecipes2 } from "./recipeCategories";

//=========================================================================================
export default function categorizedRecipes({ navigation }) {
  const [categoryType, setCategoryType] = useState( navigation.getParam("categoryType") );
  const [update, setUpdate] = useState( false );
  const [height, setHeight] = useState( Dimensions.get('window').width/1.777 );
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    setRecipes( sampleRecipes2 );
    navigation.addListener("willFocus", () => {
      up();
    })
  })

  const imageMediaHeight = (image) => {
    if (image == undefined) {
      return (0);
    } else {
      return (height);
    }
  }

  const up = () => {
    if (update == true) {
      setUpdate(false);
    }
    else {
      setUpdate(true);
    }
  }

  const moreInfoPressHandler = (item) => {
    console.log("Open more info with ID = " + item.title);
    // Put here a code to open the next View which contains more info about the recipe
    navigation.navigate("AboutRecipeScreen", item);
  }
  const openAddRecipe = () => {
    navigation.navigate("AddRecipeScreen", { categoryType: categoryType });
  }

  const confirmationDeleteRecipe = (item) => {
    console.log(item.title);
    Alert.alert("Delete Confirmation", "Are you sure you want to delete this recipe?", [
      { text: "Yes", onPress: () => deleteRecipe(item) },
      { text: "No", onPress: () => console.log("Denied recipe deletion") }
    ]);
  }

  const deleteRecipe = (item) => {
    console.log(item.title);
    for (let index = 0; index < sampleRecipes.length; index++) {
      if (sampleRecipes[index].title == item.title) {
        sampleRecipes.splice(index, 1);
        if (update == true) {
          setUpdate(false);
        } else {
          setUpdate(true);
        }
        console.log(sampleRecipes);
      }
    }
    for (let index = 0; index < sampleRecipes2.length; index++) {
      if (sampleRecipes2[index].title == item.title) {
        sampleRecipes2.splice(index, 1);
        if (update == true) {
          setUpdate(false);
        } else {
          setUpdate(true);
        }
        console.log(sampleRecipes2);
      }
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={"dark-content"}
        showHideTransition={"none"} />

      <SwipeListView style={styles.recipesList}
        keyExtractor={(item) => item.title}
        data={recipes}
        extraData={update}
        rightOpenValue={-90}
        disableRightSwipe={true}
        contentInset = {{bottom: 60}}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={1} onPress={() => moreInfoPressHandler(item)}>
            <View key={item.key} style={styles.recipeView}>
              <Image source={item.imageIsUri ? {uri: item.image}: item.image} style={{
                width: View.width,
                height: imageMediaHeight(item.image),
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                backgroundColor: "gray"}} />
              <Text numberOfLines={2} style={styles.recipeTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        renderHiddenItem={({ item }) => (
          <TouchableOpacity key={item.key} style={styles.hiddenDelete} onPress={() => confirmationDeleteRecipe(item)}>
              <Text style={styles.hiddenDeleteText}> Delete </Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.addButton} onPress={openAddRecipe}>
        <Text style={styles.plusText}> + </Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recipesList: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: "white",
  },
  recipeView: {
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 10,
    marginHorizontal: 20,
    shadowColor: "green",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  recipeTitle: {
    color: "#3C3C3C",
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
    textAlign: "center"
  },
  hiddenDelete: {
    backgroundColor: "red",
    borderRadius: 20,
    marginTop: 15,
    marginLeft: 26,
    marginRight: 20,
    marginBottom: 20,
    height: "70%",
    justifyContent: "center",
  },
  hiddenDeleteText: {
    fontSize: 20,
    color: "white",
    marginRight: 20,
    textAlign: "right",
  },
  addButton: { 
    height: 70,
    width: 70,
    backgroundColor: "#DCDCDC",
    borderRadius: 200,
    position: "absolute",
    right: 30,
    bottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  plusText: {
    fontSize: 45,
    fontWeight: "bold",
    color: "gray",
    marginBottom: 5,
  },
});