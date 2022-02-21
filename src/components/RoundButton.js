import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes } from '../utils/sizes';

export const RoundButton = ({
    style = {},
    textStyle = {},
    size = 100,
    ...props
}) =>{
    return(
        <TouchableOpacity
            style={[style,styles(size).roundButton]}
            onPress={props.onPress}
        >
            <Text style={[styles(size).textButton,textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = (size) => StyleSheet.create({
    roundButton:{
        height: size,
        width: size,
        borderWidth: 2,
        borderRadius: size/2,
        borderColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2%'
        
    },
    textButton:{
        color: colors.white,
        fontSize: fontSizes.lg
    }


})