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
    image: require("../assets/CHICKEN RECIPE/Chicken Halang Halang.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Chicken Halang Halang", // Name of the Recipe
    text: // Ingredients
    "- 1 kilo chicken \n " +
    "- 3 thumb size ginger, cut into strips \n " +
    "- 1 small size papaya, cut into wedges \n " +
    "- 1/2 head garlic, chopped \n " +
    "- 1 medium size onion, chopped \n " +
    "- 3-5 pcs. green chili \n " +
    "- 1 cup coconut milk powder \n " +
    "- 1 bundle dahon ng sili (if available) \n " +
    "- 1-2 stalk lemon grass \n " +
    "- 2 tbsp. peppercorns \n " +
    "- 1/4 cup patis \n " +
    "- salt \n " +
    "- cooking oil \n ",
    
    
    text2: // Procedure 
    "1. Cut chicken into serving pieces with the bones intact. \n\n " +
    "2. Wash thoroughly and drain, set aside. In a sauce pan sauté garlic, onion and ginger. \n\n " +
    "3. Add chicken and patis, stir cook for 3 to 5 minutes. Add in lemongrass, green chili, peppercorns and 2 to 3 cups of water and 1/2 cup of coconut milk powder diluted if 1 cup of water, bring to boil and simmer for 10-15 minutes or until chicken are tender. \n\n " +
    "4. Then add papaya and the remaining coconut powder diluted in 1/2 cup of water, cook for another 5 to 8 minutes or until papaya are cooked and the broth is reduced to a saucy consistency. \n\n " +
    "5. Season with salt if required. Add in dahon ng sili and cook for another minute. Serve hot. \n\n " ,
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
  //diria diay banda. follow lang ang format. tas ang category type, mubase ka sa baba
  { 
    categoryType: "Chicken Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/CHICKEN RECIPE/Adidas Humba.jpg"),
    //video: require("../assets/tempura-bowl-vid.mp4"),
    title: "Adidas Humba", // Name of the Recipe
    text: // Ingredients
    "- 1/2 kilo chicken feet (cleaned and fried) \n" +
    "- 1/2 teaspoon black pepper \n" +
    "- 1 teaspoon atsuete powder \n" +
    "- 5 cloves garlic \n" +
    "- 1/2 cup vinegar \n" +
    "- 2 tablespoons sugar \n" +
    "- salt to taste \n" +
    "- hard boiled eggs (optional) \n",
    
    text2: // Procedures
    "1. Sauté the garlic then add the fried adidas, black pepper, vinegar sugar and atsuete powder then stir and simmer for few minutes.  \n\n" +
    "2. Add the water and simmer until the adidas is really tender, add hard-boiled egg if you want season it with salt then simmer until done. Serve with rice. \n\n" ,
  },

  { 
    categoryType: "Chicken Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/CHICKEN RECIPE/Adobong Manok sa Gata.jpg"),
    //video: require("../assets/CHICKEN RECIPE/Adobong Manok sa Gata.jpeg"),
    title: "Adobong Manok sa Gata", // Name of the Recipe
    text: // Ingredients
    "- 1 kg chicken legs and/or thighs \n "  +
    "- 1 whole garlic, minced \n " +
    "- 1 cup water \n " +
    "- 3/4 cup vinegar \n "  +
    "- 3/4 cup soy sauce (Philippine Soy Sauce not the Chinese Soy Sauce, they taste differently if you can’t find one you can use Kikkoman) \n " +
    "- 1 1/2 cup coconut cream \n " +
    "- 4 pcs bay leaves \n " +
    "- 1 tsp brown sugar \n " +
    "- 2 tbsp whole peppercorns \n " +
    "- birds’ eye chilies \n " +
    "- oil \n " ,

    
    text2: // Procedures
    "1. In a separate pot sauté garlic in oil using low heat until golden brown. Remove from pot and set aside. \n\n " +
    "2. Add chicken and fry until browning occurs. \n\n " +
    "3. Add water, vinegar, soy sauce, peppercorn, bay leaves and sugar then bring to a boil and simmer for 25 minutes. \n\n " +
    "4. Drain and reserve the liquid, in a separate frying pan add oil and fry the drained meat in high heat browning the sides. \n\n " +
    "5. Mix coconut cream and the drained liquid together then pour the mixture in the pan. \n\n " +
    "6. Add chilies (depends on the hotness you want) then simmer for additional 5 minutes. Serve. \n\n ",
  },
   
    {
  categoryType: "Chicken Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/CHICKEN RECIPE/Binagoongang Manok sa Gata.jpg"),
    //video: require("../assets/tempura-bowl-vid.mp4"),
    title: "Binagoongang Manok sa Gata", // Name of the Recipe
    text: // Ingredients
    "- Chicken, cut into serving portions - 300 to 400 g \n" +
    "- Sauteed Bagoong alamang (fermented shrimp paste) - 2 tbsp (you can add more) \n " +
    "- Garlic, chopped - 4 cloves \n " +
    "- Onions, diced - 1 small \n "+
    "- Ginger - 4 slices \n " +
    "- Ripe tomatoes, diced - 2 small \n " +
    "- Coconut Powder - 5 tbsp \n" +
    "_ Water - 3c \n " +
    "- Vegetable oil - 1 tbsp \n",
    
    text2: // Procedures
    "1. Heat oil in a wok then add the chicken. Pan fry until all sides turned brown. \n\n " +
    "2. Add the garlic, then the ginger and onions. Give a quick stir (10 stirs). Then throw in the tomatoes. Pan fry under low heat for a minute or until the tomatoes soften. \n\n " +
    "3. Pour 2 cups of water and 2 tbsp of bagoong alamang, cover, and bring to a boil. Simmer for at least 15 minutes. check water level. \n\n " +
    "4. Dissolve the coconut cream in 1 cup of water and pour it into the chicken stew. Cover and bring to a boil. Simmer for another 15 minutes. Add water as needed. \n\n " +
    "5. Remove cover and simmer until most of the liquids have evaporated. \n\n" ,
  },
  {
    categoryType: "Chicken Recipes",
      imageIsUri: false,
      //videoIsUri: false
      image: require("../assets/CHICKEN RECIPE/Chicken Galantina.jpg"),
      //video: require("../assets/tempura-bowl-vid.mp4"),
      title: "Chicken Galantina", // Name of the Recipe
      text: // Ingredients
      "- 1 whole deboned chicken \n " +
      "- 2 Tbsps. soy sauce \n " +
      "- 1 Tbsp Kalamansi juice \n " +
      "- Ingredients for The Filling \n " +
      "- 1/2 kilo ground pork, double ground \n " +
      "- 1 can Vienna sausage, chopped finely \n " +
      "- 1 cup finely chopped ham \n " +
      "- 1/2 cup finely chopped carrots \n " + 
      "- 10-12 Pitted green olives sliced into rings \n " +
      "- 1/4 cup Bread crumbs \n " +
      "- 3 Whole eggs \n " +
      "- 1 tsp spanish paprika \n " +
      "- 1/2 tsp salt \n " +
      "- 1/4 tsp ground black pepper \n " +
      "- 2 pcs hard-boiled eggs for stuffing \n " +
      "- Butter for brushing \n",
      
      text2: // Procedures
      "1. Marinate the deboned chicken in a mixture of soy sauce and kalamansi juice for 30 minutes. Keep refrigerated until ready to use. \n\n " +
      "2. In a mixing bowl, combine ground pork, vienna sausage, ham, carrots, olives, bread crumbs and eggs. mix thoroughly. Season with paprika, salt and pepper. \n\n " +
      "3. To stuff, lay a sheet of aluminum foil on a tray. Lay chicken with the open side facing up. Stuff meat mixture into the chicken cavity. When filling is 3/4 finished, take hard-boiled eggs and stuff 1 on each side of the bird. Finish with the remaining filling. \n\n " +
      "4. Sew opening with needle and thread or secure with several toothpicks. Brush chicken all over with butter. Wrap chicken tightly with cheese cloth or aluminum foil. \n\n " +
      "5. Prepare a large steamer with water and let water boil over high heat. Place wrapped chicken in the center. Cover with a lid and steam for 1 1/2 hours. Unwrap and let cool. Slice in half lengthwise and then cut across, about 1/2 inch per slice. Serve warm or cold. \n\n" ,
    },
    {
    categoryType: "Pork Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/PORK RECIPES/Bagnet.jpg"),
    //video: require("../assets/tempura-bowl-vid.mp4"),
    title: "Bagnet", // Name of the Recipe
    text: // Ingredients
    "- 2 kilo pork liempo (pork belly), whole cut \n " +
    "- 1/2 head garlic \n " +
    "- 1 tsp. peppercorns \n " +
    "- 2 tbsp salt \n " +
    "- 1 bay leaves \n " +
    "- cooking oil for frying \n",
    
    text2: // Procedures
    "1. Wash pork belly, cut into large chunks and place in a large pot. Add enough water to cover the pork belly. \n\n " +
    "2. Add in salt, peppercorns, garlic, bay leaves. Cover and bring to a boil, simmer for 30-45 minutes or until tender. Remove all scum that rises. \n\n " +
    "3. Remove from the pot and place in a colander and let sit for a while so the liquid will drain. Prick the skin many times using the tines of a fork then Dry with paper towels if necessary. Keep refrigerated for several hours. \n\n " +
    "4. In a large kawali heat enough cooking oil and deep fry pork belly at low heat for 30-45 minutes. \n\n " +
    "5. Remove pork belly from the kawali and drain oil in a colander or paper towels, allow to cool completely. \n\n " +
    "6. Reheat the same oil over moderate heat deep fry the pork belly once more for 10-15 minutes or until golden brown, crisp and blisters appear on the skin. Drain on paper towels. \n\n " +
    "7. Chop bagnet to serving pieces and serve immediately with a selection of sukang Iloko or tomatoes and onions with bagoong isda dip. \n\n" ,
  },

  {
    categoryType: "Pork Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/PORK RECIPES/Bopis.jpg"),
    //video: require("../assets/tempura-bowl-vid.mp4"),
    title: "Bopis", // Name of the Recipe
    text: // Ingredients
    "- 1 1/2 lbs. pig's lungs, boiled in lemon grass and pandan leaves until tender and minced \n " +
    "- 1 lb. pig's heart, boiled in lemon grass and pandan leaves until tender and minced \n " +
    "- 1/2 cup annatto seeds diluted in 1 cup of water \n " +
    "- 1 small carrot, minced (optional) \n " +
    "- 4 to 6 tablespoons white vinegar \n " +
    "- 2 tablespoons bird's eye chili, minced \n " +
    "- 2 tablespoons ginger, minced \n " +
    "- 1 medium onion, chopped \n " +
    "- 4 cloves garlic, minced \n " +
    "- 3 to 4 pieces dried bay leaves \n " +
    "- 1 cup water \n " +
    "- 3 tablespoons cooking oil \n " +
    "- Salt and pepper to taste \n",
    
    text2: // Procedures
    "1. Heat a frying pan or wok and pour-in cooking oil. \n\n " +
    "2. Sauté ginger, garlic, and onion. \n\n " +
    "3. Add the bird's eye chili and cook for 30 seconds. \n\n " +
    "4. Put-in the minced pig's lungs and heart then cook for 3 to 5 minutes while stirring once in a while. \n\n " +
    "5. Pour in annatto water (water from the diluted annatto seeds) and stir. \n\n " +
    "6. Add the dried bay leaves and pour-in 1 cup of water. Simmer for 30 to 35 minutes or until almost all the liquid evaporates. \n\n " +
    "7. Put-in the minced carrots and stir. Simmer for 3 minutes. \n\n " +
    "8. Season with salt, and ground black pepper then stir. \n\n " + 
    "9. Pour-in the vinegar and cook for 8 to 10 minutes more under medium heat. \n\n " +
    "10. Turn-off heat and transfer to a serving plate. \n\n" ,
  },

  {
    categoryType: "Pork Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/PORK RECIPES/braised pork belly in soy sauce.jpg"),
    //video: require("../assets/tempura-bowl-vid.mp4"),
    title: "Braised Pork in Soy Sauce", // Name of the Recipe
    text: // Ingredients
    "- 2 lbs. pork shoulder butt, cubed \n " +
    "- 3 tablespoons olive oil \n " +
    "- 4 cloves garlic, chopped \n " +
    "- 2 tablespoons brown sugar \n " +
    "- 3 tablespoons soy sauce \n " +
    "- 2 tablespoons oyster sauce \n " +
    "- 1 large potato, peeled and cubed \n " +
    "- 4 hard-boiled eggs \n " +
    "- 1 1/2 cups water or more as needed \n",
    
    text2: // Procedures
    "1. Heat oil in a heavy pan over medium high heat. Add garlic; sauté for 1 minute or until lightly brown. \n\n " +
    "2. Add brown sugar; sauté for 30 seconds. Add pork pieces; cook for 3 minutes or until meats are no longer pink \n\n " +
    "3. Add soy sauce; stir and cook for 1 minute and then add water. Bring to a boil. Reduce heat, cover and let simmer for 1 hour or until pork is tender. Add more water as needed. (I added 1/2 cup water each time mixture runs out of sauce) \n\n " +
    "4. Add oyster sauce and potatoes, cook for 10 minutes or until potatoes are tender. \n\n " +
    "5. Add hard boiled eggs and gently stir. Adjust seasonings and simmer for 1 more minute. Transfer to a plate. \n\n " +
    "6. Serve with steamed rice. Enjoy! \n\n" ,
  },

  {
    categoryType: "Pork Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/PORK RECIPES/Crispy Adobo Flakes.jpg"),
    //video: require("../assets/tempura-bowl-vid.mp4"),
    title: "Crispy Adobo Flakes", // Name of the Recipe
    text: // Ingredients
    "- 1 lb. pork adobo, cooked \n " +
    "- 1/2 to 1 cup olive oil \n",
    
    text2: // Procedures
    "1. Tear-up or flake the pork adobo slices along the grain. \n\n " +
    "2. Mix the flaked pork with its sauce to absorb flavor. Let it sit for 10 minutes. \n\n " +
    "3. Heat a frying pan and pour-in the olive oil. \n\n " +
    "4. When the oil becomes hot, fry the shredded pork in medium heat until the texture becomes crisp. \n\n " +
    "5. Turn-off heat then transfer the fried pork in a plate lined with paper towel. This will absorb the oil. \n\n " +
    "6. Transfer to a serving plate then serve with sinamak (spiced vinegar) \n\n" ,
  },

  {
    categoryType: "Pork Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/PORK RECIPES/Grilled Dijon Pork Chops.webp"),
    //video: require("../assets/tempura-bowl-vid.mp4"),
    title: "Grilled Dijon Pork Chops", // Name of the Recipe
    text: // Ingredients
    "- 4 pieces pork chops \n " +
    "- 1/4 cup Dijon mustard \n " + 
    "- 1/2 cup Worcestershire sauce \n " +
    "- 2 teaspoons granulated white sugar \n " +
    "- 1 teaspoon salt \n " +
    "- 1/2 teaspoon ground black pepper \n",
    
    text2: // Procedures
    "1. Make the marinade by combining Dijon mustard, Worcestershire sauce, sugar, salt, and ground black pepper in a bowl, and then stir the mixture thoroughly. \n\n " +
    "2. Place the pork chops in a freezer bag or any container then pour-in the marinade. \n\n " +
    "3. Place inside the refrigerator, and then marinade overnight. \n\n " +
    "4. Heat a grill, and then grill each sides of the pork chop for 5 to 7 minutes, or until done. \n\n " +
    "5. Transfer the grilled pork chop on a serving plate, and then serve. \n\n" ,
  },

  {
    categoryType: "Pork Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/PORK RECIPES/Honey Garlic Barbecue Spare Ribs.jpg"),
    //video: require("../assets/tempura-bowl-vid.mp4"),
    title: "Honey Garlic Barbecue Spare Ribs", // Name of the Recipe
    text: // Ingredients
    "- 2 lbs. spare ribs, chopped into 3 to 4 inches \n " +
    "- 2 tablespoons honey \n " +
    "- 2 tablespoons hoisin sauce \n " +
    "- 1 tablespoon oyster sauce \n " +
    "- 2 tablespoon soy sauce \n " +
    "- 4 cloves garlic, pounded \n",
    
    text2: // Procedures
    "1. Combine honey, oyster sauce, hoisin sauce, soy sauce, and garlic in a bowl then mix well by stirring. \n\n " +
    "2. Place the spare ribs in a large bowl then pour-in the mixture. \n\n " +
    "3. Coat the ribs with the mixture and marinate for at least 3 hours. \n\n " +
    "4. Preheat the oven to 350 degrees Fahrenheit. \n\n " +
    "5. Arrange the marinated spare ribs in a baking tray then bake for 35 minutes. You can baste this with a little olive oil so that the meat won't dry. \n\n  " +
    "6. Turn the oven off then transfer the spare ribs on a serving plate. \n\n" ,
  },

  {
    categoryType: "Pork Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/PORK RECIPES/Liver Steak.png"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Liver Steak ", // Name of the Recipe
    text: // Ingredients
    "- 1 lb. Liver (pig's or cow's liver are best) \n " +
    "- 2 medium sized onions, sliced thinly crosswise \n " +
    "- 1piece lemon (or 3-4 pieces kalamansi) \n " + 
    "- 4 tbsp soy sauce \n " +
    "- 3 tbsp garlic. minced (optional) \n " +
    "- 1 tsp salt \n " +
    "- 1/2 tsp pepper \n " +
    "- 4 tbsp cooking oil \n",
    
    text2: // Procedures
    "1. Marinate the liver in lemon juice, soy sauce, salt, and ground black pepper for a minimum of 1 hour. \n\n " +
    "2. Pour the cooking oil in a pan and apply heat. \n\n " +
    "3. Put-in the garlic and fry until color turns golden brown. Set aside. \n\n " +
    "4. On the same pan with the remaining cooking oil, fry the both sides of the liver (do not overcook) then set aside. \n\n " +
    "5. Put the onions in the pan where the liver was fried and cook until texture becomes soft. \n\n " +
    "6. Add the marinade and simmer for 5 to 7 minutes or until sauce becomes thick. \n\n " +
    "7. Pour the sauce with onions over the fried liver and garnish with fried garlic. \n\n " +
    "8. Serve hot. \n\n" ,
  },

  {
    categoryType: "Beef Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/BEEF RECIPES/Arroz-ala-Cubana.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Arroz ala Cubana ", // Name of the Recipe
    text: // Ingredients
    "- 300g lean minced pork \n " +
    "- 300g lean minced beef \n " +
    "- 1/2 cup corn kernels \n " +
    "- 1/2 cup green peas \n " +
    "- 1 carrot, diced \n " +
    "- 2 tbsp soy sauce \n " +
    "- 1 medium onion, finely chopped \n " +
    "- 4 cloves garlic, minced \n " +
    "-salt \n " +
    "- freshly ground black pepper \n " +
    "- oil \n " +
    "- steamed rice \n " +
    "- cardaba (saba) banana, sliced crosswise \n " +
    "_fried egg (sunny side up) \n",
    
    text2: // Procedures
    "1. In a pan add a small amount of oil then fry banana pieces until golden brown on each side. Remove from pan then set aside. \n\n " +
    "2. Using the same pan add oil then sauté garlic and onions. \n\n " +
    "3. Add minced pork and beef and cook until slightly brown in color. \n\n " +
    "4. Add the corn, peas and carrots and cook for 2 minutes. \n\n " +
    "5. Add soy sauce and season with salt and freshly ground black pepper. Turn heat off then set aside. \n\n " +
    "6. Place rice in the middle of the plate, top it with fried egg, place Sautéed Minced Meat at the side and fried bananas on the other side. Serve. \n\n" ,
  },

  {
    categoryType: "Beef Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/BEEF RECIPES/Bagis, Lemon Marinated Ground Beef Stirfry.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Bagis, Lemon Marinated Ground Beef Stirfry", // Name of the Recipe
    text: // Ingredients
    "- 1/2 kilo ground beef \n " +
    "- 1 lemon, juice extracted \n " +
    "- 1 large size onion, chopped \n " +
    "- 2-3 pieces red chili, sliced \n " +
    "- salt and pepper \n " +
    "-cooking oil \n",
    
    text2: // Procedures
    "1. Place the ground beef in a big bowl, squeezed out the juices of the lemon over the meat. \n\n " +
    "2. Season with salt and pepper to taste. Let stand and marinate for at least 10 to 15 minutes or until ready to cook. \n\n " +
    "3. frying pan heat until it start to smoke, add in a tbsp. of cooking oil and quickly stir in the onions and red chili then add in the beef and continuously stirring until the ground beef lumps has loosen up, stir cook for 5 to 10 minutes or until the meat start to sizzle and render fats. Correct saltiness if required and serve immediately. \n\n" ,
  },

  {
    categoryType: "Beef Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/BEEF RECIPES/Beef Bola-Bola.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Beef Bola-Bola", // Name of the Recipe
    text: // Ingredients
    "- 1/2 kilo ground beef \n " +
    "- 1 carrot (minced) \n " +
    "- 1 onion (minced) \n " +
    "- 4 cloves garlic (minced) \n " +
    "- 1/2 cup flour \n " +
    "- 1 beaten egg yolk \n " +
    "- salt and pepper to taste \n",
    
    text2: // Procedures
    "1. Mix all the ingredients then spoon a portion and form into balls. \n\n " +
    "2. Deep fry over medium heat to cook evenly until golden brown. \n\n " +
    "3. Remove from the oil then serve it hot. \n\n ",
  },

  {
    categoryType: "Beef Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/BEEF RECIPES/beef-kaldereta.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Beef Caldereta", // Name of the Recipe
    text: // Ingredients
    "- 2 cups and 2 tbsp unsweetened pineapple juice \n " +
    "- 1 kg. beef ribs \n " +
    "- 2 pieces small onions, sliced \n " +
    "- 2 8g. MAGGI Magic Sarap \n " +
    "- 2 tbsp. cooking oil \n " + 
    "- 2 tbsp. minced garlic \n " + 
    "- ¼ cup chopped onions \n " +
    "- 1 tbsp. pickle relish \n " +
    "- 1 250ml. tomato sauce \n " +
    "- 1 85g. can liver spread \n " +
    "- ¼ cup grated cheddar cheese \n  " +
    "- salt and pepper to taste \n " +
    "- 2 pieces medium potatoes, cubed and fried \n " +
    "- 1piece medium carrots, cubed and fried \n",
    
    text2: // Procedures
    "1. Combine beef, pineapple juice, onions and MAGGI Magic Sarap in a pan. Boil briskly then lower heat. Continue simmering until beef is tender or about 2 hours. Set aside. \n\n " +
    "2. Using a different pan, heat oil then sautés garlic and onions until limp. Add back tenderized beef and broth, bring to a boil. \n\n " +
    "3. Add pickle relish, tomato sauce, liver spread and cheese. Continue simmering until sauce slightly thickens. Season with salt and pepper to taste. \n\n " +
    "4. Add fried potatoes and carrots and cook for another 5 minutes. \n\n ",
  },

  {
    categoryType: "Beef Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/BEEF RECIPES/Beef Steak.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Beef Steak", // Name of the Recipe
    text: // Ingredients
    "- 1 1/2 lbs. beef tenderloin \n " +
    "- 1/3 cup soy sauce \n " + 
    "- 4 tablespoons red wine vinegar \n " +
    "- 1/2 cup water \n " + 
    "- 2 tablespoons honey \n " +
    "- 1 green bell pepper, sliced lengthwise \n " +
    "- 1 medium onion, sliced \n " +
    "- 4 tablespoons extra virgin olive oil \n " +
    "- salt and pepper to taste \n",
    
    text2: // Procedures
    "1. Heat a cooking pot then pour-in 2 tablespoons of olive oil. \n " +
    "2. Put-in the beef and cook for 1 to 2 minutes. \n " +
    "3. Pour-in soy sauce and water then allow to boil. Simmer for 15 to 20 minutes. Note: Add more water if the mixture dries-up. \n " +
    "4. Put-in the honey and red wine vinegar and allow to boil. Stir and simmer for 10 minutes. Turn-off heat and set aside. \n\n ",
  },

  {
    categoryType: "Beef Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/BEEF RECIPES/Beef Meatballs Kaldereta.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Beef Meatballs Caldereta", // Name of the Recipe
    text: // Ingredients
    "- 1/2 kilo regular beef meatballs \n " +
    "- 6 small size egg, hard boiled \n " +
    "- 6 medium side baby potato, peeled \n " +
    "- 1 large size carrot, cut crosswise into 6 parts, peeled \n " +
    "- 200 grams large size button  \n  " +
    "- 1/2 cup pitted green olives \n " +
    "- 3-4 small size Spanish chorizo, cut diagonally \n " +
    "- 4 to 6 small size sweet pickled jerkins, cut diagonally \n " +
    "- 4 to 6 small size sweet pickled jerkins, finely diced \n " +
    "- 1/2 cup syrup from the sweet pickled jerkins \n " +
    "- 2 small can liver spread \n " +
    "- 1/2 head garlic, choppedv \n " +
    "- 2 large size onion, chopped \n " +
    "- 1 tsp. dried parsley flakes \n" +
    "- 1 large size bell pepper, dice into large square \n " +
    "- 1 tsp. peppercorns \n " +
    "- 1 cup tomato sauce \n " +
    "- 1 tsp. Worcestershire sauce \n " +
    "-2 tbsp. soy sauce \n " +
    "- 1/2 cup grated cheddar cheese \n " +
    "- 2-3 pieces bay leaf \n" +
    "- 2-3 pieces green/red chili, sliced \n " +
    "- salt to taste \n " +
    "- cooking oil \n",
    
    text2: // Procedures
    "1. In a frying pan fry the beef meatballs on all side until seared, keep aside. \n\n " +
    "2. In a large sauce pan sauté garlic and onion add in the Spanish chorizo and stir cook for 2 to 3 minutes. \n\n " +
    "3. Add in the potatoes, carrot, tomato sauce, soy sauce, peppercorns, bay leaf, and dried parsley stir cook for 1 to 2 minutes. \n\n " +
    "4. Add in 2 to 2 1/2 cups of water bring to a boil and simmer for 5 to 8 minutes. \n\n " +
    "5. Add in the meatballs, liver spread, diced pickled jerkins, pickled jerkins syrup, Worcestershire sauce, chili and continue to simmer for 8 to 10 minutes. \n\n " +
    "6. Add in the boiled eggs, button mushrooms, olives, cut jerkins and continue to simmer for another 5 to 8 minutes or until the liquid has reduce to a thick consistency. \n\n " +
    "7. Correct saltiness if required. Add in the cheese and bell pepper and cook for another 2 to 3 minutes or until the cheese has melted. Serve.\n\n ",
  },

  {
    categoryType: "Seafoods Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/SEAFOODS/Binusog na Hipon.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Binusog na Hipon", // Name of the Recipe
    text: // Ingredients
    "- 1 cup Ground pork \n " +
    "- 1/2 cup Carrot, finely chopped \n " +
    "- 1/4 cup Onions, finely chopped \n " +
    "- 2 Tbsps. Garlic, finely chopped \n " +
    "- 2 Tbsps. Ginger, finely chopped \n " +
    "- 4 Tbsps. Bread crumbs \n " +
    "- 4 Tbsps. Oyster sauce \n " +
    "- 1 Egg \n " +
    "-salt and pepper to taste \n",
    
    text2: // Procedures
    "1. In a bowl, combine ground pork, carrots, onion, garlic, ginger, breadcrumbs and oyster sauce. Mix thoroughly. \n\n " +
    "2. Stuff the ground pork mixture on the backside of the prawn. Patting to form a small mound. Arrange on a tray and cover with plastic wrap. Chill in the refrigerator for 20-30 minutes. This will make it easier to handle when breading. \n\n " +
    "3. Meanwhile, beat eggs in a bowl. Spread flour and then bread crumbs in two separate plates. Roll the prawn lightly in flour. Dip in egg, then roll in bread crumbs. \n\n " +
    "4. In a frying pan, heat about 1/2 inch of oil. Fry stuffed shrimps, stuffing side down first. Invert to cook other side. Drain on paper towels. Serve with bottled sweet chili sauce. \n\n ",
  },

  {
    categoryType: "Seafoods Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/SEAFOODS/Buttered Shrimps.png"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Buttered Shrimps", // Name of the Recipe
    text: // Ingredients
    "- 1/2 kilo shrimps \n " +
    "- 2 tomatoes \n " + 
    "- 2 tablespoons butter \n  " +
    "- 2 cloves garlic \n " +
    "- 1 small onion \n " +
    "- salt and pepper to taste \n",
    
    text2: // Procedures
    "1. Heat the butter then sautés the garlic, tomato and onion until soften then add the shrimps. \n\n " +
    "2. Give a good stir and increase the heat, add salt and pepper to taste then stir until done. \n\n " +
    "3. Serve it hot. \n\n ",
  },

  {
    categoryType: "Seafoods Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/SEAFOODS/Calamares.png"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Calamares", // Name of the Recipe
    text: // Ingredients
    "- 1/2 lb. medium to large sized squid, cleaned and sliced into rings \n " +
    "- 3/4 cup all-purpose flour \n " +
    "- 1piece raw egg, beaten \n " +
    "- 3/4 cup breadcrumbs \n " +
    "- 1 teaspoon salt \n " +
    "- 1/2 teaspoon ground black pepper \n " +
    "- 2 cups cooking oil \n",
    
    text2: // Procedures
    "1. Combine squid, salt, and ground black pepper then mix well. Let stand for 10 minutes. \n\n " +
    "2. Heat a cooking pot the pour-in cooking oil. \n\n " +
    "3. Dredge the squid in flour then dip in beaten egg and roll over breadcrumbs. \n\n " + 
    "4. When the oil is hot enough, deep-fry the squid until the color of the coating turns brown. Note: This should only take about 2 to 3 minutes in medium heat. Do not overcook the squid. \n\n " +
    "5. Remove the fried squid from the cooking pot and transfer in a plate lined with paper towels. \n\n " +
    "6. Serve with sinamak or Asian dipping sauce. \n\n ",
  },

  {
    categoryType: "Seafoods Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/SEAFOODS/Camaron Rebosado.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Camaron Rebosado", // Name of the Recipe
    text: // Ingredients
    "- 500g shrimps or prawns, peeled \n " +
    "- juice from 1 lemon \n " +
    "- 1 egg, lightly beaten \n " +
    "- 3/4 cup cold water \n " +
    "- 2 cups flour \n " +
    "-1 tsp baking powder \n " +
    "- freshly ground black pepper \n " +
    "- 1 tbsp fish sauce \n " +
    "- salt \n" +
    "- oil \n",
    
    text2: // Procedures
    "1. Marinate shrimps in lemon, salt and freshly ground black pepper. \n " +
    "2. In a bowl mix together baking powder, 1 cup flour, fish sauce, water and egg. \n " +
    "3. Prepare a wok, fill with oil then heat it up. \n " +
    "4. Place remaining flour in a plate, dip shrimps flour first then in batter, deep fry shrimps until golden. Place in a paper towel lined plate to drain excess oil. \n " +
    "5. Transfer to a clean plate then serve with sweet chili sauce. \n\n ",
  },

  {
    categoryType: "Seafoods Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/SEAFOODS/Chili Crab.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Chili Crab", // Name of the Recipe
    text: // Ingredients
    "- 2 lbs. crab, cut in half \n " +
    "-	2 tbsp cooking oil \n " +
    "-	2 tbsp garlic, minced \n " +
    "-	 3 tbsp ginger, minced \n " +
    "-	1 tbsp crushed red pepper or 3 pieces sliced red chili \n " +
    "-	2 tbsp hoisin sauce \n " +
    "-	1/2 cup tomato catsup or tomato sauce \n " +
    "-	1/4 cup sweet chili sauce \n " +
    "-	2 tbsp fish sauce \n " +
    "-	1/2 tsp sesame oil \n  " +
    "-	1/4 cup water \n " +
    "-	3 tbsp green onions or scallions, thinly sliced crosswise \n",
    
    text2: // Procedures
    "1. Heat a cooking pot and pour the cooking oil \n\n  " +
    "2. Sauté the garlic, ginger, and crushed red pepper \n\n " +
    "3. Add the crab and cook for 3 to 4 minutes \n\n " +
    "4. Put-in the hoisin sauce, tomato catsup, sweet chili sauce, fish sauce, and sesame oil then mix with the other ingredients \n\n " +
    "5. Pour the water and bring to a boil then simmer for 10 minutes or until the sauce is thick \n\n " +
    "6. Garnish with green onions on top \n\n " +
    "7. Serve hot. Share and Enjoy! \n\n ",
  },

  {
    categoryType: "Seafoods Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/SEAFOODS/Filipino-Crispy-Crablets-Recipe-500x500.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Crispy Crablets", // Name of the Recipe
    text: // Ingredients
    "-2 lbs. crablets cleaned \n " +
    "- 4 tablespoons gin or sherry (optional) \n " +
    "- 1 cup cornstarch \n " +
    "- 1/2 tablespoon salt \n " +
    "- 2 teaspoons ground black pepper \n " +
    "- 3 cups cooking oil \n",
    
    text2: // Procedures
    "1. Place the crablets in a bowl then pour-in gin or sherry. Mix gently. \n\n " +
    "2. Sprinkle salt and ground black pepper then mix well. \n\n " +
    "3. Heat a frying pan or cooking pot and pour-in cooking oil. \n\n " +
    "4. Dredge the crablets in cornstarch then fry until texture becomes crispy. \n\n " +
    "5. Remove from the pan and place in a plate lined with paper towel. \n\n " +
    "6. Once excess oil drips-off completely, arrange in a serving plate and serve with spicy vinegar dip. \n\n ",
  },

  {
    categoryType: "Seafoods Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/SEAFOODS/Ginataang Langka na may Alimasag.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Ginataang Langka na may Alimasag", // Name of the Recipe
    text: // Ingredients
    "- 250 Grams unripe jackfruit \n " +
    "-	3 Pieces crabs \n " +
    "-	1/2 Stalk lemon grass \n " +
    "-	2 Cups coconut milk \n  " +
    "-	1 Medium size onion \n " +
    "-	1/4 Cup shrimp paste \n " +
    "-	2 Pieces long green chili \n " +
    "-	1 Tumbsize turmeric \n " +
    "-	3 Cloves of garlic \n " +
    "-	Salt and pepper to taste \n",
    
    text2: // Procedures
    "1. Put coconut milk, garlic, onion, turmeric and lemon grass in a saucepan. \n\n " +
    "2. Keep stirring to avoid the milk from curdling, bring to boil. \n\n " +
    "3. Add crabs, jackfruit and shrimp paste, simmer until crabs evenly change color. \n\n " +
    "4. Add long green chili, season with salt and pepper, simmer for another few minutes. \n\n ",
  },

  {
    categoryType: "Fish Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/FISH/Afritadang Bangus.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Afritadang Bangus", // Name of the Recipe
    text: // Ingredients
    "- 1 medium size bangus (about 1/2 k.), sliced into 1 thick \n " +
    "- 1 potato, sliced into 1/2 thick \n " +
    "- 3 bulb garlic, minced \n " +
    "- 1 small size onion, chopped finely \n "  +
    "- 1 small size bell pepper, sliced \n " +
    "- 1 c. tomato sauce \n " +
    "- 2-3 tbsp. cornstarch \n " +
    "- 2-3 tbsp. patis \n " +
    "- 2 pc. bay leaf \n " +
    "- salt and pepper \n " +
    "- cooking oil \n",
    
    text2: // Procedures
    "1. Fry sliced potato and bangus until colour turn to golden brown. \n\n " +
    "2. Remove from frying pan, set aside. In a sauce pan saute garlic and onion until fragrant, add patis 1 c. of water, bay leaf and tomato sauce, stir cook for 3-5 minutes. \n\n " +
    "3. Add in fried potatoes and bangus and cook for 2-3 minutes. \n\n " +
    "4. Add bell pepper, season with salt and pepper, thicken sauce with cornstarch dissolve in 1/4 cup of water, cook for another 2-3 minutes. Serve hot.\n\n ",
  },

  {
    categoryType: "Fish Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/FISH/Binalot na Dilis Paksiw.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Binalot na Dilis Paksiw", // Name of the Recipe
    text: // Ingredients
    "- 1/2 kilo anchovies (dilis) \n " +
    "- thumb size ginger \n " +
    "- 1 onion \n" +
    "- 2 cloves garlic \n " +
    "- 1/2 cup vinegar \n " +
    "- 1/4 teaspoon black pepper (crushed) \n " +
    "- salt \n " +
    "- banana leaves for wrapping \n",
    
    text2: // Procedures
    "1. Combine the anchovies, ginger, black pepper, salt, garlic and 1/4 cup vinegar and mix well. \n\n "  +
    "2. Spoon a portion then place it on the banana leaves and wrap well. \n\n " +
    "3. When wrapping is done, put the rest of the vinegar, cover and cook over low heat. Serve when done. \n\n ",
  },

  {
    categoryType: "Fish Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/FISH/Bolinaw Inun-onan.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Bolinaw Inun-onan", // Name of the Recipe
    text: // Ingredients
    "- 1/2 kilo bolinaw (anchovies) \n " +
    "- thumb size ginger (cut into strips) \n " +
    "- 3/4 cup vinegar \n "  +
    "- 1/2 teaspoon peppercorn (pamintang buo) \n " +
    "- 4 cloves garlic (crushed) \n " +
    "- finger chili or siling haba \n " +
    "- salt and pepper to taste \n",
    
    text2: // Procedures
    "1.Put everything in a pot then cook over medium heat allowing to simmer until the soup almost dry then turn off the heat. \n\n " +
    "2. Serve it hot with rice.\n\n ",
  },

  {
    categoryType: "Fish Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/FISH/Cardillong Isda.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Cardillong Isda", // Name of the Recipe
    text: // Ingredients
    "- 2 medium-sized whole golden pompano, cleaned, gutted and each cut into 4 pieces (You can use other fish like bangus, maya-maya, cod, tilapia, or scad) \n " +
    "- 5 Tbsp Light olive oil \n " +
    "- 2 big tomatoes, washed, seeds removed and chopped \n " +
    "- 1 medium onion, sliced \n " +
    "- 3 cloves garlic, minced \n " +
    "- 1 tsp ginger, minced \n " +
    "- 1 1/2 cups water \n " +
    "- 2 tbsp fish sauce \n " +
    "- 2 eggs, lightly beaten \n " +
    "- 2 stalks green onions, chopped \n " +
    "- salt and pepper to taste \n " +
    "- 1 Jalapeno pepper, seeds removed and sliced into rings (optional) \n",
    
    text2: // Procedures
    "1. Sprinkle fish with salt. Let sit for about 15 minutes. In a skillet over medium heat, fry fish in light olive oil until both sides are light brown. Remove from pan and place on a paper towel lined plate to drain oil. \n\n " +
    "2. In a large sauce pan or in the same skillet (if large enough), saute garlic, ginger, onion and tomatoes over medium heat in the remaining olive oil used for frying the fish until tomatoes are soft. \n\n " +
    "3. Add water and fish sauce and bring to a gentle boil. Add the fried fish. Lower heat and cover the pan. Simmer for about 3 minutes. Season with salt and pepper to suit your taste. \n\n " +
    "4. Add the beaten eggs. When it starts to curdle, gently stir to distribute the eggs evenly in the sauce. \n\n " +
    "5. Add green onions and jalapeno pepper. Simmer for another 2-3 minutes. Remove from heat and let sit for a while to allow the sauce to further absorb the flavor of the fish. Transfer to a serving plate. \n\n  " +
    "6. Serve with hot rice! \n\n ",
  },

  {
    categoryType: "Fish Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/FISH/Catfish Adobo.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Catfish Adobo", // Name of the Recipe
    text: // Ingredients
    "- 1 large cat fish (hito); cut in pieces \n " +
    "- 1/3 cup vinegar \n " +
    "- 1/4 cup water \n " +
    "- 1/4 cup soy sauce (or 1 tablespoon salt) \n " +
    "- 1 root ginger; cut in 3 and crushed \n " +
    "- 1 head garlic; pounded \n " +
    "- 3 tablespoons olive oil \n " +
    "- 1 fish bouillon cubes \n " +
    "- 1/4 tablespoon pepper \n " +
    "- 1 belle pepper (optional add-on); sliced \n",
    
    text2: // Procedures
    "1. Wash and clean the fish removing all entrails. Cut into desired pieces and put in a cooking pot. \n\n " +
    "2. Add garlic, vinegar, water, pepper, ginger, fish bouillon cubes and soy sauce. /n/n " +
    "3. Cover pot and boil until little sauce is left. Add 3 tablespoons of olive oil. Simmer and serve. \n\n ",
  },

  {
    categoryType: "Fish Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/FISH/Escabeche.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Escabeche", // Name of the Recipe
    text: // Ingredients
    "- 1 large fish (1 to 2 lbs.), cleaned and salted \n " +
    "- 1 medium red bell pepper, sliced into strips \n " +
    "- 1 medium red onion, sliced \n " +
    "- 1 cup white vinegar \n " +
    "- 5 cloves garlic, crushed \n " +
    "- 1 teaspoon whole peppercorn \n " +
    "- 1/2 teaspoon salt \n " +
    "- 1/4 cup sugar \n " +
    "- 1/2 cup cooking oil \n",
    
    text2: // Procedures
    "1. Heat cooking oil in a frying pan then fry both sides of the fish until a bit crispy. Set aside. \n " +
    "2. Heat a clean pan and pour-in the vinegar. Let boil. \n " +
    "3. Add sugar, whole peppercorn, and garlic. Cook for 1 minute. \n " +
    "4. Put-in the onion and red bell pepper. Stir and cook until the vegetables are tender. \n " +
    "5. Sprinkle salt and then stir. \n " +
    "7. Put-in the fried fish. Cook for 2 to 3 minutes. \n " +
    "8. Turn-off heat and transfer to a serving plate. \n\n ",
  },
  
  {
    categoryType: "Fish Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/FISH/Lumpiang Bangus.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Lumpiang Bangus", // Name of the Recipe
    text: // Ingredients
    "- 2 Medium sized Bangus (Milkfish), we recommend boneless, but for the budget conscious you can buy the regular bangus or milkfish \n " +
    "- 1/4 cup onion leaves, chopped \n " +
    "- 3 medium onions (or shallots) \n " +
    "- 3 Tomatoes, chopped \n " +
    "- Vegetable oil or Canola Oil for frying \n " +
    "- 2 cups Rice Noodles (Bihon or Sotanghon) \n " +
    "- 3 medium-sized tomatoes \n "  +
    "- 2 cloves garlic \n "  +
    "- 30 Lumpia wrappers \n " +
    "- Fish Sauce (patis) to taste \n " +
    "- Pepper to taste \n " +
    "- 1/2 cup grated Carrots \n " +
    "- 1 egg, beaten \n",
    
    text2: // Procedures
    "1. Clean the fish, place it on a sauce pan and cover with water then boil it until it is tender but not too soft. \n\n " +
    "2. Then flake the fish meat after the bangus has cooled, if you used not boneless bangus, debone it and set it aside. \n\n " +
    "3. Cut the onions and tomatoes into small pieces, then grate the carrots. \n\n "  +
    "4. In another sauce pan, heat oil and Sauté’ the garlic, onion, and tomatoes, add onion leaves, fish meat and carrots, season with fish sauce and pepper. Set aside and cool. \n\n " +
    "5. To wrap the Lumpia, get a tablespoonful of the cooked fish, then add rice noodles, brush a little of egg on the edges of the wrap then wrap it. (see the picture above) Remember, use the tablespoon to measure the meat that you wrap. \n\n " +
    "6. In a deep fryer pour the vegetable oil, when you think it’s hot enough pour the lumpia one by one to avoid sticking to each other. \n\n " +
    "7. Fry it until golden brown. Drain in absorbent paper and serve hot with the Lumpia Sweet Chili sauce. \n\n ",
  },

  {
    categoryType: "Fish Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/FISH/sarciadong-isda.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Sarciadong Isda", // Name of the Recipe
    text: // Ingredients
    "- 2 lbs. Tilapia, cleaned \n " +
    "- 3 pieces medium-sized tomatoes, diced \n " +
    "- 3 pieces medium-sized onions, diced \n " +
    "- 1 3/4 cups water \n " +
    "- 1/2 teaspoon ground black pepper \n " +
    "- 1/2 cup green onions, chopped (optional) \n " +
    "- 2 teaspoons garlic, minced \n " +
    "- 3 pieces raw eggs, beaten \n " +
    "- 2 tablespoons fish sauce \n " +
    "- Cooking oil for frying \n",
    
    text2: // Procedures
    "1. Heat oil in a frying pan then fry the fish. Ensure that salt has been rubbed over the fish before frying. \n\n "+
    "2. Remove the fish from the frying pan and place in a plate with paper towels. Set aside. \n\n " +
    "3. Using a clean pan, heat about 2 teaspoons of cooking oil then saute the garlic, onions, and tomatoes \n\n " +
    "4. Add the fish sauce and ground black pepper then stir. \n\n " +
    "5. Put-in the chopped green onions and water then bring to a boil. \n\n " +
    "6. Add the fried fish and simmer for 3 to 5 minutes. \n\n " +
    "7. Pour the beaten eggs on the pan. Ensure that it is distributed evenly. \n\n " +
    "8. Once the eggs curdle or coagulates, you may start stirring the mixture. \n\n " +
    "9. Simmer for another 2 minutes than transfer to a serving plate. \n\n ",
  },

  {
    categoryType: "Vegetable Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/VEGGIES/Bulanglang.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Bulanglang", // Name of the Recipe
    text: // Ingredients
    "- 1/4 lb. shrimp \n " +
    "- 1/2 lb. boneless chicken \n " +
    "- 1 tsp garlic \n " +
    "- 2 tsp cornstarch \n " +
    "- 1 tbsp oyster sauce \n " +
    "- 1/2piece cabbage, quartered \n " +
    "- 1 cup green bell pepper, sliced \n " +
    "- 1 cup red bell pepper, sliced \n "+ 
    "- 1 small cauliflower, cut into small pieces \n " +
    "- 1 1/2 cup snow peas \n " +
    "- 1 cup carrots, sliced \n" +
    "- 1 cup onion, diced \n " +
    "- 1 cup chicken liver, sliced \n " +
    "- Shrimp juice (derived by crushing the head of the shrimp) \n " +
    "- 2 cup water \n " +
    "- salt and pepper \n",
    
    text2: // Procedures
    "1. Sauté the garlic and onion \n\n " +
    "2. Add the boneless chicken and sauté for 2 minutes \n\n " +
    "3. Put-in the chicken liver and let cook for 3 minutes more \n\n" +
    "4. Pour in the shrimp juice and 1 cup of water and bring to a boil. Cover the pot and simmer for 5 minutes. \n\n " +
    "5. Add the shrimp then sprinkle some salt and pepper. \n\n " +
    "6. Add the oyster sauce and simmer for 2 minutes. \n\n " +
    "7. Put-in the cauliflower and cabbage then mix well. \n\n " +
    "8. Add the carrots, snow peas, and bell pepper. Cover the pot and simmer for 5 minutes or until vegetables are cooked \n\n " +
    "9. Dilute the cornstarch in 1 cup of water then pour mixture in the pot. Mix well. \n\n " +
    "10. Serve hot. \n\n ",
  },

  {
    categoryType: "Vegetable Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/VEGGIES/Ensaladang-Talong.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Ensaladang Talong", // Name of the Recipe
    text: // Ingredients
    "- 3 pcs Chinese eggplant \n " +
    "- 2 medium sized tomatoes, chopped \n " +
    "- 1 medium sized white onion, chopped \n " +
    "- 2 tablespoons shrimp paste (bagoong) or use sea salt for vegetarian option \n " +
    "- 1 medium sized red chili, sliced \n " +
    "- 3/4 cup coconut vinegar or white vinegar \n " +
    "- 1/2 tsp salt \n " +
    "- freshly ground black pepper \n",
    
    text2: // Procedures
    "1. Slice the eggplants in half crosswise then grill until cooked. Cool down then using a spoon scrape off the flesh from the skin. Roughly chop then set aside. \n\n " +
    "2. In a mixing bowl mix everything together. \n\n " +
    "3. Place on small serving plate then serve. \n\n ",
  },

  {
    categoryType: "Vegetable Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/VEGGIES/Poque Poque.webp"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Poque Poque", // Name of the Recipe
    text: // Ingredients
    "- 3 medium eggplants boil and mash \n " +
    "- 3 clove garlic,  \n " +
    "- 1/2 onion, chopped \n " +
    "- 4 medium sized tomatoes, diced \n " +
    "- 3 tbsp cooking oil \n " +
    "- 3/4 teaspoon salt (just add to your taste preference) \n " +
    "- 1/8 pepper to taste \n " +
    "- 1/8 teaspoon msg. or vetsin to taste \n " +
    "- 1 small green bell pepper \n " +
    "- 2 eggs beaten \n",
    
    text2: // Procedures
    "1. Boil or grill the eggplants and peel off skin. Mash the peeled eggplant. \n\n " +
    "2. In a pan sauté garlic, onion, tomatoes in oil. \n\n " +
    "3. Add salt, msg or vetsin, pepper. \n\n " +
    "4. Add in the mashed eggplants, green bell pepper and mix well together. \n\n " +
    "5. Add the beaten egg and stir until the eggs cooked. Serve hot. \n\n ",
  },

  {
    categoryType: "Vegetable Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/VEGGIES/Sautéed Bean Sprout.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Sautéed Bean Sprout", // Name of the Recipe
    text: // Ingredients
    "- Toge (Mung Bean Sprout) - 1 c \n " +
    "- Carrots sliced into thin strips - 1 small \n " +
    "- Cauliflower florets - 1 c \n " +
    "- Onions, diced - 1 medium \n" +
    "- Garlic, coarsely chopped - 5 cloves \n " +
    "- Parsley, dried & ground \n " +
    "- Low sodium Salt - to taste \n " +
    "- Black Pepper Powder \n " +
    "- Vegetable Oil - 1 tbsp \n " +
    "- 1 tin of coconut milk \n " +
    "- 100 g of fried dilis \n",
    
    text2: // Procedures
    "1. In a pan / wok, heat oil and sauté garlic and onions. \n\n " +
    "2. Add the carrots and shrimps. Stir fry for 2 minutes in high heat. \n\n " +
    "3. Add in the bean sprouts, cauliflower florets, carrots and stir fry for a minute. \n\n " +
    "4. Season with low sodium salt to taste, black pepper powder and parsley. Cook until the vegetables are soft.\n\n ",
  }, 

  {
    categoryType: "Vegetable Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/VEGGIES/Simple Stir-Fried Vegetables.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Simple Stir-Fried Vegetables", // Name of the Recipe
    text: // Ingredients
    "- 100g ground beef \n " +
    "- 200g bok choy or petsay \n " +
    "- 3 cloves garlic \n " +
    "- 2 tablespoons oyster sauce \n " +
    "- 2 carrots \n " +
    "- 1 onion \n " +
    "- 1 small red bell pepper \n " +
    "- 1 small head broccoli \n " +
    "- 1 small head cauliflower /n " +
    "- 1/4 cup water \n",
    
    text2: // Procedures
    "1. Sauté the garlic and onion, add the ground beef then simmer for few minutes. \n\n " +
    "2. Increase the heat for stir fry the vegetables, add the cauliflower and broccoli first, continue stir frying until it's softened. \n\n " +
    "3. Add the carrots and bell pepper, stir fry for 3 minutes then add the oyster sauce. \n\n " +
    "4. Add the petsay or bok choy stir fry until done. Serve it hot. \n\n ",
  },

  {
    categoryType: "Vegetable Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/VEGGIES/Veggies with Quail Eggs.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Veggies with Quail Eggs", // Name of the Recipe
    text: // Ingredients
    "- 1/2 lb. shrimp, boiled & shelled \n" +
    "- 2 tbsp butter \n " +
    "- snow peas (chicharo) \n " +
    "- 2 cups green peas & carrots (I used the frozen one) \n " +
    "- 1 cup whole corn kernel \n " +
    "- 4 cloves garlic, minced \n " +
    "- 1 medium onion, chopped \n " +
    "- 1 can (10.5 oz) cream of mushroom \n " +
    "- 1 small can mushroom buttons, sliced \n " + 
    "- 1/2 cup water or use the juice from the mushroom buttons \n " +
    "- salt to taste \n " +
    "- 1 tbsp cooking oil \n " +
    "- 10-12 pcs quail eggs \n",
    
    text2: // Procedures
    "1. Heat cooking butter in a pan or wok. \n\n " +
    "2. Sauté the vegetables starting from chicharo, peas & carrots. Cook for few minutes or until just half cooked. \n\n " +
    "3. Add the corn. Remove from wok. Set aside. \n\n " +
    "4. In the same wok, heat 1 tbsp cooking oil. \n\n " +
    "5. Sauté garlic & onion. \n\n " +
    "6. Add the shrimp, sliced mushrooms and water. Let it simmer. \n\n " +
    "7. Add the cooked vegetables and cream of mushroom. Cook for 5 minutes. \n\n " +
    "8. Add salt to taste \n\n " +
    "9. Add the quail eggs. Remove from heat. \n\n ",
  },

  {
    categoryType: "Soup Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/SOUP/Almondigas.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Almondigas", // Name of the Recipe
    text: // Ingredients
    "- 1 lb. ground pork \n " +
    "- 1 medium sized patola (loofa or Chinese Okra), sliced \n " +
    "- 4 ounces misua \n " +
    "- 1 small onion, minced \n " +
    "- 6 cloves garlic, crushed \n " +
    "- 3 tablespoons fish sauce \n " +
    "- 1piece raw egg \n " +
    "- 1piece beef cube \n " +
    "- 1/8 cup all-purpose flour \n " +
    "- 1 teaspoon Salt \n " +
    "- 1/2 teaspoon ground black pepper \n " +
    "- 5 cups water \n " +
    "- 3 tablespoons cooking oil \n",
    
    text2: // Procedures
    "1. In a large mixing bowl, combine the ground pork, half of the onion, raw egg, salt, ground black pepper, and flour. Mix thoroughly until all the ingredients are well incorporated. Set aside. \n\n " +
    "2. Heat a cooking pot and pour-in oil. \n\n " +
    "3. When the oil is hot enough, sauté the garlic and remaining onions. \n\n " +
    "4. Add the beef cube and fish sauce and cook for a minute. \n\n " +
    "5. Pour-in water and let boil. \n\n " +
    "6. Scoop about a tablespoon of the meat mixture and form it into a ball shape figure then drop in the boiling one after the other. Cook for 10 minutes. \n\n " +
    "7. Add the patola (loofa) and cook for 2 to 3 minutes. \n\n " +
    "8. Put-in the misua and cook for 1 to 2 minutes while gently stirring. \n\n " +
    "9. Turn off heat and transfer to a serving bowl. \n\n ",
  },

  {
    categoryType: "Soup Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/SOUP/Beef Macaroni Soup.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Beef Macaroni Soup", // Name of the Recipe
    text: // Ingredients
    "- Beef, ground- 300 g. \n " +
    "- Elbow macaroni, small ones - 1 c \n " +
    "- Mixed vegetables (carrots, corn, beans, peas) - 1 c \n " +
    "- Cabbage, diced - 1 1/2 c \n " +
    "- Patola, diced - 1 small \n " +
    "- Evaporated milk - 1 cup \n " +
    "- Water - 6 cups cups (as desired) \n " +
    "- Beef bouillon - 1 pc \n " +
    "- thyme \n " +
    "-parsley \n " +
    "- Black pepper ground \n " +
    "- Salt to taste \n " +
    "- Garlic, chopped - 3 cloves \n " +
    "- Onions, diced - 1 medium \n " +
    "- Sunflower oil - 1 tsp \n",
    
    text2: // Procedures
    "1. Cook the macaroni in boiling water until aldente and set aside. Place oil and garlic in a pot and sauté it until it is aromatic. Stir in the onions, parsley, and thyme. \n\n " +
    "2. Add in the ground beef and stir for 5 minutes. Add 1 cup of water and let simmer for at least an hour, adding more water as needed. \n\n " +
    "3. Add the evaporated milk, more water to make it soupy, and the rest of the ingredients except for the veggies and the cooked macaroni. Bring to a boil. \n\n " +
    "4. Add the mixed veggie and the patola. let it simmer for 5 minutes. Make sure that there is enough water for a soup dish. Adjust taste with salt as needed. \n\n " +
    "5. Add the cabbage and simmer for another 2 minutes. Add in the macaroni only during serving. If you add the macaroni with the soup and just leave it, the pasta will absorb most of the liquids. \n\n ",
  },

  {
    categoryType: "Soup Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/SOUP/Beef Mami.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Beef Mami", // Name of the Recipe
    text: // Ingredients
    "- 1 lb. beef brisket \n " +
    "- 6 pieces star anise \n " +
    "- 1piece beef cube \n "  +
    "- 5 cups water \n " +
    "- 2 tbsp cooking oil \n " +
    "- 1 tbsp minced garlic \n " +
    "- 1 medium sized onion, minced \n " +
    "- 1/4 cup green onions, chopped \n  " +
    "- 14 ounces egg noodles, cooked \n " +
    "- 1 cup Chinese cabbage (pechay Baguio), chopped \n " +
    "- 4 pieces hard boiled eggs \n " +
    "- salt and pepper to taste \n",
    
    text2: // Procedures
    "1. Put the oil in a cooking pot and apply heat \n\n " +
    "2. Put-in the beef brisket and cook until the color of the outer part turns light brown. \n\n " +
    "3. Add the beef cube and star anise. \n\n " +
    "4. Pour-in the water and bring to a boil. Allow to boil until beef becomes tender \n\n " +
    "5. Add salt and pepper to taste \n\n " +
    "6. Place the cooked egg noodles and Chinese cabbage in a serving bowl. \n\n " +
    "7. Pour the soup and beef brisket on the bowl with noodles then garnish with sliced boiled egg and green onions. \n\n ",
  },

  {
    categoryType: "Soup Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/SOUP/Burgoo.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Burgoo", // Name of the Recipe
    text: // Ingredients
    "- 3 pcs beef shanks \n " +
    "- 500g pork shoulder, cubed \n " +
    "- 4 pcs chicken legs \n " + 
    "- 1 large onion, chopped \n " +
    "- 2 carrots, chopped \n  " +
    "- 2 celery stalks, chopped \n " +
    "- 6 pcs tomatoes, chopped \n " +
    "- 6 garlic cloves, minced \n " +
    "- 1liter beef stock \n " +
    "- 2 tbsp tomato paste \n " +
    "- 1/4 cup Worcestershire sauce \n " +
    "- 2 large potatoes, cubed \n " +
    "- 20 pcs okra, sliced \n " +
    "- 3 cups corn kernels \n " +
    "- 2 cups lima, butter and/or cannellini beans, cooked \n " +
    "- 1 tsp cayenne pepper \n " +
    "- Salt \n " +
    "- freshly ground black pepper \n " +
    "- oil \n",
    
    text2: // Procedures
    "1. Rub salt generously on all meats then set it aside. \n\n " +
    "2. In a large pot heat oil then brown meats well in batches. Set aside browned meat once done. \n\n " +
    "3. Add onions, celery and garlic into the pot and brown them as well. \n\n " +
    "4. Add the beef back together with the tomatoes, tomato paste and beef stock. Bring it to a boil then simmer in low heat for 40 minutes. \n\n " +
    "5. Add the pork then continue to simmer for 30 minutes. Add water if necessary. \n\n " +
    "6. Add the chicken, carrots and potatoes then continue to simmer for 20 minutes. \n\n " +
    "7. Remove the chicken, debone it and bring chicken meat back to the pot together with beans, corn, okra, cayenne and Worcestershire sauce. Simmer for 15 more minutes. \n\n " +
    "8. Season with salt and pepper then serve it while hot. \n\n ",
  },

  {
    categoryType: "Soup Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/SOUP/Chicken Binakol.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Chicken Binakol", // Name of the Recipe
    text: // Ingredients
    "- 1 whole chicken (about 1 1/2 to 2 lbs.), cut into serving pieces \n " +
    "- 3 cups young coconut water \n " +
    "- 1 1/2 cups young coconut meat \n " +
    "- 2 cups chicken broth \n " +
    "- 2 1/2 tablespoons fish sauce \n " +
    "- 1 small green papaya, wedged \n " +
    "- 1 cup hot pepper leaves \n " +
    "- 4 stalks lemon grass, cut in 1inch length and pounded \n " +
    "- 1 medium onion, chopped \n " +
    "- 1 knob ginger (about 1 tablespoon), chopped \n " +
    "- 4 cloves garlic, minced \n " +
    "- 1/2 teaspoon ground black pepper \n " +
    "- 3 tablespoons cooking oil \n",
    
    text2: // Procedures
    "1. Heat a cooking pot and pour-in cooking oil. \n\n "  +
    "2. Sauté garlic when the oil is hot. \n\n " +
    "3. Put-in onions, ginger, and lemon grass, and then cook for 1 minute. \n\n " +
    "4. Add the chicken. Stir and cook until the color turns light brown (about 3 to 5 minutes) \n\n " +
    "5. Add ground black pepper and fish sauce. Stir. \n\n " +
    "6. Put-in the young coconut meat, young coconut water, and chicken broth. Allow to boil, and then simmer for 30 to 40 minutes. \n\n " +
    "7. Add the green papaya. Cook for 5 minutes. \n\n " +
    "8. Put-in the hot pepper leaves and cook for a minute more. \n\n " +
    "9. Turn the heat off, and then transfer to a serving bowl. \n\n ",
  },

  {
    categoryType: "Soup Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/SOUP/Corn and Crab Egg Drop.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Corn and Crab Egg Drop", // Name of the Recipe
    text: // Ingredients
    "- 5 cups water \n " +
    "- 1 1/2 cups crab meat from fresh crabs \n " +
    "- 2 1/2 cups corn kernel from fresh sweet corn \n " +
    "- 1 tbsp flour \n " +
    "- 3 tbsp tapioca starch \n " +
    "- sesame oil \n " +
    "- 2 eggs, lightly beaten \n " +
    "- 2 cloves garlic, minced \n " +
    "- spring onions, chopped \n " +
    "- white pepper \n " +
    "- salt \n " +
    "- oil \n",
    
    text2: // Procedures
    "1. In a pot add oil and lightly sauté garlic. \n\n " +
    "2. Add corn and stir for 2 minutes. \n\n " +
    "3. Add water, bring to a boil then simmer for 30-40 minutes in low heat. Simmering longer would extract the taste from the corn. \n\n " +
    "4. Add crab meat and simmer for 15 more minutes in low heat. \n\n " +
    "5. In a small bowl, combine flour and tapioca starch with 1/2 cup cold water. \n\n " +
    "6. Slowly add egg on hot soup in a steady thin stream while slowly mixing the soup. \n\n " +
    "7. Add the tapioca starch mixture, simmer until thick. \n\n " +
    "8. Season with sesame oil, white pepper and salt. \n\n " +
    "9. Turn heat off, serve then garnish with chopped spring onions. \n\n ",
  },

  {
    categoryType: "Soup Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/SOUP/Corn and Malunggay Soup.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Corn and Malunggay Soup", // Name of the Recipe
    text: // Ingredients
    "- 1 1/2 cups white corn, shredded \n " +
    "- 1 cup malunggay leaves, cleaned \n " +
    "- 2 to 3 cups chicken broth \n "  +
    "- 2 teaspoons garlic, minced \n " +
    "- 1 small onion, chopped \n " +
    "- 2 tablespoons extra virgin olive oil \n " +
    "- salt and pepper to taste \n",
    
    text2: // Procedures
    "1. Heat a cooking pot then pour-in olive oil. \n\n " +
    "2. When the oil becomes hot, sauté the garlic and onions. \n\n " +
    "3. Put-in the shredded corn and stir. \n\n " +
    "4. Pour-in chicken broth and let boil. Simmer for 8 to 10 minutes. \n\n " +
    "5. Add salt and ground black pepper then cook for 2 minutes more. \n\n " +
    "6. Put-in the malunggay leaves. Stir and simmer for 2 minutes more. \n\n " +
    "7. Turn-off heat and transfer to a serving bowl. \n\n ",
  },

  {
    categoryType: "Soup Recipes",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/SOUP/Maki Soup.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Maki Soup", // Name of the Recipe
    text: // Ingredients
    "- 1/2 lb. shrimp, boiled & shelled \n " +
    "- 2 tbsp butter \n " +
    "- snow peas (chicharo) \n " +
    "- 2 cups green peas & carrots (I used the frozen one) \n " +
    "- 1 cup whole corn kernel \n " +
    "- 4 cloves garlic, minced \n " +
    "- 1 medium onion, chopped \n " +
    "- 1 can (10.5 oz) cream of mushroom \n " +
    "- 1 small can mushroom buttons, sliced \n " +
    "- 1/2 cup water or use the juice from the mushroom buttons \n "  +
    "- salt to taste \n "  +
    "- 1 tbsp cooking oil \n " +
    "- 10-12 pcs quail eggs \n",
    
    text2: // Procedures
    "1. Heat cooking butter in a pan or wok. \n\n " +
    "2. Sauté the vegetables starting from chicharo, peas & carrots. Cook for few minutes or until just half cooked. \n\n " +
    "3. Add the corn. Remove from wok. Set aside. \n\n " +
    "4. In the same wok, heat 1 tbsp cooking oil. \n\n " +
    "5. Sauté garlic & onion. \n\n " +
    "6. Add the shrimp, sliced mushrooms and water. Let it simmer. \n\n " +
    "7. Add the cooked vegetables and cream of mushroom. Cook for 5 minutes.  \n\n " +
    "8. Add salt to taste. \n\n ",
  },

  {
    categoryType: "Pasta/Noodles/Pancit",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/PASTA/ba lomi.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Batangas Lomi", // Name of the Recipe
    text: // Ingredients
    "- 1 cup pork strips, boiled \n " +
    "- 1/2 cup pork liver \n " +
    "- 1/2 cup kikiam \n " +
    "- ¼ cup garlic, minced \n " +
    "- 1/2 cup onion, thinly sliced \n " +
    "- 7 cups pork or chicken stock \n " +
    "- 1 lb. lomi noodle \n " +
    "- 5 Tbsp cornstarch dissolved in 3 Tbsp water \n " +
    "- 2 eggs, beaten \n " +
    "- 3 Tbsp fish sauce \n " +
    "- 2 Tbsp vegetable oil \n\n" +
    "- For Toppings: \n "+
    "- 1/2 cup kikiam (que-kiam) \n " +
    "- 12-15 pcs meatballs \n " +
    "- Toasted garlic \n\n " +

    "- How to Make Meat Balls: \n " +
    "- Ingredients: \n " +
    "- 1 cup ground pork \n " +
    "- 1 Tbsp garlic, minced \n " +
    "- ¼ cup onions, minced \n " +
    "- 1 egg, beaten \n " +
    "- 2 Tbsp flour \n " +
    "- 1/8 tsp pepper \n " +
    "- 1/2 tsp salt \n",
    
    text2: // Procedure 
    "Procedure Meat Balls \n "+
    "1. In a bowl, mix all ingredients until well blended. \n\n " +
    "2. Scoop 1 1/2 Tbsp and shape into a ball. Lay on greased plate to avoid sticking. \n\n " +
    "3. Deep fried in vegetable oil over medium low heat until brown. \n\n " +
    "4. Remove from oil and drain on paper towels. Set aside. \n\n " +

    "Procedure: \n\n " +
    "1. In a large saucepan, stir-fry 1/2 cup kikiam for toppings in oil for about 3 minutes. Transfer to a plate and set aside. \n\n " +
    "2. In the same saucepan, stir-fry liver until no more red color is showing. Transfer to a plate and set aside. \n\n " +
    "3. Saute pork until brown. Add garlic and saute until golden brown. \n\n " +
    "4. Add the other 1/2 cup kikiam and onion. Saute until onion is translucent. \n\n " +
    "5. Add the stock and fish sauce. Bring to a boil. \n\n ",
  },

  {
    categoryType: "Pasta/Noodles/Pancit",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/PASTA/baked-macaroni.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Baked Macaroni", // Name of the Recipe
    text: // Ingredients
    "- 400g macaroni \n " +
    "- 400g minced beef \n " +
    "- 400g minced pork \n " +
    "- 6 large tomatoes, chopped \n " +
    "- 1 large white onion, chopped \n " +
    "- 1pc. green capsicum, chopped \n " +
    "- 4 cloves garlic, minced \n " +
    "- 1/2 cup tomato paste \n " +
    "- 1 1/2 cup beef stock \n " +
    "- 2 tbsp sugar \n " +
    "- 1/4 cup white vinegar \n " +
    "- 1/2 tsp cayenne \n " +
    "- freshly ground black pepper \n " +
    "- olive oil \n " +
    "- salt \n " +
    "- grated cheddar cheese \n ",
    
    
    text2: // Procedure 
    "1. Cook macaroni according to packet instructions, once cooked drain then set aside. \n\n " +
    "2. In a pan add olive oil then sauté garlic, onions and green capsicum. Cook for 3 minutes. \n\n " +
    "3. Add tomatoes and cook until tender. \n\n " +
    "4. Add beef and pork mince and cook until light brown in color. \n\n " +
    "5. Add beef stock, vinegar, tomato paste, sugar and cayenne. Simmer for 20 minutes. \n\n " +
    "6. Season with salt and pepper. \n\n " +
    "7. Combine together macaroni and meat sauce, mix it evenly then place on a casserole or baking dish. Top with grated cheddar cheese then bake in a 180C preheated oven for 20 minutes. \n\n " +
    "8. Remove from oven then let it cool before serving.\n\n ",
  },

  {
    categoryType: "Pasta/Noodles/Pancit",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/PASTA/carbonara.webp"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Carbonara", // Name of the Recipe
    text: // Ingredients
    "- 300g rasher bacon, roughly chopped \n " +
    "- 250ml cream \n " +
    "- 1/2 cup water \n " +
    "- 3 cups sliced button mushrooms \n " +
    "- 3 eggs, beaten \n " +
    "- grated parmesan \n " +
    "- 4 cloves garlic, minced \n " +
    "- 1 small white onion, finely chopped \n " +
    "- olive oil \n " +
    "- freshly ground black pepper \n " +
    "- fettuccini or spaghetti noodles \n ",
    
    
    text2: // Procedure 
    "1. Cook pasta less 2 minutes according to packet instructions. \n\n " +
    "2. In a pan add oil then fry bacon pieces until crispy. Remove everything from the pan including the oil, drain bacon then set aside. \n\n " +
    "3. Add some bacon oil back to the pan then sauté garlic and onions, cook until onions are soft. \n\n " +
    "4. Add mushrooms and stir fry for two minutes, adding bacon oil if needed. \n\n " +
    "5. Turn heat on high then add cooked pasta, cream, water and bacon then bring it to a boil. \n\n " +
    "6. Turn off heat then add beaten eggs, lots of grated parmesan and lots of freshly ground black pepper. Mix well and let the residual heat cook the beaten eggs. \n\n " +
    "7. Serve immediately and top with grated parmesan cheese. \n\n ",
  },

  {
    categoryType: "Pasta/Noodles/Pancit",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/PASTA/Cheesy Pumpkin Pasta.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Cheesy Pumpkin Pasta", // Name of the Recipe
    text: // Ingredients
    "- 300 grams uncooked whole wheat pasta (we used fusilli) \n " +
    "- 2 cups non-fat milk \n " +
    "- 2 cups diced pumpkin \n " +
    "- 1 cup grated low-fat Cheddar cheese \n "+
    "- salt, pepper, and nutmeg to season \n " +
    "- grated Parmesan \n ",
    
    
    text2: // Procedure 
    "1. Cook whole wheat pasta according to package directions. \n\n " +
    "2. In a saucepan, combine milk and pumpkin. Bring to a boil and simmer until vegetables are tender. \n\n " +
    "3. Mash vegetables using a fork and pass through a sieve. Add Cheddar cheese; stir over low heat until cheese has melted and sauce has thickened. Adjust seasoning with salt, pepper, and nutmeg. \n\n " +
    "4. Transfer to individual serving bowls and dust with grated Parmesan cheese just before serving, if desired.\n\n ",
  },

  {
    categoryType: "Pasta/Noodles/Pancit",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/PASTA/fcp.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Four Cheese Penne", // Name of the Recipe
    text: // Ingredients
    "- 1/2 kilo Penne Pasta (cooked according to packaging procedure) \n " +
    "- 1 cup Kraft quick melt cheese(grated) \n " +
    "- 1/2 cup mozzarella cheese (grated) \n " +
    "- 1/2 cup Parmesan Cheese (grated) \n " +
    "- 1 cup cheddar Cheese (grated) \n " +
    "- 1 1/2 cup evaporated or fresh milk \n " +
    "- 1/2 cup diced sweet ham \n " +
    "- 2 tablespoons butter \n " +
    "- Salt and pepper to taste \n ",
    
    
    text2: // Procedure 
    "1. After cooking the pasta drain and place it in a pan then put the butter, mozzarella cheese, quick melt cheese, cheddar cheese and milk then cook over medium heat, stirring constantly, once simmering adjust the heat to low, then simmer for few minutes until all the cheese are melted and well blended. \n\n " +
    "2. Add the diced sweet ham, salt and pepper to taste then simmer until done. \n\n " +
    "3. Sprinkle with Parmesan cheese then serve or bake in a pre-heated oven at 180º for 15 minutes until the top is golden and crispy. Serve hot.\n\n ",
  },

  {
    categoryType: "Pasta/Noodles/Pancit",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/PASTA/Fusilli with Tomato Sauce.jpeg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Fusilli with Tomato Sauce", // Name of the Recipe
    text: // Ingredients
    "- 1/2 kilo fusilli (cooked according to its packaging procedure) \n " +
    "- 1/4 kilo ground beef \n " +
    "- 3 cloves garlic \n " +
    "- 1 onion \n " +
    "- 1/2 cup sliced sweet ham \n " +
    "- 3 cups tomato sauce \n " +
    "- 1 1/2 tablespoons sugar \n " +
    "- salt and pepper to taste \n " +
    "- 1/2 cup Nestle Cream or all-purpose cream \n " +
    "- 1/2 cup grated cheese \n ",
    
    
    text2: // Procedure 
    "1. Sauté the garlic and onion then add the ground beef and simmer for 5 minutes over medium heat. \n\n " +
    "2. Add the tomato sauce, sugar, salt and pepper then simmer for 3 minutes, add the cheese and ham then simmer for 2 minutes. \n\n " +
    "3. Add the Nestle cream and simmer for a minute then add the fusilli and mix well. Put in a serving plate and top with grated cheese before serving. \n\n ",
  },

  {
    categoryType: "Desert/Salad",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/DESERT/avocado icecandy.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Avocado Ice Candy ", // Name of the Recipe
    text: // Ingredients
    "- 1piece medium size avocado \n " +
    "- 6 cups water \n " +
    "- 1 cup fresh or evaporated milk \n " +
    "- 1 cup condensed milk \n " +
    "- 1 1/2 cup sugar or to taste \n " +
    "- 50 ice candy wrappers\n ",
    
    
    text2: // Procedure 
    "1. In a blender put the water, sugar and avocado then blend well until smooth. \n\n " +
    "2. Put in a pitcher and add the milks and mix well, use a funnel then fill the ice candy wrapper with the mixture and tie the end of the plastic tightly. \n\n " +
    "3. Freeze until frozen, then serve. \n\n ",
  },

  {
    categoryType: "Desert/Salad",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/DESERT/avocado-shake.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Avocado Shake ", // Name of the Recipe
    text: // Ingredients
    "- 3 medium sized avocadoes \n " +
    "- 24 ice cubes \n " +
    "- 1 cup condensed milk \n " +
    "- 1/2 cup full cream milk \n ",
    
    
    text2: // Procedure 
    "1. I. Place all ingredients in a blender, blend until completely smooth. \n\n " +
    "2. Place in glass, serve and consume immediately. \n\n ",
  },

  {
    categoryType: "Desert/Salad",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/DESERT/banana chips.jfif"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Banana Chips ", // Name of the Recipe
    text: // Ingredients
    "- 5 pcs firm bananas \n " +
    "- 1/4 tsp turmeric powder \n " +
    "- 3 cups ice water \n  " +
    "- Oil \n " +
    "- 2 tbsp salt \n " +
    "- 1/2 cup water \n " +
    "- 1/2 cup white sugar \n ",
    
    
    text2: // Procedure 
    "1. Add 1 tbsp salt and turmeric into the ice water. \n\n " +
    "2. Peel banana and slice it using a mandolin, place sliced bananas in the ice water mixture. \n\n " +
    "3. Keep bananas in water for 10 minutes then drain. \n\n " +
    "4. Lay bananas in a heavy-duty paper towel to remove excess water. \n\n " +
    "5. Prepare oil for deep frying. \n\n " +
    "6. Prepare salt water by mixing 1 tbsp of salt with 1 tbsp of water.  \n\n " +
    "7. Deep fry the bananas until crisp. Place only few slices at a time to avoid overcrowding. Once bananas are nearly done pour salt water into the oil (warning this will splatter). \n\n " +
    "8. Remove the bananas and drain excess oil. Set aside in a heavy-duty paper towel to remove excess oil. \n\n " +
    "9. In a sauce pan mix together the syrup ingredients then let it boil, simmer until it thickens around 2/3 of the original volume. \n\n " +
    "10. Remove syrup from heat then dip banana chip sin the syrup. Place chips in a wire rack to drain excess liquid. Set aside and let it dry. \n\n " +
    "11. When it is totally dried store in an airtight container. \n\n ",
  },

  {
    categoryType: "Desert/Salad",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/DESERT/banana-apple-and-cranberry-loaf.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Banana Apple and Cranberry Loaf ", // Name of the Recipe
    text: // Ingredients
    "- 1 1/2 cups flour \n " + 
    "- 1/2 tsp baking soda \n " +
    "- 1 tsp baking powder \n " +
    "- 1/4 tsp salt \n " +
    "- 3/4 cup sugar \n " +
    "- 2 eggs \n " +
    "- 1/2 cup vegetable oil \n " +
    "- 4 tbsp milk \n " +
    "- 1 tsp vanilla \n " +
    "- 1 cup dried cranberry \n " +
    "- 1 apple, grated \n " +
    "- 2 large bananas \n " +
    "- 1 tsp cinnamon \n ",
    
    
    text2: // Procedure 
    "1. In a mixing bowl, combined flour, baking powder, baking soda, salt and sugar. Mix well and set it aside. \n\n " +
    "2. In another mixing bowl, combined eggs, milk, oil, vanilla, grated apple and mashed bananas. Mix it well. \n\n " +
    "3. Add in the dry ingredients into the egg mixture. Mix until combined. \n\n " +
    "4. Lastly add in dried cranberries. \n\n " +
    "5. Mix well and pour it into a greased baking pan. Place in a 180C preheated oven and bake for 50 minutes or until golden brown. \n\n ",
  },

  {
    categoryType: "Desert/Salad",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/DESERT/banana-cue.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Banana Que ", // Name of the Recipe
    text: // Ingredients
    "- 	16 pcs. semi ripe or ripe Saba banana variety \n " +
    "-	1/4 cup brown sugar \n " +
    "-	2 cups Vegetable cooking oil \n ",
    
    
    text2: // Procedure 
    "1. In a large wok at high flame heat cooking oil, when it is smoking hot, drop the bananas and fry for about 2 minutes or until they start to slightly brown. \n\n " +
    "2. Sprinkle the brown sugar and let it stand without stirring. When the sugar starts to caramelize, start stirring the bananas to have it coated with caramelized sugar. \n\n " +
    "3. Continue frying, stirring several times to have the bananas fully coated with caramelized sugar. Turn the heat off once the bananas are cook through, do not overcook. \n\n " +
    "4. Drain in Fry Skimmer Strainer or colander or deep bowl with paper towel to remove excess oil. \n\n " +
    "5. Skewer two bananas in a bamboo stick while they slightly cool down. Do the same for the rest of the bananas. Serve.\n\n ",
  },

  {
    categoryType: "Desert/Salad",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/DESERT/Beef Tacos.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Beef Tacos ", // Name of the Recipe
    text: // Ingredients
    "- 500g lean beef mince \n " +
    "- 1/2 cup chopped onions \n " +
    "- 1 cup chopped lettuce \n " +
    "- 3 large tomatoes, seeded and chopped \n " +
    "- 1/2 cup cheddar cheese, grated \n " +
    "- 4 cloves garlic, minced \n " +
    "- 1 tbsp onion powder \n " +
    "- 1 tsp dried oregano \n "+
    "- 1 tsp cumin \n "+
    "- 1/2 tsp paprika \n " +
    "- 1 tsp cayenne pepper \n " +
    "- 1/2 cup beef stock \n " +
    "- Salt \n " +
    "- freshly ground black pepper \n " +
    "- taco shells \n " +
    "- oil \n ",
    
    
    text2: // Procedure 
    "1. In a pan add oil then sauté garlic until golden brown. \n\n " +
    "2. Add minced beef, oregano, cumin, paprika, powdered onion and cayenne pepper. Mix well until beef mince is completely separated to each other. \n\n " +
    "3. Add beef stock then cook beef until liquid dries out and beef is brown in color. Season with salt and freshly ground black pepper. \n\n " +
    "4. Remove from pan, place in taco shells then garnish with tomatoes, lettuce, onion and cheddar cheese.\n\n ",
  },

  {
    categoryType: "Desert/Salad",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/DESERT/biko-top-view.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Biko ", // Name of the Recipe
    text: // Ingredients
    "- 2 cups malagkit (sticky rice) \n " +
    "- 1 cup brown sugar \n " +
    "- 3 1/2 cups diluted coconut milk \n " +
    "- 1/8 lb. butter \n\n " +
    "- Topping: \n " +
    "- 1 can (15 oz.) condensed milk \n " +
    "- 3/4 cups rich coconut milk \n " +
    "- 2 to 3 tbsp. flour for quick thickening  \n ",
    
    
    text2: // Procedure 
    "1. Grate and squeeze out milk from 2 coconuts. Save 3/4 cup of the first milk squeezed out (rich milk) for topping. \n\n " +
    "2. Dilute the rest of the coconut milk to make 3 1/2 cups. Or use 1 can (12 ounces) frozen coconut milk, saving 3/4 cup of the thick milk for topping and diluting the rest to make 3 1/2 cups. \n\n " +
    "3. Boil rice and coconut milk in a heavy pot stirring constantly to keep from burning (about 15 to 20 minutes). When the rice is done and almost dry, lower the heat and add the sugar and butter. \n\n " +
    "4. Mix well and set aside. \n\n " +
    "5. Scoop the cooked biko and place it in a baking dish or Bilao then flatten the surface. \n\n " +
    "6. To make latik or topping: \n\n " +
    "7. Combine all topping ingredients in a heavy saucepan and cook over low heat stirring constantly until thick (about 15 minutes) or brown. \n\n " +
    "8. then pour topping over rice mixture. served while hot.\n\n ",
  },

  {
    categoryType: "Desert/Salad",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/DESERT/binatog.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Binatog", // Name of the Recipe
    text: // Ingredients
    "- 3 cups white hominy, removed from cobs \n " +
    "- 1 teaspoon salt \n " +
    "- 1 cup fresh shredded coconut \n " +
    "- salt or sugar to taste \n ",
    
    
    text2: // Procedure 
    "1. In a pot, pour water, hominy and salt. \n\n " +
    "2. Bring to boil for 15 minutes or until hominy pop then drain and transfer to serving bowl. \n\n " +
    "3. Top with shredded coconut then sprinkle with salt or sugar to taste. \n\n ",
  },

  {
    categoryType: "Desert/Salad",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/DESERT/binagol.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Binagol", // Name of the Recipe
    text: // Ingredients
    "- 1 Cup taro root \n " +
    "- 1 Cup Thick coconut milk \n " +
    "- 3/4 Cup brown sugar \n " +
    "- 1/2 Can condensed milk \n " +
    "- 4 Egg yolks \n " +
    "- Banana leaves \n " +
    "- 4 Coconut shells \n " +
    "- Cooking twine \n ",
    
    
    text2: // Procedure 
    "1. In a non-stick pan, combine shredded taro root, coconut milk and brown sugar. Cook over medium heat for about 6 minutes while stirring constantly. \n\n " +
    "2. Reduce heat to low and cook for another 10 minutes. Add condensed milk and cook, stirring continuously for another 20 minutes. \n\n " +
    "3. Fill each coconut shell with mixture, make a well in the center and drop raw egg yolk. Cover the top with mixture and spread smoothly. \n\n " +
    "4. Layer two pieces of banana leaves to cover the filled coconut shells and tie securely. Place in a steamer, cover and cook for another half an hour.\n\n ",
  },

  {
    categoryType: "Desert/Salad",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/DESERT/cassava suman.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Cassava Suman", // Name of the Recipe
    text: // Ingredients
    "- 3 cups or 1/2-kilo finely grated cassava \n " +
    "- 1 cup finely grated coconut \n " +
    "- 1 cup white sugar \n " +
    "- 15 pieces of banana leaves cut into 7 x 10 inches (blanched)  \n ",
    
    
    text2: // Procedure 
    "1. Combine grated cassava, grated coconut and sugar. \n\n "+
    "2. Place measured amounts of cassava mixture on each piece of banana leaf. \n\n " +
    "3. Roll Banana leaf, enclosing filling and fold both ends. \n\n " +
    "4. Keep each suman 1.25 cm thick, 4 cm wide and 12.5 cm long. \n\n " +
    "5. Tie the suman in pairs loosely and keep them in shape. \n\n " +
    "6. Arrange on steamer rack in a staggered pile. Steam for 30 minutes, counting time when live steam starts to form. \n\n " +
    "7. Keep the steamer well-supplied with water to prevent drying out. Serve hot.\n\n ",
  },

  {
    categoryType: "Desert/Salad",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/DESERT/fruit gelatin.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Fruit Gelatin", // Name of the Recipe
    text: // Ingredients
    "- 3 cups water \n " +
    "- 2 long uncooked gelatin bar (or 2 sachet of gelatin powder) \n " +
    "- 2 cups sugar (just add according to taste) \n " +
    "- 1 can condensed milk \n " +
    "- 1 can evaporated milk (370 ml) \n " +
    "- 1 can fruit cocktail \n ",
    
    
    text2: // Procedure 
    "1. Pour the water in a bowl, let it boil. \n\n " +
    "2. Add the gelatin in a boiling water. mix well until gelatin is fully dissolved and melt. \n\n " +
    "3. Then add sugar, condensed milk, evaporated milk and Simmer for at least 3-5 minutes. \n\n " +
    "4. Mix well. Slowly pour the mixture into the mold filled with fruit cocktail. (use strainer to avoid bubbles) \n\n " +
    "5. Refrigerate for 2 hours or overnight. \n\n ",
  },

  {
    categoryType: "Desert/Salad",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/DESERT/gelatin salad.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Gelatin Salad", // Name of the Recipe
    text: // Ingredients
    "- 2 sachets different colored unflavored gelatin (35g each) \n " +
    "- 1 can nestle cream or light cream \n " +
    "- 1 cup condense milk  \n ",
    
    
    text2: // Procedure 
    "1. Prepare the gelatin individually according to its packaging procedure, refrigerate then diced it all. \n\n " +
    "2. Pour in the milk and all-purpose cream \n\n " +
    "3. Refrigerate before serving. \n\n ",
  },

  {
    categoryType: "Desert/Salad",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/DESERT/Gulaman with Pineapples and Raisins.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Gulaman with Pineapples and Raisins", // Name of the Recipe
    text: // Ingredients
    "- 2 bars red gulaman \n " +
    "- 4 cups water \n " +
    "- 1 large evaporated milk \n " +
    "- 1 large can pineapple, cubed reserve liquid \n " +
    "- 1/4 cup raisins \n " +
    "- 1 1/2 cup sugar \n " +
    "- 1 tsp vanilla extract \n ",
    
    
    text2: // Procedure 
    "1. In a large sauce pan tear gulaman into small pieces add water, reserved liquid from pineapple and sugar then bring to a boil then simmer until gulaman flakes are totally dissolved. \n\n " +
    "2. Remove from heat then add evaporated milk and vanilla extract. Place in a container or jelly mold then set aside for 5 minutes to cool down, at this stage liquid will be a bit thicker and start to set. \n\n " +
    "3. Slowly add pineapples and raisins then place in the refrigerator. \n\n " +
    "4. Remove from mold then serve chilled. \n\n ",
  },

  {
    categoryType: "Desert/Salad",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/DESERT/Maja Blanca.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Corn Maja", // Name of the Recipe
    text: // Ingredients
    "- 1 can cream corn \n " +
    "- 1 can evaporated milk \n " +
    "- 1 can coconut milk \n " +
    "- 1 1/2 cups whole milk \n " +
    "- 1 1/4 cups cornstarch \n " +
    "- 1/2 cup sugar (optional) - I put optional because I don't like it too sweet. \n ",
    
    
    text2: // Procedure 
    "1. Combine all ingredients in a pot. Make sure every ingredient is well combined. \n\n " +
    "2. Turn on to low heat. \n\n " +
    "3. Continue stirring until it becomes thick and when it comes to a point that it is hard to mix or stir. \n\n " +
    "4. Transfer to a serving tray then top with grated cheese. \n\n " +
    "5. Let the temperature cool down. Refrigerate. Ready to serve. Enjoy! \n\n ",
  },

  {
    categoryType: "Breads/Pastry/Drinks",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/BREADPASTRYDRINKS/AM.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Adobong Mani", // Name of the Recipe
    text: // Ingredients
    "- 1 kg raw peanuts, shelled \n " +
    "- 2 whole garlic \n " +
    "- fine salt \n " +
    "- 2 cups cooking oil \n ",
    
    
    text2: // Procedure 
    "1. Remove the outer thin skin of the garlic, separate them into cloves leaving the inner skin intact. Using a mortar and pestle, pound the garlic cloves. Set then aside. \n\n " +
    "2. In a wok add the oil then once how deep fry the garlic pieces in medium heat until golden brown and crispy. Remove garlic then set them aside. Put heat to low then add the peanuts, fry for 15 minutes or until then light brown peanut skin turns brown (not dark brown) while stirring occasionally. \n\n " +
    "3. Using a slotted spoon, remove the peanuts the place then in a colander to drain excess oil. Transfer to a large bowl then season with salt. \n\n ",
  },

  {
    categoryType: "Breads/Pastry/Drinks",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/BREADPASTRYDRINKS/bibingka.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Bibingka", // Name of the Recipe
    text: // Ingredients
    "- 2 cups all-purpose flour \n " +
    "- 2 tsp baking powder \n " +
    "- 1 tsp salt \n " +
    "- 3 eggs \n " +
    "- 1 cup sugar \n " +
    "-  1 1/3 cup NESTLE Fresh Milk \n " +
    "- ¼ cup butter \n " +
    "- ¼ cup sugar \n " +
    "- 1/2 cup grated cheese \n " +
    "- 2 pcs salted eggs, sliced \n ",
    
    
    text2: // Procedure 
    "1. Preheat oven to 350ÂºF. Grease and line bottom of 2 8-inch layer baking pan with banana leaves or wax paper. Set aside. \n\n " +
    "2. Sift flour, baking powder and salt together. Set aside. \n\n " +
    "3. Beat the eggs until light and creamy. Gradually add sugar, beating well after each addition. \n\n " +
    "4. Add flour mixture alternately with NESTLE Fresh Milk into the egg. Beat to blend thoroughly. \n\n " +
    "5. Pour mixture in lined pans. \n\n " +
    "6. Bake for 10 minutes, then remove from the oven. \n\n " +
    "7. Spread butter on top then sprinkle with sugar and grated cheese. \n\n " +
    "8. Decorate with salted egg slices and bake for 10 to 15 minutes more. \n\n ",
  },

  {
    categoryType: "Breads/Pastry/Drinks",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/BREADPASTRYDRINKS/brazo.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Brazo de Mercedes", // Name of the Recipe
    text: // Ingredients
    "- 14 ounces condensed milk \n " +
    "- 1 cup sugar \n " +
    "- 2 tablespoons unsalted butter \n " +
    "- 1 tablespoon vanilla extract \n " +
    "- 8 egg yolks \n " +
    "- 1/4 cup finely ground and toasted cashew nuts \n\n " +
    "- Meringue: \n " +
    "- 10 egg whites \n " +
    "- 1/2 teaspoon cream of tartar \n " +
    "- 1 cup sugar \n " +
    "- 1 teaspoon vanilla extract \n ",
    
    
    text2: // Procedure 
    "1. In a saucepan, simmer milk over low heat until reduced to 2 cups. Add sugar, butter, and vanilla extract, stirring constantly. Remove from heat. \n\n " +
    "2. Beat egg yolks in mixing bowl. Add a little of the milk to the egg yolks, stir, then gradually add mixture by spoonful’s back into the saucepan, beating constantly. Stir well to avoid curdling. \n\n " +
    "3. Add cashew nuts and continue cooking entire mixture over low heat, stirring constantly, until mixture has the consistency of a paste. Set aside. \n\n " +
    "Meringue: \n\n " +
    "1. Preheat oven to 400 degrees. Combine eggs and Cream of Tartar then Beat egg whites until stiff. Gradually add 1 cup sugar, beating continuously. Stir in vanilla. \n\n " +
    "2. Line a large cookie sheet with parchment paper greased with butter and spread meringue on top. Bake until brown. \n\n " +
    "3. Spread filling evenly on top of meringue and roll into a log. \n\n " +
    "4. Brush with butter and brown again in oven. \n\n ",
  },

  {
    categoryType: "Breads/Pastry/Drinks",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/BREADPASTRYDRINKS/Mixed-Berry-Banana-Smoothie-SQ.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Berry Banana Smoothie", // Name of the Recipe
    text: // Ingredients
    "- 2 pcs banana, sliced or smashed \n " +
    "- 8 pcs strawberries, frozen \n " +
    "- 8 pcs raspberry, frozen \n " +
    "- 8 pcs ice cubes, crushed \n " +
    "- 1 cup vanilla ice cream (or yoghurt) \n " +
    "- 1 cup milk \n ",
    
    
    text2: // Procedure 
    "1. Place all ingredients in a blender then blend until smooth. \n\n ",
  },

  {
    categoryType: "Breads/Pastry/Drinks",
    imageIsUri: false,
    //videoIsUri: false
    image: require("../assets/BREADPASTRYDRINKS/Buchi.jpg"),
    //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
    title: "Buchi", // Name of the Recipe
    text: // Ingredients
    "- 1/3 cup cornstarch \n " +
    "- 1 tbsp. all-purpose flour \n " +
    "- pinch salt \n " +
    "- 100 g. langka (fresh or preserved), cut into cubes \n " +
    "- 1 cup Evaporated Milk \n " +
    "- 3 pieces egg yolks, slightly beaten \n " +
    "- 1/4 cup butter \n " +
    "- 1/2 tsp. vanilla \n\n " +
    "- Dough: \n " +
    "- 1/2 k. galapong \n " +
    "- 1/2 cup sesame seeds \n " +
    "- cooking oil, for deep-frying \n ",
    
    
    text2: // Procedure 
    "1. Combine first six ingredients in a heavy saucepan. Cook stirring continuously over low fire. \n\n " +
    "2. When thick, remove from fire and stir in egg yolks, butter and vanilla. Cook for about 2 min. more. \n\n " +
    "3. Cool then set aside in a chiller. \n\n " +
    "4. Knead galapong forming a cylinder and cut into 20 equal portions. \n\n " +
    "5. Flatten into patties and put about 1 tbsp. of chilled filling in the center. \n\n " +
    "6. Gather edges to the center, sealing well. \n\n " +
    "7. Roll in sesame seeds and deep-fry in hot oil. \n\n " +
    "8. Drain in paper towels and serve right away. \n\n ",
  },

  {
  categoryType: "Breads/Pastry/Drinks",
  imageIsUri: false,
  //videoIsUri: false
  image: require("../assets/BREADPASTRYDRINKS/Bread Pudding with Raisins and Walnuts.jpg"),
  //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
  title: "Bread Pudding with Raisins and Walnuts", // Name of the Recipe
  text: // Ingredients
  "- 5 cups bread, cut into small cubes \n " +
  "- 2 cans evaporated milk \n " +
  "- 1 cup sugar \n " +
  "- 2 eggs, beaten \n " +
  "- 1/2 cup butter, melted \n " +
  "- 1 tsp. vanilla \n " +
  "- 3/4 cup raisins \n " +
  "- 3/4 cup walnuts, chopped \n ",
  
  
  text2: // Procedure 
  "1. In a big bowl, soak the bread cubes in milk for at least 30 minutes. \n\n " +
  "2. Pre-heat your oven to 350 degrees F. Add all the other ingredients to the soaked bread. Mix well. No need to use an electric mixer for this. A whisk will do. \n\n " +
  "3. Pour into slightly greased (loaf or rectangular) pan. I used one 4'x8' loaf pan and one 7'x11' rectangular pan. Bake for 35 minutes or until firm. \n\n " +
  "4. Remove from oven. Allow to completely cool down. Slice and serve with your favorite drink. My girls love topping it with vanilla ice cream. \n\n ",
},

