/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
type Props = {};
export default class Home extends Component<Props> {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={styles.container}>
                <MenuButon navigation={this.props.navigation} />
                <Text style={styles.instructions}>This is Home.js</Text>
                <Button
                    onPress={() => {
                        this.props.navigation.navigate("Detail");
                    }}
                    title="To Detail"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
