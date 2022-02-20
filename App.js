import React,{ useState } from 'react';
import {View,StyleSheet,Text} from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';

const App = () =>{
  const [focusSubject,setFocusSubject] = useState(null)
 return(
   <View style={styles.container}>
     {
      focusSubject ? 
      ( <Timer /> )
        :
      ( <Focus /> )
    }
   </View>
 )
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#013a63'
  }
})
export default App;
 