{
  categoryType: "Breads/Pastry/Drinks",
  imageIsUri: false,
  //videoIsUri: false
  image: require("../assets/BREADPASTRYDRINKS/Buko Pandan Juice.jpg"),
  //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
  title: "Buko Pandan Juice", // Name of the Recipe
  text: // Ingredients
  "- 1 cup unflavored gelatin \n " +
  "- 5 pcs pandan leaves \n " +
  "- 4 cups buko water \n " +
  "- 1 cup Fresh Milk \n " +
  "- 1 cup condensed milk \n " +
  "- 1 cup buko, grated \n " +
  "- toasted pinipig, as desired  \n ",
  
  
  text2: // Procedure 
  "1. Cook unflavored gelatin as directed in the pack. Add the pandan leaves. Coo When gelatin has cooled down, cut into cubes. \n\n " +
  "2. Mix the buko water, Fresh Milk, and condensed milk well. \n\n " +
  "3. Add the grated buko and prepared gelatin. \n\n " +
  "4. Serve best with ice cubes, coconut cream, and toasted pinipig. \n\n " ,
},

{
  categoryType: "Breads/Pastry/Drinks",
  imageIsUri: false,
  //videoIsUri: false
  image: require("../assets/BREADPASTRYDRINKS/Buko-Pie-Wide.jpg"),
  //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
  title: "Buko Pie", // Name of the Recipe
  text: // Ingredients
  "- Meat from 1 buko (young coconut) \n " +
  "- 1 (396 g) can condensed milk \n " +
  "- 2 (354 ml) cans evaporated milk \n " +
  "- 4 eggs \n " +
  "- 1/4 cup sugar \n " +
  "- pinch of salt \n ",
  
  
  text2: // Procedure 
  "1. Beat eggs well, then add remaining ingredients. Continue mixing until all ingredients are well blended. \n\n " +
  "2. Pour into a round 3-liter glass baking dish. Place the dish in a large baking pan and fill with water up to halfway up the sides. Place carefully in the oven. \n\n " +
  "3. Bake at 180 C for 60 minutes. Insert a toothpick to test for doneness. It should come out clean. Let cool before serving. \n\n " ,
},

