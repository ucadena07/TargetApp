import { Button, TextInput, View, StyleSheet} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen(){
    return <View style={styles.inputeContainer}>
        <TextInput></TextInput>
         <PrimaryButton>Reset</PrimaryButton>
         <PrimaryButton>Confirm</PrimaryButton>
    </View>
}

export default StartGameScreen;

const styles = StyleSheet.create({
        inputeContainer: {
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        marginTop: 100,
        elevation: 1, //android
        backgroundColor: '#72063c', 
        shadowColor: 'black', // IOS 4 props required to create shadow
        shadowOffset:{
            width: 1,height:1
        },
        shadowRadius: 6,
        shadowOpacity: 0.4
    }
})