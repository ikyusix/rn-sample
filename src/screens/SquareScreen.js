import React, {useState} from "react";
import {Text, View, StyleSheet} from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 25

const SquareScreen = () => {
    const [red, setRed] = (useState(0))
    const [green, setGreen] = (useState(0))
    const [blue, setBlue] = (useState(0))

    const setColor = (color, change) => {
        // color === 'red', 'green', 'blue'
        // change === +15, -15

        if (color === 'red') {
            if (red + change > 255 || red + change < 0) {
            } else {
                setRed(red + change)
            }
        }
    }

    return <View>
        <ColorCounter
            color="Red"
            onIncrease={() => setColor('red', COLOR_INCREMENT)}
            onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        />
        <ColorCounter
            color="Green"
            onIncrease={() => setGreen(green + COLOR_INCREMENT)}
            onDecrease={() => setGreen(green - COLOR_INCREMENT)}
        />
        <ColorCounter
            color="Blue"
            onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
            onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
        />
        <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
    </View>
}

const styles = StyleSheet.create({})

export default SquareScreen