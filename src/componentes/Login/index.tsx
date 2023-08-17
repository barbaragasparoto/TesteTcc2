import React, { useState } from 'react';
import {Dimensions, Image, StyleSheet, View, TextInput, Text} from 'react-native'
import logo from '../../../assets/logo.png'

const width = Dimensions.get('screen').width;


export default function Login(){
    const [text, setText] = useState('');

return <View style={estilos.container}>
    
<Image source={ logo } style={estilos.logo}/>

<TextInput
        style={estilos.input}
        onChangeText={setText}
        placeholder="Digite algo"
      />
      <Text style={estilos.texto}>{text}</Text>

</View>
}

const estilos = StyleSheet.create({

    container: {
        backgroundColor: 'black',
        height: '100%'
},

    logo: {
        width: "90%",
        height: 420 / 594 * width,
        left: "8%"
    },
  
    input : {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        color: 'white'
    },
    texto: {
        color: "white"
    }


    })