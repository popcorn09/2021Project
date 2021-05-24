import React, {useState} from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Modal, TextInput } from "react-native";

export var recipies = [
  { 
    title: "Chicken Adobo",
    text: "Ingredients (for 4 serving) \n\n" +
    "- 2 lb chicken (910 g) \n" +
    "- 3 dried bay leaves \n" +
    "- 5 tablespoons soy sauce \n" +
    "- 2 tablespoons vinegar \n" +
    "- 3 garlics, crushed \n" +
    "- 1 cup water (240 ml) \n" +
    "- 1/4 cup cooking oil (60 ml) \n" +
    "- 1 tablespoon white sugar \n" +
    "- salt, to taste \n" +
    "- whole peppercorn \n" +
    "\n" +
    "Preparation \n\n" +
    "1. In a container or a plastic food bag, combine soy sauce and garlic then marinade the chicken for 30 minutes. \n\n" +
    "2. Place a medium heat and add oil, once the oil is hot put the marinated chicken and brown (about five minutes). \n\n" +
    "3. Pour in the remaning marinade and water, then bring to boil. \n\n" +
    "4. Add the dried bay leaves and whole peppercorn. Simmer for 30 minutes until chicken is tender. \n\n" +
    "5. Add the vinegar, stir and simmer for 10 minutes. \n\n" +
    "6. Add the sugar, salt, and stir. Then remove the heat. \n\n" +
    "7. Enjoy!", 
    id: 1 
  },
  { 
    title: "Japanese Pork Cutlet (Tonkatasu) with Curry", 
    text: "Ingredients (for 4 servings) \n\n" +
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
    "- 1/3 cup japanese curry paste (75 g) \n" +
    "\n" +
    "Preparation \n\n" +
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
    id: 2 
  },
  { 
    title: "Tempura Bowl", 
    text: "Ingredients (for 2 servings) \n\n" +
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
    "- 1 teaspoon dashi granules, japanese stock granules \n" +
    "\n" +
    "Preparation \n\n" +
    "1. Prepare shrimp by taking off shell and deveining. \n\n" +
    "2. Make 4 slits down the stomach. Flip shrimp on the side and diagonally slice 4 more slits on each side. (This will keep the shrimp straight when cooked.) \n\n" +
    "3. In a medium bowl, beat egg and soda water. \n\n" +
    "4. Heat a pot of oil to 350˚F (180˚C). \n\n" +
    "5. Then add cake flour and mix, but keep it clumpy. Do NOT over-mix. \n" +
    "6. Dredge shrimp up to the tail and carefully place into frying oil. Fry for 2-3 minutes or until shrimp is fully cooked. Place tempura on paper towel to absorb oil or a wired rack to drain excess oil. \n\n" +
    "7. For the dipping sauce, combine soy sauce and mirin. If using, dissolve dashi in the hot water and add to the soy sauce and mirin. \n\n" +
    "8. Arrange assorted tempura on a bowl of rice. \n\n" +
    "9. Enjoy!", 
    id: 3 
  },
];

export default function Home({ navigation }) {

  const [update, setUpdate] = useState(false);

  const up = () => {
    if (update == false) {
      setUpdate(true);
    } else if (update == true) {
      setUpdate(false);
    }
  }

  const moreInfoPressHandler = (item) => {
    console.log("Open more info with ID = " + item.id);
    // Put here a code to open the next View which contains more info about the recipe
    navigation.navigate("AboutRecipe", item);
  }
  const openAddRecipe = () => {
    navigation.navigate("AddRecipe");
  }

  return (
    <View style={styles.container}>

      <FlatList style={styles.recipiesList}
        keyExtractor={(item) => item.id.toString()}
        data={recipies}
        //extraData={}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => moreInfoPressHandler(item)}>
            <View key={item.key} style={styles.noteView}>
              <Text style={styles.noteTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.addButton} onPress={openAddRecipe}>
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    backgroundColor: "#DCDCDC",
  },
  headerTitle: {
    textTransform: "uppercase",
    paddingTop: 25,
    margin: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  noteView: {
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 10,
    marginHorizontal: 20,
    padding: 20,
  },
  noteTitle: {
    color: "#3C3C3C",
    fontSize: 20,
    fontWeight: "bold",
  },
  noteText: {
    color: "#3C3C3C",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  addButton: { 
    padding: 7,
    height: 70,
    width: 70,
    backgroundColor: "#DCDCDC",
    borderRadius: 200,
    position: "absolute",
    right: 30,
    bottom: 30,
    alignItems: "center",
  },
  plusText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "gray",
  },
  recipiesList: {
    flex: 1,
    marginBottom: 10,
  },
});