import { Text, View, Image, StyleSheet, Dimensions, useWindowDimensions } from 'react-native'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import PrimaryButton from '../components/ui/PrimaryButton'
function GameIsOverScreen({ rounds, userNumber, onStartNewGame }) {
    const { width, height } = useWindowDimensions()
    let imageSize = 300
    if(width < 380){
        imageSize = 150
    }
    if(height < 400){
        imageSize = 80
    }
    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize /2
    }

    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={[styles.imageContainer, imageStyle]}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.</Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>

    )
}

export default GameIsOverScreen

// const deviceWidth =Dimensions.get('window').width

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        // width: deviceWidth < 380 ? 150 :300,
        // height: deviceWidth < 380 ? 150 :300,
        // borderRadius: deviceWidth < 380 ? 75 :300,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontSize: 24,
        fontFamily: 'open-sans',
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
})