{
  categoryType: "Breads/Pastry/Drinks",
  imageIsUri: false,
  //videoIsUri: false
  image: require("../assets/BREADPASTRYDRINKS/Cheeseburger-Pizza.jpg"),
  //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
  title: "Cheeseburger Pizza", // Name of the Recipe
  text: // Ingredients
  "- 1/4 cup catsup \n " +
  "- 1/4 cup tomato puree \n " +
  "- 1 clove garlic, minced \n " +
  "- 8 pcs basil leaves, chopped \n " +
  "- 1/2 tsp dried oregano \n " +
  "- salt \n " +
  "- freshly ground black pepper \n " +
  "- Ingredients (Toppings) \n " +
  "- ground beef \n " +
  "- processed sliced cheese (the same thing they use in burgers), sliced into smaller pieces \n " +
  "- mozzarella \n " +
  "- parmesan \n " +
  "- salt \n " +
  "- freshly ground black pepper \n " +
  "- olive oil \n ",
  
  
  text2: // Procedure 
  "1. In a bowl mix together all Pizza Sauce ingredients. \n\n " +
  "2. Prepare the dough then spread 1-2 tbsp of olive oil on top. \n\n " +
  "3. Prepare your mini meat balls by seasoning ground beef with salt and pepper and shaping them into small balls. \n\n " +
  "4. Spread the pizza sauce, top with mini meatballs, mozzarella, sliced cheese and parmesan. Let it rest for 15 minutes. \n\n " +
  "5. Place in a preheated oven at 230C and cook for 20 to 25 minutes. \n\n " ,
},

