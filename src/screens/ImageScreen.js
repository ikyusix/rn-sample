import React from "react";
import {Text, StyleSheet, View} from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
    return <View>
        <ImageDetails title="Forest" />
        <ImageDetails title="Beach" />
        <ImageDetails title="Mountain" />
    </View>
}

const styles = StyleSheet.create({})

export default ImageScreen