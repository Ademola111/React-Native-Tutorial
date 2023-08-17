// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, FlatList, ScrollView} from 'react-native';
import Goalitem from './components/goalitem';
import GoalInput from './components/goalinput';
// const ademola={
//   uri:'./assets/ademola.jpg',
// }

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);


function addGoalHandler(enteredGoalText){
  setCourseGoals(currentCourseGoal => 
    [...currentCourseGoal, {text:enteredGoalText, 
      id:Math.random().toString()},])
  // console.log(enteredGoalText);
};

  return (
    <View style={styles.mainbody}>
      <View style={styles.container}>
          <Image style={styles.imagesize} source={require("./assets/ademola.jpg")}/>
          <Text style={styles.Titlestyle}>Tutorial</Text>
      </View>
      <View>
        <GoalInput onAddGoal={addGoalHandler} />
      </View>
      
      
      <View style={styles.goalstyle}>
        <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => { 
            return <Goalitem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />

          {/* {courseGoals.map((goal) => ( not needed in Flatlist
          <View style={styles.goal} key={goal}>
            <Text style={styles.goals} > {goal} </Text>
          </View>))}  */}
        
      </View>
      
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainbody: {
    // flex:1,
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

  goalstyle: {
    flexDirection: "column",
    justifyContent:"space-between",
    marginTop:24,
    borderRadius:8,
  },

  btn:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

});
