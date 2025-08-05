
import { Text, StyleSheet, View, Alert } from 'react-native'
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import generateRandomBetween from '../helpers/random';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumbersContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionsText';
import {Ionicons} from "@expo/vector-icons"

let min = 1;
let max = 100
function GameScreen({ userNumber, onGameOver }) {
    var initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentState] = useState(initialGuess)

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver()
        }
    }, [currentGuess, userNumber])

    function nextGuessHandler(direction) {
        if (direction === '-' && currentGuess < userNumber || direction === '+' && currentGuess > userNumber) {
            Alert.alert("Dont lie", "Wrong answer", [{ text: "Sorry!", style: 'cancel' }])
            return
        }

        if (direction === '-') {
            max = currentGuess
        } else {
            min = currentGuess + 1
        }
        const newRdnNumber = generateRandomBetween(min, max, currentGuess)
        setCurrentState(newRdnNumber)
    }


    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, '-')}>
                            <Ionicons name="remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, '+')}>
                                     <Ionicons name="add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>

            </Card>
            <View>

            </View>
        </View>
    )

}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
        instructionText:{
        marginBottom: 12
    }
})