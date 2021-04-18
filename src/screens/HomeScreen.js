import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
    return <View>
        <Text style={styles.text}>HomeScreen</Text>
        <Button
            onPress={() => props.navigation.navigate('Components')}
            title="Go to component demo"
        />
        <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
            <Text>Go to list demo</Text>
        </TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    }
});

export default HomeScreen;
