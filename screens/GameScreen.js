
import { Text, StyleSheet, View, Alert } from 'react-native'
import Tilte from '../components/ui/Title';
import Colors from '../constants/colors';
import generateRandomBetween from '../helpers/random';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumbersContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

let min = 1;
let max = 100
function GameScreen({ userNumber, onGameOver }) {
    var initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentState] = useState(initialGuess)

    useEffect(() => {
        if(currentGuess === userNumber){
            onGameOver()
        }
    },[currentGuess, userNumber])

    function nextGuessHandler(direction) {
        if (direction === '-' && currentGuess < userNumber || direction === '+' && currentGuess > userNumber) {
            Alert.alert("Dont lie","Wrong answer",[{text:"Sorry!", style:'cancel'}])
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
            <Tilte>Opponent's Guess</Tilte>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, '-')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, '+')}>+</PrimaryButton>
                </View>

            </View>
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
    }
})