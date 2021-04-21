import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <View style={styles.textOneStyle}/>
        <View style={styles.textTwoStyle}/>
        <View style={styles.textThreeStyle}/>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        // borderWidth: 3,
        // borderColor: 'black',
        height: 306,
        flexDirection: 'row'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'rgb(220,87,87)',
        backgroundColor: 'rgb(210,146,146)',
        flex: 1,
        height: 150
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'rgb(127,220,87)',
        backgroundColor: 'rgb(163,210,146)',
        flex: 1,
        height: 150,
        top: 150
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'rgb(87,109,220)',
        backgroundColor: 'rgb(146,162,210)',
        flex: 1,
        height: 150
    }
})

export default BoxScreen