{
  categoryType: "Breads/Pastry/Drinks",
  imageIsUri: false,
  //videoIsUri: false
  image: require("../assets/BREADPASTRYDRINKS/Palitaw-Recipe.jpg"),
  //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
  title: "Palitaw", // Name of the Recipe
  text: // Ingredients
  "- 1 cup Glutinous rice flour (Malagkit Rice) \n " +
  "- 1/2 cup of water \n " +
  "- 1/2 kilo Brown Sugar \n " +
  "- Fresh grated coconut \n " +
  "-Toasted sesame seeds \n ",
  
  
  text2: // Procedure 
  "1. Mix until the flour and water the two come together to form a pliable ball of dough. \n\n " +
  "2. Take a heaping tablespoon full of the dough and roll it into a ball, then flatten it into a pad shape with the palm of your hand. \n\n " +
  "3. Poach the Palitaw in simmering water until they begin to float (about 30 seconds to 1 minute). \n\n " +
  "4. Allow the pads to dry out and cool down a little so that they don’t turn the sugar into a syrup when you roll it around in it. \n\n " +
  "5. Sprinkle with grated coconut and the sesame seeds. \n\n " ,
},

{
  categoryType: "Egg/Rice and other Recipes",
  imageIsUri: false,
  //videoIsUri: false
  image: require("../assets/EGG, RICE and OTHER RECIPES/Adobong balut.jpg"),
  //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
  title: "Adobong Balut", // Name of the Recipe
  text: // Ingredients
  "- 1 clove of finely minced garlic \n " +
  "- 2 tbsps. of vinegar \n " +
  "- 3 tbsps. of soy sauce \n " +
  "- freshly ground black pepper \n ",
  
  
  text2: // Procedure 
  "1. Simmer the minced garlic, vinegar and soy sauce in a pan for about a minute — just long enough to coax the flavors out. \n\n " +
  "2. Make the pan just big enough to contain the balut in a single layer. That way, you contain the sauce so that most of it is in contact with the eggs. Add the shelled balut, including the juices, add the pepper, then swirl the pan so that the eggs are coated with the sauce. DO NOT stir the contents of the pan because you really don’t want the eggs to break up into yolk, white and duck. So, swirl. Simmer for another minute. Swirl once more. Turn off the heat. Let sit for about 10 minutes. Give the eggs a final swirl and, for the ultimate experience, serve with garlic fried rice.\n\n " ,
},

