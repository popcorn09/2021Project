import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, StatusBar, FlatList } from "react-native";

export let sampleRecipes = [
  { 
    categoryType: "Chicken Recipes",
    imageIsUri: false,
    videoIsUri: false,
    image: require("../assets/chicken-adobo.jpg"),
    video: require("../assets/chicken-adobo-vid.mp4"),
    title: "Chicken Adobo", // Name of the Recipe
    text: // Ingredients
    "(for 4 serving) \n\n" +
    "- 2 lb chicken (910 g) \n" +
    "- 3 dried bay leaves \n" +
    "- 5 tablespoons soy sauce \n" +
    "- 2 tablespoons vinegar \n" +
    "- 3 garlics, crushed \n" +
    "- 1 cup water (240 ml) \n" +
    "- 1/4 cup cooking oil (60 ml) \n" +
    "- 1 tablespoon white sugar \n" +
    "- salt, to taste \n" +
    "- whole peppercorn",
    text2: // Procedures
    "1. In a container or a plastic food bag, combine soy sauce and garlic then marinade the chicken for 30 minutes. \n\n" +
    "2. Place a medium heat and add oil, once the oil is hot put the marinated chicken and brown (about five minutes). \n\n" +
    "3. Pour in the remaning marinade and water, then bring to boil. \n\n" +
    "4. Add the dried bay leaves and whole peppercorn. Simmer for 30 minutes until chicken is tender. \n\n" +
    "5. Add the vinegar, stir and simmer for 10 minutes. \n\n" +
    "6. Add the sugar, salt, and stir. Then remove the heat. \n\n" +
    "7. Enjoy!", 
  },
  { 
    categoryType: "Pork Recipes",
    imageIsUri: false,
    videoIsUri: false,
    image: require("../assets/japanese-pork-cutlet-tonkatsu-with-curry.jpg"),
    video: require("../assets/japanese-pork-cutlet-tonkatsu-with-curry-vid.mp4"),
    title: "Japanese Pork Cutlet (Tonkatsu) with Curry", // Name of the Recipe
    text: // Ingredients
    "(for 4 servings) \n\n" +
    "- 4 cups white rice (920 g), cooked \n\n" +
    "PORK CUTLET \n\n" +
    "- 4 boneless pork chops \n" +
    "- salt, to taste \n" +
    "- pepper, to taste \n" +
    "- 4 shisco leaves \n" +
    "- 4 slices mozzarella cheese \n" +
    "- 1/2 cup four (60 g) \n" +
    "- 3 eggs \n" +
    "- 3 cups, panko breadcrumbs (150 g) \n" +
    "- oil, for frying \n" +
    "\n" +
    "JAPANESE CURRY \n\n" +
    "- 1 tablespoon oil \n" +
    "- 1/2 onion, sliced \n" +
    "- 2 medium potatoes, cubed \n" +
    "- 1 medium carrot, diced \n" +
    "- 3 cups water (720 ml) \n" +
    "- 1/3 cup japanese curry paste (75 g)",
    text2: // Procedures
    "1. Season the pork chops on both sides with salt and pepper. \n\n" +
    "2. Cut a large slit through the side of the pork chops. \n\n" +
    "3. Place the cheese in the pocket of the pork chop. Place a slice of mozzarella on top of a shiso leaf, then fold it in half. \n\n" +
    "4. Repeat with the remaining pork chops. \n\n" +
    "5. Dredge the pork in the flour, shaking off excess. Dip the pork in the egg, then roll evenly in the bread crumbs then back into the egg, then back into the bread crumbs. \n\n" +
    "6. Repeat with the other pork chops. \n\n" +
    "7. Heat oil over medium-high heat until about 360°F (185˚C). \n\n" +
    "8. Fry the pork chops one at a time until golden brown, then drain on a paper towel. \n\n" +
    "9. Sauté the onions until translucent, then add the potatoes and carrots. Cook for about 1 minute, then add the water, bringing to a boil. \n\n" +
    "10. Lower the heat and simmer for about 10 minutes. \n\n" +
    "11. Add the curry paste, then stir until dissolved. \n\n" +
    "12. Cook for another 10 minutes on low heat, then set aside. \n\n" +
    "13. Slice the pork cutlets into ½-inch (1-cm) slices. \n\n" +
    "14. To serve, place the pork cutlet slices over the rice, then pour a generous serving of curry on half of the pork. \n\n" +
    "15. Enjoy!",
  },
  { 
    categoryType: "Seafoods Recipes",
    imageIsUri: false,
    videoIsUri: false,
    image: require("../assets/tempura-bowl.jpg"),
    video: require("../assets/tempura-bowl-vid.mp4"),
    title: "Tempura Bowl", // Name of the Recipe
    text: // Ingredients
    "(for 2 servings) \n\n" +
    "- 4 shripms \n" +
    "- sweet potato \n" +
    "- mushroom \n" +
    "- green bean \n" +
    "- kabocha pumpkin \n" +
    "- rice \n" +
    "\n" +
    "TEMPURA BATTER \n\n" +
    "- 1 egg \n" +
    "- 1/2 cup soda water (120 ml), cold \n" +
    "- 1/2 cup cup cake flour (60 g) \n" +
    "- oil, for fyring \n" +
    "\n" +
    "DIPPING SAUCE \n\n" +
    "- 1 tablespoon sauce \n" +
    "- 1 tablespoon mirin \n" +
    "\n" +
    "OPTIONAL \n\n" +
    "- 1/4 cup water (60 ml), hot \n" +
    "- 1 teaspoon dashi granules, japanese stock granules",
    text2: // Procedures
    "1. Prepare shrimp by taking off shell and deveining. \n\n" +
    "2. Make 4 slits down the stomach. Flip shrimp on the side and diagonally slice 4 more slits on each side. (This will keep the shrimp straight when cooked.) \n\n" +
    "3. In a medium bowl, beat egg and soda water. \n\n" +
    "4. Heat a pot of oil to 350˚F (180˚C). \n\n" +
    "5. Then add cake flour and mix, but keep it clumpy. Do NOT over-mix. \n" +
    "6. Dredge shrimp up to the tail and carefully place into frying oil. Fry for 2-3 minutes or until shrimp is fully cooked. Place tempura on paper towel to absorb oil or a wired rack to drain excess oil. \n\n" +
    "7. For the dipping sauce, combine soy sauce and mirin. If using, dissolve dashi in the hot water and add to the soy sauce and mirin. \n\n" +
    "8. Arrange assorted tempura on a bowl of rice. \n\n" +
    "9. Enjoy!", 
  },
  { 
    categoryType: "Chicken Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/Chicken-Curry.jpg"),
    //video: require("../assets/tempura-bowl-vid.mp4"),
    title: "Chicken Curry", // Name of the Recipe
    text: // Ingredients
    "- 1 Kilo Chicken \n" +
    "- 2 medium sized potatoes, chopped \n" +
    "- 1 big carrot, sliced \n" +
    "- 1 tbsp garlic, minced \n" +
    "- 3 stalks celery, cut into 2 inches length \n" +
    "- 1 medium onion, chopped \n" +
    "- 1 small red bell pepper, cut into cubes \n" +
    "- 2 tbsp fish sauce \n" +
    "- 1 cup coconut milk \n" +
    "- 2 tbsp curry powder \n" +
    "- 1 thumb ginger, cut into strips \n" +
    "- 1 cup water \n",
    
    text2: // Procedures
    "1. Cut the chicken into pieces. Leave the chicken bone-in. If you prefer boneless chicken meat, then de-bone the chicken. \n\n" +
    "2. Heat up a deep pot and add the oil. \n\n" +
    "3. Fry the potato and carrots for 2 minutes and set aside. \n\n" +
    "4. Saute chicken together with garlic, onion and ginger. \n\n" +
    "5. When garlic is light brown in color, add fish sauce and curry powder. \n\n" +
    "6. Stir well. Add water then cover the pot and lower the heat to medium. Simmer until the chicken is tender.  \n\n" +
    "7. Once the chicken is cooked, add the red bell pepper, celery, carrot and potato. Then simmer for 5 minutes. \n\n" +
    "8. Add the coconut milk and mix well. Simmer for another 5 minutes. \n\n" +
    "9. Serve hot with rice. ",
  },
  { 
    categoryType: "Pork Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/Pork-Steak-Recipe.jpg"),
    //video: require("../assets/tempura-bowl-vid.mp4"),
    title: "Pork Steak", // Name of the Recipe
    text: // Ingredients
    "- 4 to 5 pieces pork chops \n" +
    "- 5 tablespoons soy sauce \n" +
    "- 2 pieces lime or 1 piece lemon \n" +
    "- 1/2 cup cooking oil \n" +
    "- 2 medium onions, sliced \n" +
    "- 1 1/2 cups water \n" +
    "- 1 tablespoon granulated white sugar \n" +
    "- Salt and Pepper to taste \n",
    
    text2: // Procedures
    "1. Combine pork chops, soy sauce, and lime(or lemon) juice in a large bowl or container. Marinade for at least 1 hour.  \n\n" +
    "2. Heat a pan then pour-in cooking oil. \n\n" +
    "3. Pan-fry the marinated pork chops in medium heat for 3 to 5 minutes per side. \n\n" +
    "4. Remove excess oil. Pour-in the remaining marinade and water and let it boil. Simmer for 45 minutes or until the pork is tender. Note: Add water as needed. \n\n" +
    "5. Add-in the sugar, salt, and pepper then stir. \n\n" +
    "6. Put-in the onions and cook for 3 minutes more.  \n\n" +
    "7. Turn off the heat and transfer to a serving plate. \n\n",
  },
];

