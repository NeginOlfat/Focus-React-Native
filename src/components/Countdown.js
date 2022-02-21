import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { fontSizes } from '../utils/sizes';
import { colors } from '../utils/colors';

export const Countdown = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>20:22</Text>
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