import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameIsOverScreen from './screens/GameOverScreen';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';


export default function App() {

  const [fontsLoaded] = useFonts({
    'open-sans': require("./assets/fonts/OpenSans-Regular.ttf"),
    'open-sans-bold': require("./assets/fonts/OpenSans-Bold.ttf"),
  })

  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }
  function gameOverHandler(){
    setGameIsOver(true)
  }

  if(!fontsLoaded){
    return <AppLoading />
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  if(gameIsOver && userNumber){
    screen = <GameIsOverScreen />
  }



  return (
    <LinearGradient style={styles.rootScreen} colors={[Colors.primary700, Colors.accent500]}>
      <ImageBackground source={require("./assets/images/background.png")} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>

      </ImageBackground>

    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  rootScreen: {

    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
