import { StyleSheet, Text, View} from "react-native";


function Goalitem(props){
    return (
        <View style={styles.goal}>
            <Text style={styles.goals} > {props.text} </Text>
        </View>
    );
}

export default Goalitem;



const styles = StyleSheet.create({
    goals: {
        color: 'white',
    },

    goal: {
        backgroundColor: 'lightblue',
        padding: 10,
        margin: 10,
        fontSize: 12,
        borderRadius:8,
    },
});