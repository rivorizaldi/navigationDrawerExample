import { Dimensions } from "react-native";
import {
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator
} from "react-navigation";
import Detail from "../app/screen/Detail";
import Home from "../app/screen/Home";
import Test from "../app/screen/Test";

const WIDTH = Dimensions.get("window").width;

const drawerConfig = {
    drawerWidth: WIDTH * 0.83
};

const StackNavigator = createStackNavigator(
    {
        Home: {
            screen: Home
        },
        Detail: {
            screen: Detail
        }
    },
    {
        initialRouteName: "Home"
    }
);

const DrawerNavigator = createDrawerNavigator(
    {
        Test: {
            screen: Test
        },
        Stack: {
            screen: StackNavigator
        }
    },
    drawerConfig
);

export default createAppContainer(DrawerNavigator);
