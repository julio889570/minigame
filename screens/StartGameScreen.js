
import {TextInput,View, StyleSheet, Alert } from 'react-native'
import Pbuttons from '../components/Pbuttons'
import { useState } from 'react'

export default function StartGameScreen() {
    const [userInput, setUserInput] = useState('')
    function userInputHandler(enteredText){
        setUserInput(enteredText)
    }
    function resetInputHandler(){
        setUserInput('')
    }
    function conFirmInputHandler(){
            const chosenNumber = parseInt(userInput)
            if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ){
                    Alert.alert('Invalid number!','Number has to be a number between 1 and 99.',[{text: 'Close', style: 'destructive', onPress: resetInputHandler}])
                return
            }
            console.log('Valid number!')
    }
  return (
    <View style={styles.inputContainer}>
        <TextInput 
        style={styles.numberInput}
         maxLength={2} 
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={userInputHandler}
        value ={userInput}
        />
        <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
        <Pbuttons onPress={conFirmInputHandler}>Confirm</Pbuttons>
        </View>
        <View style={styles.buttonContainer}>
        <Pbuttons>Reset</Pbuttons>
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
    buttonsContainer:{
        flexDirection: 'row'
    },
    buttonContainer:{
        flex: 1,
    }
})
