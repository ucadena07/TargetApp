import {Text,StyleSheet,View} from 'react-native'

function GameScreen(){
    return (
        <View>
            <Text>Oppenent's Guess</Text>
            <View>
                <Text>Higher or lower?</Text>
            </View>
            <View>Log Rounds</View>
        </View>
    )

}

export default GameScreen;

const styles =  StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12
    }
})