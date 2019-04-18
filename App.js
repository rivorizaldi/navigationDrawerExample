/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import DrawerNavigator from "./navigation/DrawerNavigation";

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <DrawerNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    }
});
