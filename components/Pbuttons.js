import {View, Text, Pressable, StyleSheet} from 'react-native'

export default function Pbuttons({children}) {
    function handlePress(){
        console.log('pressed')
    }
  return (
    
     <View style ={styles.buttonOuterContainer}>
    <Pressable
     style={styles.buttonInnerContainer}
     onPress={handlePress}
     android_ripple={{color: 'yellow'}}>
    <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
    </View>
    
    
  )
  
}
const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#4e0329',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText:{
        color: 'white',
        textAlign: 'center'
    }
})