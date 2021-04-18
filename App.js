import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Components: ComponentsScreen
    },
    {
        initialRouteName: 'Components',
        defaultNavigationOptions: {
            title: 'App'
        }
    }
)

export default createAppContainer(navigator)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
