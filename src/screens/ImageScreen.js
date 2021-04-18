import React from "react";
import {Text, StyleSheet, View} from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
    return <View>
        <ImageDetails title="Forest" imageSource={require('../../assets/forest.jpg')} />
        <ImageDetails title="Beach" imageSource={require('../../assets/beach.jpg')} />
        <ImageDetails title="Mountain" imageSource={require('../../assets/mountain.jpg')} />
    </View>
}

const styles = StyleSheet.create({})

export default ImageScreen