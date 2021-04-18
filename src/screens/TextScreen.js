import React from "react";
import {Text, View, StyleSheet, TextInput} from "react-native";

const TextScreen = () => {
    return <View>
        <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorret={false}
        />
    </View>
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen