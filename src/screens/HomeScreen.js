import React from "react";
import {Text, StyleSheet, View, Button} from "react-native";

const HomeScreen = ({navigation}) => {
    return <View>
        <Text style={styles.text}>HomeScreen</Text>
        <Button
            title="Go to component demo"
            onPress={() => navigation.navigate('Components')}
        />
        <Button
            title="Go to list demo"
            onPress={() => navigation.navigate('List')}
        />
        <Button
            title="Go to image demo"
            onPress={() => navigation.navigate('Image')}
        />
        <Button
            title="Go to counter demo"
            onPress={() => navigation.navigate('Counter')}
        />
        <Button
            title="Go to color demo"
            onPress={() => navigation.navigate('Color')}
        />
    </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    }
});

export default HomeScreen;
