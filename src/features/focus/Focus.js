import React,{ useState } from 'react';
import { View, Text, StyleSheet,TextInput, SafeAreaView} from 'react-native';
import { RoundButton } from '../../components/RoundButton';
import { colors } from '../../utils/colors';
import { fontSizes, spaceing } from '../../utils/sizes';

export const  Focus = ({ addFocus }) =>{
    const [subject, setSubject] = useState(null);
    return (
        <SafeAreaView style={styles.focusContainer}>
            <Text style={styles.focusText}>What would you like to focus on ?</Text>  
            <View style={styles.focusInnerContainer} >
                <TextInput 
                style={styles.textInput} 
                onSubmitEditing={({ nativeEvent: { text }})  => {setSubject(text)}}
                />
                <RoundButton title='+' size={50} onPress={() => {addFocus(subject)}} />
            </View>          
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    focusContainer: {
        flex:0.5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5%'
    },
    focusInnerContainer: {
        flexDirection:'row', 
        marginHorizontal: '2%', 
        marginVertical: spaceing.lg,
        alignItems: 'center'
    },
    focusText: {
        color: colors.white,
        fontSize: fontSizes.lg,
    },
    textInput: {
        backgroundColor: colors.white,
        flex: 1,
        fontSize: fontSizes.lg,
    }
})