{
  categoryType: "Egg/Rice and other Recipes",
  imageIsUri: false,
  //videoIsUri: false
  image: require("../assets/EGG, RICE and OTHER RECIPES/Adobong Kambing.jpg"),
  //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
  title: "Adobong Kambing", // Name of the Recipe
  text: // Ingredients
  "- 1 kilo kambing spareribs (Goat’s Spare ribs), cut into serving pieces, bones intact \n " +
  "- cooking oil \n " +
  "- 2 thumb size ginger, sliced \n " +
  "- 1/2 head garlic, crushed \n " +
  "- 1 large onion, sliced \n " +
  "- 1 tsp. peppercorns \n " +
  "- 2 stalk lemon grass \n " +
  "- 3 bay leaf \n " +
  "- 1/2 c. soy sauce \n " +
  "- 3-5 pcs. green hot chilli \n " +
  "- 3/4 c. vinegar \n " +
  "- salt and pepper \n ",
  
  
  text2: // Procedure 
  "1. Marinate kambing in 1/2 c. vinegar (this will remove the pungent odor of the meat)\n\n " +
  "2. 1 tsp. salt and 1/2 tsp. pepper for 15 to 30 minutes before cooking. \n\n " +
  "3. Drain and discard marinade. \n\n " +
  "4. In a frying pan fry kambing in batches until color changes to golden brown and start to sizzle. \n\n " +
  "5. In a saucepan put in fried kambing, pour in 2-3 c. of water, 1/4 c. vinegar and soy sauce. \n\n " +
  "6. Add lemon grass, ginger, onion, garlic, peppercorns, bay leaf and chili. \n\n " +
  "7. Bring to a boil and simmer in medium heat for 15-30 minutes or until tender and liquid is reduced to almost dry. \n\n " +
  "8. Serve hot with a lot of rice. \n\n " ,
},

