import { View, Text, TextInput,TouchableOpacity, StyleSheet } from 'react-native'
import {React, useState} from 'react'

export default function CardSubmit({addText}) {

    const [text, setText] = useState('')

    const onChange = (textValue) => setText(textValue);

  return (
            <View>
                <TextInput placeholder='Enter Card Name...' style={styles.input} onChangeText={onChange} />
                <TouchableOpacity style={styles.btn} onPress={() => addText(text)}>
                <Text style={styles.btnText}>Find Card</Text>
                </TouchableOpacity>
            </View>
  )
}

const styles = StyleSheet.create({
input:{
    padding: 8,
    fontSize: 16,
    width:415,
},
btn:{
    width:415,
    backgroundColor: "#2B253A",
    fontSize: 20,
    padding:10,
    borderWidth: 1,
    borderColor: 'black',
    


},
btnText: {
    color: "white",
    fontSize: 20,
    textAlign: 'center'
}

    })