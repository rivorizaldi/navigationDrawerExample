import React, { Component } from "react";
import { StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class MenuButton extends Component {
    render() {
        return (
            <MaterialIcons
                name="menu"
                color="#000000"
                size={32}
                style={style.menuIcon}
                onPress={() => {
                    this.props.navigation.toggleDrawer();
                }}
            />
        );
    }
}

const style = StyleSheet.create({
    menuIcon: {
        zIndex: 9,
        position: "absolute",
        top: 20,
        left: 20
    }
});
