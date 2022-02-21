import React,{ useState } from 'react';
import {View,StyleSheet,Text} from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';
import  { colors }  from './src/utils/colors';
import { FocusHistory } from './src/features/focus/FocusHistory';

const App = () =>{
  const [focusSubject,setFocusSubject] = useState(null)
 return(
   <View style={styles.container}>
     {
      focusSubject ? 
      ( <Timer 
         focusSubject={focusSubject} 
         setFocusSubject={setFocusSubject} 
         /> 
      )
        :
      ( 
      <>
        <Focus  addFocus={setFocusSubject} />
        <FocusHistory />
      </>
      )
    }
   </View>
 )
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.darkBlue,
  }
})
export default App;
 