import React from "react";
import {Text, StyleSheet, View} from "react-native";

const HomeScreen = () => {
    const greeting = 'test';
    return <View>
        <Text style={styles.text}>HomeScreen</Text>
        <Text>{greeting}</Text>
    </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    }
});

export default HomeScreen;
