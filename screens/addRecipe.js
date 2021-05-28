import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, Text, View, TouchableOpacity, Alert, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from 'expo-image-picker';
import { Video } from "expo-av";
import { recipes } from "../screens/home";



export default function addRecipe({ navigation }) {

  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [procedures, setProcedures] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
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
      setVideo(result.uri);
    }
  };

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
        recipes.push({ imageIsUri: true, videoIsUri: true, image: image, video: video, title: name, text: ingredients, text2: procedures});
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
          recipes.push({ imageIsUri: true, videoIsUri: true, image: image, video: video, title: name, text: ingredients, text2: procedures});
          navigation.goBack();
          exist = false;
        }
      }
    } 
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={{flex: 1}}>
        
        <TouchableOpacity style={styles.addMediaButton} onPress={pickImage}>
          <Text style={styles.addMediaButtonText}> Add Photo </Text>
        </TouchableOpacity>
        <Image
          source={{uri: image}}
          style={styles.mediaStyle}/>

        <TouchableOpacity style={styles.addMediaButton} onPress={pickVideo}>
          <Text style={styles.addMediaButtonText}> Add Video </Text>
        </TouchableOpacity>
        <Video
          source={{uri: video}}
          pause={false}
          useNativeControls
          resizeMode="contain"
          style={styles.mediaStyle}/>

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

      <View style={{borderTopWidth: 0.5}}>
        <TouchableOpacity style={styles.doneButton} onPress={addButton}>
          <Text style={{fontSize: 20}}> Done </Text>
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
    height: 200,
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
    height: 120,
    alignSelf: "center",
    borderRadius: 20,
    marginVertical: 20,
    backgroundColor: "#F4F4F4"
  },
});