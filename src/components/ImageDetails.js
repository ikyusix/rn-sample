import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";

const ImageDetails = props => {
    return <View>
        <Image source={require('../../assets/beach.jpg')} />
        <Text>{props.title}</Text>
    </View>
}

const styles = StyleSheet.create({})

export default ImageDetails
