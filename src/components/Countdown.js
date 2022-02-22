import { StyleSheet, Text, View } from 'react-native'
import React,{ useState, useEffect, useRef } from 'react';
import { fontSizes } from '../utils/sizes';
import { colors } from '../utils/colors';

const minToSec = (min) => min * 60 * 1000;
const formatTime = (time) =>  (time < 10) ? `0${time}` : time;

export const Countdown = ({ minutes , isPause, onProgress, onEnd }) => {
  const [milis,setMilis] = useState(0.1);
  const interval = useRef(null);

  const countdown = () => {
    setMilis((time) => {
      if( time == 0){
        clearInterval(interval.current);
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  }
  
  useEffect(() => {
    setMilis(minToSec(minutes));
  },[minutes]);

  useEffect(() => {
    onProgress(milis / minToSec(minutes));
    if(milis == 0)
      onEnd();
  },[milis]);

  useEffect(() =>{
    if(isPause){
      clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countdown,1000);
    return () => clearInterval(interval.current);
  },[isPause]);

  const minute = Math.floor( milis / 1000 / 60) % 60;
  const second = Math.floor( milis / 1000 ) % 60;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formatTime(minute)}:{formatTime(second)}</Text>
    </View>
  )
} 

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10%'
    },
    text: {
        fontSize: fontSizes.xxxl,
        color: colors.white,
        fontWeight: 'bold'
    }
})