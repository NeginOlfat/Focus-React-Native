import React,{ useState, useEffect } from 'react';
import {View,StyleSheet,Text} from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';
import  { colors }  from './src/utils/colors';
import { FocusHistory } from './src/features/focus/FocusHistory';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const STATUSES = {
  COMPLETE: 1,
  CANCEL: 0
}
const App = () =>{
  const [focusSubject,setFocusSubject] = useState(null);
  const [focusHistory,setFocusHistory] = useState([]);

  const addFocusHistory = (subject,status) =>{
    setFocusHistory([...focusHistory,{
      key: focusHistory.length + 1,
      subject: subject,
      status: status
    }])
  }

  const saveFocusHistory = async () => {
    try{
      await AsyncStorage.setItem('focusHistory',JSON.stringify(focusHistory));
    }catch(e){
      console.log(e);
    }
  }

  const loadFocusHistory = async () =>{
    try{
      const history = await AsyncStorage.getItem('focusHistory');
      if(history && JSON.parse(history).length){
        setFocusHistory(JSON.parse(history));
      }
    }catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    loadFocusHistory();
  },[]);

  useEffect(() => {
    saveFocusHistory();
  },[focusSubject])
 return(
   
   <View style={styles.container}>
     {
      focusSubject ? 
      ( <Timer 
          focusSubject={focusSubject} 
          onEndTimer={() => {
            addFocusHistory(focusSubject,STATUSES.COMPLETE);
            setFocusSubject(null);
          }}
          clearFocusItem={() =>{
            addFocusHistory(focusSubject,STATUSES.CANCEL);
            setFocusSubject(null);
          }}
         /> 
      )
        :
      ( 
      <View style={styles.focusContainer}>
        <Focus  addFocus={setFocusSubject} />
        <FocusHistory focusHistory={focusHistory} setFocusHistory={setFocusHistory} />
      </View>
      )
    }
   </View>
 )
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.darkBlue,
    justifyContent: 'center'
  },
  focusContainer:{
    flex: 1
  }
})
export default App;
 