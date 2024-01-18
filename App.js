
import { StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <LinearGradient colors={['#ffb9b9','#a31818','#990012','#ee7272']} style={styles.rootScreen}>
       <ImageBackground source={require('./assets/images/adaptive-icon.png')}
       resizeMode="cover"
       style={styles.rootScreen}
       imageStyle={styles.backgroundImage}
       
       >
        <StartGameScreen />
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
