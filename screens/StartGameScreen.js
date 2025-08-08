import { TextInput, View, StyleSheet, Alert, Text,useWindowDimensions } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from 'react'
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

function StartGameScreen({ onPickNumber }) {

    const [entereddNumber, setEnteredNumber] = useState("")
    const {width, height} = useWindowDimensions()

    function numberInputHandler(text) {
        setEnteredNumber(text)
    }

    function resetInputHandler() {
        setEnteredNumber('')
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(entereddNumber)

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {

            //show alert
            Alert.alert("Invalid number",
                "Number has to be between 1 and 99",
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            )
            return;

        }
        onPickNumber(chosenNumber)
    }

    return (
        <View style={styles.rootContainer}>
    
            <Title>Guess My Number</Title>
            <Card style={styles.inputeContainer}>
                <Text style={styles.instructionText}>Enter a Number</Text>
                <TextInput style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={entereddNumber} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default StartGameScreen;
const deviceHeight =height;
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems: 'center'
    },
    instructionText: {
        fontSize: 24,
        color: Colors.accent500
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})