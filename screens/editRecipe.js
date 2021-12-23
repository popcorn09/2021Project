import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from 'expo-image-picker';
import { Video } from "expo-av";
import { sampleRecipes, sampleRecipes2 } from "./recipeCategories";



export default function editRecipe({ navigation }) {

  const [name, setName] = useState( navigation.getParam("title") );
  const [ingredients, setIngredients] = useState( navigation.getParam("text") );
  const [procedures, setProcedures] = useState( navigation.getParam("text2") );
  const [image, setImage] = useState( navigation.getParam("image") );
  const [video, setVideo] = useState( navigation.getParam("video") );
  const [imageIsUri, setImageIsUri] = useState( navigation.getParam("imageIsUri") );
  const [videoIsUri, setVideoIsUri] = useState( navigation.getParam("videoIsUri") );

  const editButton = () => {
      for (let j = 0; j < sampleRecipes.length; j++) {
          if (navigation.getParam("title") == sampleRecipes[j].title) {
            sampleRecipes[j].title = name;
            sampleRecipes[j].text = ingredients;
            sampleRecipes[j].text2 = procedures;
            sampleRecipes[j].image = image;
            sampleRecipes[j].video = video;
            sampleRecipes[j].imageIsUri = imageIsUri;
            sampleRecipes[j].videoIsUri = videoIsUri;
          }
      }
      for (let j = 0; j < sampleRecipes2.length; j++) {
        if (navigation.getParam("title") == sampleRecipes2[j].title) {
          sampleRecipes2[j].title = name;
          sampleRecipes2[j].text = ingredients;
          sampleRecipes2[j].text2 = procedures;
          sampleRecipes2[j].image = image;
          sampleRecipes2[j].video = video;
          sampleRecipes2[j].imageIsUri = imageIsUri;
          sampleRecipes2[j].videoIsUri = videoIsUri;
        }
    }
      navigation.goBack();
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImageIsUri(true);
      setImage(result.uri);
    }
  };

  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setVideoIsUri(true);
      setVideo(result.uri);
    }
  };

  const setImageMedia = () => {
    setImage(null);
    setImageIsUri(true);
  }
  
  const setVideoMedia = () => {
    setVideo(null);
    setVideoIsUri(true);
  }

  return (
    <View style={styles.container}>
    <KeyboardAwareScrollView
      style={{flex: 1}}
      contentInset = {{bottom: 60}}>
        
      <TouchableOpacity style={styles.addMediaButton} onPress={pickImage}>
        <Text style={styles.addMediaButtonText}> Add Photo </Text>
      </TouchableOpacity>
      <Image
        source={imageIsUri ? {uri: image}: image}
        style={styles.mediaStyle}/>
      <TouchableOpacity style={{alignSelf: "center"}} onPress={() => setImage(null)}>
        <Text style={{color: "#0084FF", marginBottom: 10}}> Delete Image </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addMediaButton} onPress={pickVideo}>
        <Text style={styles.addMediaButtonText}> Add Video </Text>
      </TouchableOpacity>
      <Video
        source={videoIsUri ? {uri: video}: video}
        pause={false}
        useNativeControls
        resizeMode="contain"
        style={styles.mediaStyle}/>
      <TouchableOpacity style={{alignSelf: "center"}} onPress={() => setVideo(null)}>
        <Text style={{color: "#0084FF", marginBottom: 10}}> Delete Video </Text>
      </TouchableOpacity>

      <View style={styles.inputView}>
        <Text style={styles.inputText}> Recipe Name: </Text>
        <TextInput 
          value={name}
          style={styles.inputName}
          multiline
          onChangeText={name => setName(name)}
          scrollEnabled={false}/>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputText}> Ingredients: </Text>
        <TextInput
          value={ingredients}
          style={styles.inputIngredients}
          onChangeText={ingredients => setIngredients(ingredients)}
          multiline={true}
          scrollEnabled={false}/>
      </View>
      <View style={styles.inputViewEnd}>
        <Text style={styles.inputText}> Procedures: </Text>
        <TextInput
          value={procedures}
          style={styles.inputIngredients}
          onChangeText={procedures => setProcedures(procedures)}
          multiline={true}
          scrollEnabled={false}/>
      </View>
        
    </KeyboardAwareScrollView>

    <View style={{borderTopWidth: 0.5}}>
      <TouchableOpacity style={styles.doneButton} onPress={editButton}>
        <Text style={{fontSize: 20}}> Save Changes </Text>
      </TouchableOpacity>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBF3FA",
  },
  inputView: {
    marginHorizontal: 20,
    marginTop: 15,
  },
  inputViewEnd: {
    marginHorizontal: 20,
    marginTop: 15,
    margin: 400,
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
    borderRadius: 10
  },
  inputText: {
    fontSize: 20,
    marginBottom: 10,
  },
  doneButton: {
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 60,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
  },
  addMediaButton: {
    padding: 15,
    marginTop: 10,
    backgroundColor: "#0084FF",
    borderRadius: 15,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  addMediaButtonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  mediaStyle: {
    width: 200,
    height: 112.5,
    alignSelf: "center",
    borderRadius: 20,
    marginVertical: 20,
    backgroundColor: "#F4F4F4"
  },
});