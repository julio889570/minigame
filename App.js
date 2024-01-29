
import { StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
export default function App() {
  const [userNumber, setUserNumber] = useState(0)
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>
 if (userNumber){
    screen = <GameScreen />
 }
  return (
    <LinearGradient colors={['#ffb9b9','#a31818','#990012','#ee7272']} style={styles.rootScreen}>
       <ImageBackground source={require('./assets/images/adaptive-icon.png')}
       resizeMode="cover"
       style={styles.rootScreen}
       imageStyle={styles.backgroundImage}
       
       >
        {screen}
        
        </ImageBackground>
       
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex: 1,
  },
  backgroundImage:{
    opacity: 0.15
  }
});