{
  categoryType: "Egg/Rice and other Recipes",
  imageIsUri: false,
  //videoIsUri: false
  image: require("../assets/EGG, RICE and OTHER RECIPES/Arroz Caldo.jpg"),
  //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
  title: "Arroz Caldo", // Name of the Recipe
  text: // Ingredients
  "- 1 kilo Choice Cuts Chicken (Thigh part), Skin removed \n " +
  "- 5 pcs hard boiled eggs \n " +
  "- 2 cups cooked rice \n " +
  "- 6 cups chicken broth (or 6 cups plain water if broth not available) \n " +
  "- 1 cup onion, minced \n " +
  "- 3 tbsp fish sauce \n " +
  "- 1 tsp garlic \n " +
  "- 1/2 tsp ground black pepper \n " +
  "- 1 cup scallions (red onions), minced \n " +
  "- 3 knobs ginger, julienned \n " +
  "- 2 pcs chicken cube (bouillon) [optional: if you don’t have the broth then you need this] \n " +
  "- 5 pcs kalamansi \n " +
  "-3 tbsp Canola cooking oil \n ",
  
  
  text2: // Procedure 
  "1. In a pot, heat the cooking oil then Crispy Fry the Chicken Skin, once crispy like chicharron set aside \n\n " +
  "2. Next sauté the garlic, onion, and ginger. Dash-in some ground black pepper. \n\n " +
  "3. Add the chicken and cook until outer layer color turns golden brown. \n\n " +
  "4. Then Add the fish sauce and the cooked rice then mix and cook for a few minutes \n\n " +
  "5. Now, pour in the water and bring to a boil (Add the chicken cube, stir until the cube melts) \n\n " +
  "6. Stir occasionally and simmer until the chicken is fully cooked (about 15 to 20 minutes) \n\n " +
  "7. Removed the Egg shells and put-in the hard-boiled eggs \n\n " +
  "8. Serve hot with Chicken Skin chicharron on top, garlic, minced scallions, and Kalamansi. \n\n " +
  "9. Share and Enjoy! \n\n " ,
},

