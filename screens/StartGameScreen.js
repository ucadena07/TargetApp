import { Button, TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return (
        <View style={styles.inputeContainer}>
            <TextInput style={styles.numberInput}
                maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        marginTop: 100,
        elevation: 1, //android
        backgroundColor: '#310219ff',
        shadowColor: 'black', // IOS 4 props required to create shadow
        shadowOffset: {
            width: 1, height: 1
        },
        shadowRadius: 6,
        shadowOpacity: 0.4
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
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