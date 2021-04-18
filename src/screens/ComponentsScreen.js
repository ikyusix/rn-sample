import React from "react";
import {Text, StyleSheet, View} from "react-native";

const ComponentsScreen = () => {
    let myName = 'Adam';
    return <View>
        <Text style={styles.textStyles}>Getting started with react native!</Text>
        <Text style={styles.textStylesName}>My name is {myName}</Text>
    </View>
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 45
    },
    textStylesName: {
        fontSize: 20
    }
})

export default ComponentsScreen
