import React from "react";
import {Text, StyleSheet, View, Button} from "react-native";

const HomeScreen = () => {
    return <View>
        <Text style={styles.text}>HomeScreen</Text>
        <Button
            onPress={() => console.log("pressed")}
            title="Go to component demo"
        />
    </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    }
});

export default HomeScreen;
