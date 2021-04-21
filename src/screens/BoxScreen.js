import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #2</Text>
        <Text style={styles.textStyle}>Child #3</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red',
        marginHorizontal: 20,
        marginVertical: 10
    }
})

export default BoxScreen