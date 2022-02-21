import React,{ useState } from 'react';
import { View, Text, StyleSheet, Pro } from 'react-native';
import { Countdown } from '../../components/Countdown';
import { colors } from '../../utils/colors';
import { fontSizes } from '../../utils/sizes';
import { ProgressBar } from 'react-native-paper';
import { spaceing } from '../../utils/sizes';
import { RoundButton } from '../../components/RoundButton';
import { Timing } from './Timing';

export const  Timer = ({ focusSubject, setFocusSubject}) =>{
    const [isStart, setIsStar] = useState(false);
    return (
        <View style={styles.container}> 
           <Countdown />
           <View style={styles.textView}>
            <Text style={styles.title}> Focusing on: </Text>
            <Text style={styles.task}>{focusSubject}</Text>
           </View>
           <View style={{ paddingTop: spaceing.md }}>
              <ProgressBar
                style={{ height: 10}}
                progress={1}
                color={colors.lightBlue}
              />
            </View>
            <View style={styles.buttonWrapper}>
                <Timing />
            </View>
            <View style={styles.buttonWrapper}>
                { isStart?
                        <RoundButton title='Pause' size={150} onPress={() => setIsStar(false)} />
                        :
                        <RoundButton title='Start' size={150} onPress={() => setIsStar(true)} />
                }
            </View>
            <View style={{ paddingLeft: spaceing.md }}>
                <RoundButton size={50} title='-' onPress={() => setFocusSubject(null)} />
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: '5%'
    },
    title:{
        color: colors.white,
        fontSize: fontSizes.md
    },
    textView: {
        alignItems: 'center',
        marginTop: spaceing.xl
    },
    task: {
        color: colors.white,
        fontSize: fontSizes.md,
        fontWeight: 'bold'
    },
    buttonWrapper: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: spaceing.xl
    },
})