export let sampleRecipes2;

//=========================================================================================
export default function recipeCategories({ navigation }) {
  const [update, setUpdate] = useState(false);
  const [height, setHeight] = useState(Dimensions.get('window').width/1.777);
  const [categories, setCategories] = useState([
      { id: 1, category: "Chicken Recipes", image: require("../assets/chicken_recipes_category_img.jpg") },
      { id: 2, category: "Pork Recipes", image: require("../assets/pork_recipes_category_img.jpg") },
      { id: 3, category: "Beef Recipes", image: require("../assets/beef_recipes_category_img.jpeg") },
      { id: 4, category: "Seafoods Recipes", image: require("../assets/seafoods_recipes_category_img.jpg") },
      { id: 5, category: "Fish Recipes", image: require("../assets/fish_recipes_category_img.jpg") },
      { id: 6, category: "Vegetable Recipes", image: require("../assets/vegetable_recipes_category_img.jpg") },
      { id: 7, category: "Soup Recipes", image: require("../assets/soup_recipes_category_img.jpg") },
      { id: 8, category: "Pasta/Noodles/Pancit", image: require("../assets/pasta_noodles_pancit_recipes_category_img.png") }
  ]);

  useEffect(() => {
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
    console.log("Open more info with ID = " + item.id);
    console.log("Open more info with Category = " + item.category);
    sampleRecipes2 = [];
    for (let i = 0; i < sampleRecipes.length; i++) {
      if (sampleRecipes[i].categoryType == item.category) {
        sampleRecipes2.push(sampleRecipes[i]);
        console.log(sampleRecipes2);
      }
      console.log(sampleRecipes[i].categoryType == item.category);
    }
    navigation.navigate("RecipesScreen", { categoryType: item.category });
  }

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={"dark-content"}
        showHideTransition={"none"} />

      <FlatList style={styles.recipesList}
        keyExtractor={(item) => item.id}
        data={categories}
        contentInset = {{bottom: 60}}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={1} onPress={() => moreInfoPressHandler(item)}>
            <View key={item.key} style={styles.recipeView}>
              <Image source={false ? {uri: item.image}: item.image} style={{
                width: View.width,
                height: imageMediaHeight(item.image),
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                backgroundColor: "gray"}} />
              <Text numberOfLines={2} style={styles.recipeTitle}>{item.category}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

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
    backgroundColor: "#F9F6F2",
  },
  recipeView: {
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
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
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 20,
    marginTop: 9,
    textAlign: "center"
  },
  hiddenDelete: {
    backgroundColor: "#fc454e",
    borderRadius: 20,
    marginTop: 11,
    marginLeft: 25,
    marginRight: 20,
    height: 78,
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