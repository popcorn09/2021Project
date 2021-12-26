import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import RecipeCategories from "../screens/recipeCategories";
import CategorizedRecipes from "../screens/categorizedRecipes";
import AboutRecipe from "../screens/aboutRecipe";
import AddRecipe from "../screens/addRecipe";
import EditRecipe from "../screens/editRecipe";



const screens = {
    CategoryScreen: {
        screen: RecipeCategories,
        navigationOptions: {
            title: "RECIPE CATEGORIES"
        }
    },
    RecipesScreen: {
        screen: CategorizedRecipes,
        navigationOptions: {
            title: "RECIPES"
        }
    },
    AboutRecipeScreen: {
        screen: AboutRecipe,
        navigationOptions: {
            title: " "
        }
    },
    AddRecipeScreen: {
        screen: AddRecipe,
        navigationOptions: {
            title: "ADD RECIPE"
        },
    },
    EditRecipeScreen: {
        screen:EditRecipe,
        navigationOptions: {
            title: "EDIT RECIPE"
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerStyle: { height: 60, backgroundColor: "#fc454e" },
        headerTitleStyle: {
            fontSize: 28,
            fontWeight: "bold",
        }
    }
    });

export default createAppContainer(HomeStack);