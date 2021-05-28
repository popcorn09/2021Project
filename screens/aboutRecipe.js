import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Dimensions } from "react-native";
import { images, videos } from "../screens/home";
import { Video } from "expo-av";



export default function aboutRecipe({ navigation }) {

  const [height, setHeight] = useState(Dimensions.get('window').width/1.777);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    navigation.addListener("willFocus", () => {
      up();
    })
  })

  var image = images.recipes[ navigation.getParam("id") ];
  var vid = videos.recipes[ navigation.getParam("id") ];

  const up = () => {
    if (update == true) {
      setUpdate(false);
    }
    else {
      setUpdate(true);
    }
  }

  const editRecipe = () => {
    var recipe = {
      title: navigation.getParam("title"),
      text: navigation.getParam("text"),
      text2: navigation.getParam("text2"),
    }
    navigation.navigate("EditRecipe", recipe);
  }

  const mediaHeight = () => {
    if (image == undefined) {
      return (0);
    } else {
      return (height);
    }
  }
  
  return (
    
    <View style={styles.container}>

      <View style={styles.titleView}>
        <Text style={styles.title}> { navigation.getParam("title") } </Text>
      </View>

      <View style={{flex: 1}}>

        <ScrollView style={styles.scrollIngredients}>
          <Image source={image} style={{
            width: Dimensions.get('window').width,
            height: mediaHeight(),
            backgroundColor: "gray"}} />
          <View style={styles.ingredientsView}>
            <Text style={styles.ingredients}> INGREDIENTS: </Text>
          </View> 
          <Text style={styles.ingredientsText}> { navigation.getParam("text") } </Text>
          <View style={styles.ingredientsView}>
            <Text style={styles.ingredients}> PORCEDURES: </Text>
          </View>
          <Video
            style={{width: Dimensions.get('window').width, 
              height: mediaHeight(), 
              backgroundColor: "black",
            }}
            source={false ? { uri: vid } : vid }
            useNativeControls
            resizeMode="contain"
            isLooping={false}
            playInBackground={false}
            playWhenInactive={false} />
          <Text style={styles.ingredientsText}> { navigation.getParam("text2") } </Text>

          <TouchableOpacity style={styles.editBtn} onPress={() => editRecipe()}>
          <Text> EDIT </Text>
        </TouchableOpacity>
        </ScrollView>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBF3FA",
  },
  titleView: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  ingredientsView: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  ingredients: {
    fontSize: 20,
    margin: 20
  },
  ingredientsText: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 40,
    marginLeft: 40,
    marginRight: 40,
  },
  deleteBtn: {
    position: "absolute",
    padding: 8,
    top: 10,
    right: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  editBtn: {
    padding: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 40,
    marginBottom: 40,
  },
  scrollIngredients: {
    flex: 1,
  },
});