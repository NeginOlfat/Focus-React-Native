import React,{ useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Countdown } from '../../components/Countdown';
import { colors } from '../../utils/colors';
import { fontSizes } from '../../utils/sizes';
import { ProgressBar } from 'react-native-paper';
import { spaceing } from '../../utils/sizes';
import { RoundButton } from '../../components/RoundButton';
import { Timing } from './Timing';

export const  Timer = ({ focusSubject, onEndTimer, clearFocusItem }) => {
    const [minutes, setMinutes] = useState(0.1);
    const [isStart, setIsStart] = useState(false);
    const [progress,setProgress] = useState(1);

    const onEnd = () => {
        setIsStart(false);
        onEndTimer();
    }
    const changeTime = (min) => {
        setMinutes(min);
        setProgress(1);
        setIsStart(false);
    }
    
    return (
        <View style={styles.container}> 
           <View style={styles.countdown}>
             <Countdown minutes={minutes}  onProgress={setProgress} isPause={!isStart} onEnd={onEnd}/>
           </View>
           <View style={styles.textView}>
            <Text style={styles.title}> Focusing on: </Text>
            <Text style={styles.task}>{focusSubject}</Text>
           </View>
           <View style={{ paddingTop: spaceing.md }}>
              <ProgressBar
                style={{ height: 10}}
                progress={progress}
                color={colors.lightBlue}
              />
            </View>
            <View style={styles.buttonWrapper}>
                <Timing  onChangeTime={changeTime}/>
            </View>
            <View style={styles.buttonWrapper}>
                { isStart?
                        <RoundButton title='Pause' size={150} onPress={() => setIsStart(false)} />
                        :
                        <RoundButton title='Start' size={150} onPress={() => setIsStart(true)} />
                }
            </View>
            <View style={{ paddingLeft: spaceing.md }}>
                <RoundButton size={50} title='-' onPress={() => {clearFocusItem()}} />
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: '5%'
    },
    countdown:{
        flex: 0.5
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
