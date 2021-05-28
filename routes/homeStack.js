import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import AboutRecipe from "../screens/aboutRecipe";
import AddRecipe from "../screens/addRecipe";
import EditRecipe from "../screens/editRecipe";



const screens = {
    RecipeApp: {
        screen: Home,
        navigationOptions: {
            title: "RECIPES"
        }
    },
    AboutRecipe: {
        screen: AboutRecipe,
        navigationOptions: {
            title: " "
        }
    },
    AddRecipe: {
        screen: AddRecipe,
        navigationOptions: {
            title: "ADD RECIPE"
        },
    },
    EditRecipe: {
        screen:EditRecipe,
        navigationOptions: {
            title: "EDIT RECIPE"
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTitleAlign: "center",
        headerTintColor: "#444",
        headerStyle: { height: 80 },
        headerTitleStyle: {
            fontSize: 28,
            fontWeight: "bold",
        }
    }
    });

export default createAppContainer(HomeStack);