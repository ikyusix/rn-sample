import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Box screen</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        margin: 10
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red',
        margin: 20
    }
})

export default BoxScreen