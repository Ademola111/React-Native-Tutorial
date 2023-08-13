import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';

// const ademola={
//   uri:'./assets/ademola.jpg',
// }

export default function App() {
  const [enteredGoalText, setEnterGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

function goalInputHandler(enteredText){
  setEnterGoalText(enteredText);
  // console.log(enteredText);
};
function addGoalHandler(){
  setCourseGoals(currentCourseGoal => [...currentCourseGoal, enteredGoalText,])
  // console.log(enteredGoalText);
};

  return (
    <View style={styles.mainbody}>
      <View style={styles.container}>
        <Image style={styles.imagesize} source={require("./assets/ademola.jpg")}/>
        <Text style={styles.Titlestyle}>Tutorial</Text>
      </View>
      <View style={styles.textinputstyle}>
        <TextInput style={styles.inputstyle} 
        placeholder='Enter your username' 
        onChangeText={goalInputHandler} />
        <Button title='Add Name' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalstyle}>
        {courseGoals.map((goal) => (
        <View style={styles.goal} key={goal}>
          <Text style={styles.goals} > {goal} </Text>
        </View> ))}
        
      </View>
      <View style={styles.btn}>
        <Image source={require("./assets/ademola.jpg")}/>
        <Text>Best Tutorial Platform</Text>
        <Button title='Login'  />
      </View>
      

      {/* <Image source={require(ademola.uri)} /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainbody: {
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between',
    marginLeft: 24,
    marginRight: 24,
    
  },
  
  container: {
    marginTop: 64,
    flexDirection: 'row',
    justifyContent:"flex-start",
    borderBottomWidth:1,
    borderBottomColor:'skyblue',
  },
  
  Titlestyle:{
    marginTop: 5,
    marginLeft: 10,
    fontSize: 36,
    color:"blue",
  },

  imagesize: {
    width:50,
    height:50,
    borderRadius:10,
    marginBottom:24,

  },

  btn:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textinputstyle: {
    flexDirection: "row",
    justifyContent:"space-between",
    marginTop:24,
  },

  inputstyle: {
    color:"blue",
    borderWidth:1,
    borderColor:"blue",
    width:'75%',
    padding:5,
    borderRadius:10,
  },

  goalstyle: {
    flexDirection: "column",
    justifyContent:"space-between",
    marginTop:24,
    borderRadius:8,
  },

  goals: {
    color: 'white',
  },

  goal: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 10,
    fontSize: 12,
    borderRadius:8,
  }

});