{
  categoryType: "Egg/Rice and other Recipes",
  imageIsUri: false,
  //videoIsUri: false
  image: require("../assets/EGG, RICE and OTHER RECIPES/Balbacua2.jpg"),
  //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
  title: "Balbacua", // Name of the Recipe
  text: // Ingredients
  "- 1.5 kg ox tail (preferably with skin on) \n " +
  "- 4 pcs Cardaba bananas (Saba bananas) \n " +
  "- 1 large can bake beans / pork and beans \n " +
  "- 3 heaping tbsp peanut butter \n " +
  "- 2 tbsp tomato paste \n " +
  "- 2 tbsp black bean paste \n " +
  "- 2 cups beef stock \n " +
  "- 3 cups water \n " +
  "- 2 stalks baby leeks, sliced \n " +
  "- 2 onions, chopped \n " +
  "- 6 cloves garlic, minced \n " +
  "- fish sauce \n " +
  "- freshly ground black pepper \n " +
  "- chopped tomatoes or halved cherry tomatoes for garnishing \n ",
  
  
  text2: // Procedure 
  "1. In a large pot add oil then brown ox tail on all sides. Once browned remove ox tail then set it aside. \n\n " +
  "2. Add garlic and onions then sauté until onions are soft. \n\n " +
  "3. Pour the water, beef stock and add the ox tail back. Bring to a boil then simmer for 1.5 hours. \n\n " +
  "4. Add the Saba banana, leeks, peanut butter, tomato paste, black bean paste and tomato paste bring back to a boil then simmer for 30 minutes. \n\n " +
  "5. Season with fish sauce and freshly ground black pepper. \n\n " +
  "6. Remove from heat, garnish with chopped tomatoes then serve with rice. \n\n " ,
},

