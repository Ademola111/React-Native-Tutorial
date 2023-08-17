import { useState } from "react";
import { StyleSheet, View, TextInput, Button} from "react-native";

function GoalInput(props){
    const [enteredGoalText, setEnterGoalText] = useState("");

    function goalInputHandler(enteredText){
        setEnterGoalText(enteredText);
      };
    
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnterGoalText('');
    };
    return (
        <View style={styles.textinputstyle}>
            <TextInput style={styles.inputstyle} 
            placeholder='Enter your username' 
            onChangeText={goalInputHandler}
            value ={enteredGoalText}
             />
            <Button title='Add Name' onPress={addGoalHandler}/>
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
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
});