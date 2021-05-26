import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Dimensions } from "react-native";
import { recipes, images, videos } from "../screens/home";
import { Video } from "expo-av";



export default function aboutRecipe({ navigation }) {

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  var image = images.recipes[ navigation.getParam("title") ];
  var vid = videos.recipes[ navigation.getParam("title") ];

  const editRecipe = (title) => {

  }
  
  return (
    
    <View style={styles.container}>

      <View style={styles.titleView}>
        <Text style={styles.title}> { navigation.getParam("title") } </Text>
      </View>

      <View style={{flex: 1}}>

        <ScrollView style={styles.scrollIngredients}>
          <Image source={image} style={{width: "100%", height: 400, backgroundColor: "gray"}}/>
          <View style={styles.ingredientsView}>
            <Text style={styles.ingredients}> INGREDIENTS: </Text>
          </View> 
          <Text style={styles.ingredientsText}> { navigation.getParam("text") } </Text>
          <View style={styles.ingredientsView}>
            <Text style={styles.ingredients}> PORCEDURES: </Text>
          </View>
          <Video
            ref={video}
            style={{width: Dimensions.get('screen').width, 
              height: Dimensions.get('screen').width/1.77, 
              backgroundColor: "black",
            }}
            source={false ? { uri: vid } : vid }
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />
          <Text style={styles.ingredientsText}> { navigation.getParam("text2") } </Text>

          <TouchableOpacity style={styles.editBtn} onPress={() => editRecipe( navigation.getParam("title"))}>
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