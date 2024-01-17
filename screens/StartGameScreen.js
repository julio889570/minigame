
import {TextInput,View, StyleSheet } from 'react-native'
import Pbuttons from '../components/Pbuttons'

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
        <TextInput 
        style={styles.numberInput}
         maxLength={2} 
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        />
        <View style={styles.buttonContainer}>
        <View>
        <Pbuttons>Reset</Pbuttons>
        </View>
        <View>
        <Pbuttons>Confirm</Pbuttons>
        </View>
        </View>
        
       
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 5,

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
             textAlign: 'center',
    },
    buttonContainer:{
        flexDirection: 'row'
    }
})
