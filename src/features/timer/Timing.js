import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RoundButton } from '../../components/RoundButton';

export const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.timing}>
      <RoundButton title='20' size={75} />
      <RoundButton title='15' size={75} />
      <RoundButton title='10' size={75} />
    </View>
  )
} 

const styles = StyleSheet.create({
    timing:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})