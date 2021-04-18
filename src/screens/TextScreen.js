import React, {useState} from "react";
import {Text, View, StyleSheet, TextInput} from "react-native";

const TextScreen = () => {
    const [password, setPassword] = useState('')

    return <View>
        <Text>Enter Password</Text>
        <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorret={false}
            value={password}
            onChangeText={(newValue) => {
                setPassword(newValue)
            }}
        />
        {password.length < 4 ? <Text>Password must be 4 char</Text> : null}
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