{
  categoryType: "Egg/Rice and other Recipes",
  imageIsUri: false,
  //videoIsUri: false
  image: require("../assets/EGG, RICE and OTHER RECIPES/Bringhi.jpg"),
  //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
  title: "Bringhi", // Name of the Recipe
  text: // Ingredients
  "- 1 pc. dressed chicken, about 1 kg. \n " +
  "- 5 cups coconut milk (extracted from 2 pcs. mature coconut) \n " +
  "- 4 cups malagkit rice \n " +
  "- 3 cloves garlic, crushed \n " +
  "- 1/4 cup cooking oil \n " +
  "- 1/4 cup patis \n " +
  "- 2 pcs. hard-boiled egg sliced \n " +
  "- 1 medium size onion, sliced \n " +
  "- 5 tbsps. yellow ginger root juice (dilaw) \n " +
  "- 1 medium size green pepper, roasted and peeled and cut into cubes \n " +
  "-Banana leaf wilted over burner (remove midrib) \n ",
  
  
  text2: // Procedure 
  "1. Split chicken into desired serving pieces (8-12) at the joints. Clean and wash thoroughly and drain. Set aside. \n\n " +
  "2. Add 3-4 cups hot water to grated coconut. Squeeze coconut with both hands until the milk is extracted little by little. Strain. Set aside. \n\n " +
  "3. Wash malagkit rice 3 times. Drain well. Set aside. \n\n " +
  "4. In a saucepan and over a strong flame, saute garlic and add onion and chicken. Cook until chicken is slightly brown. Add patis and ginger root juice. Add clean malagkit and cook for 10 minutes. \n\n " +
  "5. Prepare green pepper. Set aside. Peel yellow ginger, crush with mortar and pestle, squeeze, strain and extract yellow juice. \n\n " +
  "6. Add coconut milk to chicken mixture gradually. Stir. Cover. Cook until rice is almost done, adjusting the flame so as not to scorch the pan. \n\n " +
  "7. Prepare another heavy-duty container. Line the bottom with wilted banana leaf, transfer chicken/rice carefully to the layer of banana leaves. Cover rice/chicken/pepper with another layer of banana leaves, cover the cooking utensil and steam over a low flame until rice is done. \n\n " ,
},

{
  categoryType: "Egg/Rice and other Recipes",
  imageIsUri: false,
  //videoIsUri: false
  image: require("../assets/EGG, RICE and OTHER RECIPES/Chicken and Shrimp Omelets.jpeg"),
  //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
  title: "Chicken and Shrimp Omelets", // Name of the Recipe
  text: // Ingredients
  "- 6 large eggs \n " +
  "- 100 grams chicken breast (boiled and flaked) \n " +
  "- 100 grams shrimps (coarsely chopped) \n " +
  "- 1 onion (minced) \n " +
  "- salt and pepper to taste \n ",
  
  
  text2: // Procedure 
  "1. Sauté the onion, add the shrimps and chicken and continue to sauté for a minute then turn off the heat. \n\n " +
  "2. Beat the eggs then add salt and pepper. Heat a flat bottom pan and put half of the beaten eggs, when it is already half cooked put half of the sautéed chicken and shrimps mixture then fold the side and roll towards the other side to form a roll or simply fold both sides to meet at the center then continue cooking until done. Slice then serves.\n\n " ,
},

{
  categoryType: "Egg/Rice and other Recipes",
  imageIsUri: false,
  //videoIsUri: false
  image: require("../assets/EGG, RICE and OTHER RECIPES/Egg Sarciado.jpg"),
  //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
  title: "Egg Sarciado", // Name of the Recipe
  text: // Ingredients
  "- 7 pcs eggs \n " +
  "- 2 cloves garlic, crushed \n " +
  "- 1 pc small onion, chopped \n " +
  "- 1 pouch (115 g) DEL MONTE Filipino Style Tomato Sauce \n " +
  "- 1-1/2 cups water \n " +
  "- 1/2 pc chicken bouillon cube \n " +
  "- 100 grams potatoes, sliced \n " +
  "- 1/4 cup cooked/frozen green peas \n " +
  "- 1 pc small red bell pepper, cut into cubes \n ",
  
  
  text2: // Procedure 
  "1. COOK 6 pieces eggs until hard boiled. Cut each egg lengthwise into two. \n\n " +
  "2. Beat remaining egg. Set aside. \n\n " +
  "3. SAUTÃ garlic and onion in oil. Add chicken cube, DEL MONTE Tomato Sauce, water and potatoes. \n\n " +
  "4. Season with 1 tsp soy sauce, 1/4 tsp iodized fine salt (or Â¾ tsp iodized rock salt) and 1/8 tsp pepper. \n\n " +
  "5. Simmer for 10 minutes. \n\n " +
  "6. ADD green peas, bell peppers and beaten eggs. \n\n " +
  "7. Simmer while stirring for 2 minutes, or until cooked. Add boiled eggs. \n\n " ,
},

{
  categoryType: "Egg/Rice and other Recipes",
  imageIsUri: false,
  //videoIsUri: false
  image: require("../assets/EGG, RICE and OTHER RECIPES/Fried Rice.jpg"),
  //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
  title: "Fried Rice", // Name of the Recipe
  text: // Ingredients
  "- Pork adobo, divided or cut into small pieces \n " +
  "- cooking oil \n " +
  "- 2 eggs, beaten \n " +
  "- 4 cloves garlic, minced \n " +
  "- 1 pc chorizo/Chinese sausage, cubed \n " +
  "- 1/2 cup carrots, cubed \n " +
  "- 1/2 cup green peas \n " +
  "- 3 cups cooked white rice \n " +
  "- 1/2 tsp garlic salt \n " +
  "- green onions (optional) \n ",
  
  
  text2: // Procedure 
  "1. Heat a small amount of cooking oil in a wok. \n\n " +
  "2. Fry the beaten egg. Remove from pan and divide into small pieces. \n\n " +
  "3. Add a small amount of cooking oil and sauté the garlic. \n\n " +
  "4. Add the chorizo, carrots, and green peas. Cook for 2 minutes. \n\n " +
  "5. Add the rice and mix well. Cook for 3 minutes. \n\n " +
  "6. Add the pork adobo and garlic salt. Cook for few minutes. \n\n " +
  "7. Transfer to a serving plate. Enjoy! \n\n " ,
},

{
  categoryType: "Egg/Rice and other Recipes",
  imageIsUri: false,
  //videoIsUri: false
  image: require("../assets/EGG, RICE and OTHER RECIPES/Fresh Lumpia Wrapper.jpg"),
  //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
  title: "Lumpia Wrapper Crepe for Fresh Lumpia", // Name of the Recipe
  text: // Ingredients
  "- 1 cup All-purpose Flour \n " +
  "- 2 Eggs \n " +
  "- 3/4 cup Whole Milk \n " +
  "- 2 tablespoons Butter, melted \n " +
  "- pinch of Salt \n " +
  "- 1 1/2 cup Water \n " +
  "- 2 tablespoons Butter, melted, for brushing \n ",
  
  
  text2: // Procedure 
  "1. Using a hand mixer or a blender, mix all the ingredients except for the 2 tablespoons butter for brushing the pan. \n\n " +
  "2. Set the mix aside for an hour or so until there are no more bubbles. Heat up an 8-inch Teflon or non-stick pan to medium heat. \n\n " +
  "3. Brush the pan with some butter and take out from heat. Pour 1/3 cup batter and quickly swirl the pan to distribute the batter evenly and make a round crepe. \n\n " +
  "4. Put the pan back to the stove top and let cook, once the sides are coming off from the pan, turn the crepe over to cook the other side. Remove from pan. Repeat from Step 4 until you finish cooking all the batter. \n\n " ,
},

{
  categoryType: "Egg/Rice and other Recipes",
  imageIsUri: false,
  //videoIsUri: false
  image: require("../assets/EGG, RICE and OTHER RECIPES/Goto.jpg"),
  //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
  title: "Goto", // Name of the Recipe
  text: // Ingredients
  "- 1 cup rice \n " +
  "- 200 grams boiled and tender ox tripe (tuwalya ng baka) \n " +
  "- 1/4 cup ginger strips \n " +
  "- 1 onion \n " +
  "- 3 stalks spring onions \n " +
  "- salt and pepper to taste \n " +
  "- fish sauce (patis optional) \n " +
  "- 1 liter of water or more \n " +
  "- 1/4 cup toasted garlic \n ",
  
  
  text2: // Procedure 
  "1. Sauté the ginger and onion until brownish then add the pre-cooked ox tripe then simmer for few minutes. \n\n " +
  "2. Add the rice, fish sauce, salt and pepper then simmer for few minutes. \n\n " +
  "3. Add the water, then cover (stirring constantly so that the rice will not stick at the bottom of the pot). \n\n " +
  "4. Continue simmering until the rice is so tender making the porridge thick in texture. Add more water if necessary. \n\n " +
  "5. Serve it hot with minced spring onion and toasted garlic. \n\n " ,
},

{
  categoryType: "Egg/Rice and other Recipes",
  imageIsUri: false,
  //videoIsUri: false
  image: require("../assets/EGG, RICE and OTHER RECIPES/longsilog.jpg"),
  //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
  title: "Longsilog", // Name of the Recipe
  text: // Ingredients
  "- 4 Cups of left-over rice from the previous night \n " +
  "- 5 Links of longanisa sausage \n " +
  "- 1 Cup of water for cooking longanisa \n " +
  "- 3 Eggs \n " +
  "- 2 Cloves of garlic \n " +
  "- 1/2 Tbs. Salt \n " +
  "- ¼ Tbs. Ground black pepper \n " +
  "- ¼ Tbs. MSG \n " +
  "- Oil for frying \n ",
  
  
  text2: // Procedure 
  "1. Longanisa Sausage in a frying pan add water and oil and bring to a boil. Let the water totally evaporate and wait for the oil to extract from the sausage links. Let it fry for about 5 minutes rolling the sausage links constantly to cook evenly. \n\n " +
  "2. The Eggs: Beat two eggs as you would normally make an omelet. Season them with salt, cook in a frying pan, remove, and set aside. Next get a third egg and cook it sunny side up. Remove and set aside. \n\n " +
  "3. The Garlic-Fried Rice: Break up the rice smoothly and set aside. Heat frying pan, add oil, and sauté garlic until golden brown. Next add rice and stir for 1 minute. Then add salt & pepper and msg to taste and let it cook for an additional 5 minutes. Stir the rice constantly to avoid scorching. Add more salt if needed.\n\n " ,
},

{
  categoryType: "Egg/Rice and other Recipes",
  imageIsUri: false,
  //videoIsUri: false
  image: require("../assets/EGG, RICE and OTHER RECIPES/Ukoy  Silverfish Omelet.jpg"),
  //video: requiRibsre("../assets/tempura-bowl-vid.mp4"),
  title: "Ukoy / Silverfish Omelet", // Name of the Recipe
  text: // Ingredients
  "- 3 cups silverfish \n " +
  "- 1 tsp salt \n " +
  "- 1/2 tsp ground pepper \n " +
  "- 1 small onion, chopped \n " +
  "- 1/2 cup celery, chopped \n " +
  "- 2 eggs beaten \n " +
  "- 1 cup flour \n " +
  "- cooking oil for frying \n\n " +
  "- Dipping Sauce: \n " +
  "- 1/4 cup vinegar \n " +
  "- 3 cloves garlic chopped \n " +
  "- 1/4 tsp salt \n " +
  "- 1/8 tsp ground pepper \n ",
  
  
  text2: // Procedure 
  "1. In a bowl, combine all ingredients together. \n\n " +
  "2. Heat the oil in a frying pan. \n\n " +
  "3. When hot, drop about 3 tbsp of the mixture into the hot oil, flatten with a spoon and fry over medium heat until crisp and both sides are brown. \n\n " +
  "4. Remove from the pan and drain on paper towels. \n\n " +
  "5. Serve with garlic vinegar sauce. Serve hot & crispy. Enjoy! \n\n " ,
},


]

export let sampleRecipes2;
//=========================================================================================
export default function recipeCategories({ navigation }) {
  const [update, setUpdate] = useState(false);
  const [height, setHeight] = useState(Dimensions.get('window').width/1.777);
  const [categories, setCategories] = useState([
    //diri ka mubase unsang category to nga recipe
      { id: 1, category: "Chicken Recipes", image: require("../assets/chicken_recipes_category_img.jpg") },
      { id: 2, category: "Pork Recipes", image: require("../assets/pork_recipes_category_img.jpg") },
      { id: 3, category: "Beef Recipes", image: require("../assets/beef_recipes_category_img.jpeg") },
      { id: 4, category: "Seafoods Recipes", image: require("../assets/seafoods_recipes_category_img.jpg") },
      { id: 5, category: "Fish Recipes", image: require("../assets/fish_recipes_category_img.jpg") },
      { id: 6, category: "Vegetable Recipes", image: require("../assets/vegetable_recipes_category_img.jpg") },
      { id: 7, category: "Soup Recipes", image: require("../assets/soup_recipes_category_img.jpg") },
      { id: 8, category: "Pasta/Noodles/Pancit", image: require("../assets/pasta_noodles_pancit_recipes_category_img.png") },
      { id: 9, category: "Desert/Salad", image: require("../assets/desert_recipes_category_img.jpeg") },
      { id: 10, category: "Breads/Pastry/Drinks", image: require("../assets/BreadsPastryDrinks_recipes_category_img.jpeg") },
      { id: 11, category: "Egg/Rice and other Recipes", image: require("../assets/Egg Rice and other Recipes_recipes_category_img.jpeg") }
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