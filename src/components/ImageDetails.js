import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";

const ImageDetails = props => {
    return <View>
        <Image source={props.imageSource}/>
        <Text>{props.title}</Text>
        <Text>Image score - {props.score}</Text>
    </View>
}

const styles = StyleSheet.create({})

export default ImageDetails
