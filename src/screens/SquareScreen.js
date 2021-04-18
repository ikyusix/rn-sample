import React, {useReducer} from "react";
import {Text, View, StyleSheet} from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 75

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number }
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 ]] -15 }

    switch (action.colorToChange) {
        case 'red':
            return {...state, red: state.red + action.amount}
        case 'green':
            return {...state, green: state.green + action.amount}
        case 'blue':
            return {...state, blue: state.blue + action.amount}
        default:
            return state
    }
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})

    return <View>
        <ColorCounter
            color="Red"
            onIncrease={() => }
            onDecrease={() => }
        />
        <ColorCounter
            color="Green"
            onIncrease={() => }
            onDecrease={() => }
        />
        <ColorCounter
            color="Blue"
            onIncrease={() => }
            onDecrease={() => }
        />
        <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
    </View>
}

const styles = StyleSheet.create({})

export default SquareScreen