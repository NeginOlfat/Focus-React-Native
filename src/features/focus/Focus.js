import React from 'react';
import { View, Text, StyleSheet,TextInput} from 'react-native';

export const  Focus = () =>{
    return (
        <View style={styles.focusContainer}>
            <Text style={styles.focusText}>What would you like to focus on ?</Text>            
        </View>
    )
}

const styles = StyleSheet.create({
    focusContainer:{
        flex:1,
        alignItems:'center'
    },
    focusText:{
        flex: 1,
        color: '#FFF',
        fontSize: 28,
    }
})