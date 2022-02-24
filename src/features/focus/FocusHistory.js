import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import { RoundButton } from '../../components/RoundButton';
import { fontSizes, spaceing } from '../../utils/sizes';
import { colors } from '../../utils/colors';

export const FocusHistory = ({focusHistory, setFocusHistory}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Things we've focused on</Text>
        {!!focusHistory.length && ( 
            <FlatList 
              style={{flex: 1, padding: spaceing.sm}}
              contentContainerStyle={{alignItems: 'center'}}
              data={focusHistory}
              renderItem={({item, index}) => (
                <Text style={styles.itemFocus(item.status)}>
                  {item.subject}
                </Text>
            )}
            />
          )}
          {!focusHistory.length && ( 
            <Text style={styles.nothingText} >Nothing yet</Text>
          )}
        </SafeAreaView>
      <View style={styles.clearButton}>
        <RoundButton  title='clear'  onPress={() => setFocusHistory([])}/>
      </View>
    </>
  )
}

const styles =  StyleSheet.create({
    container:{
      flex: 0.5,
      alignItems: 'center',
    },
    title:{
      fontSize: fontSizes.lg,
      color: colors.white
    },
    clearButton:{
      alignItems: 'center',
      paddingBottom: spaceing.lg
    },
    itemFocus: (status) =>(
      {
        fontSize: fontSizes.md,
        color: (status > 0)? colors.green : colors.red
      }
    ),
    nothingText: {
      color: colors.white,
      fontSize: fontSizes.md
    }
  
})

 