import React, { useState } from 'react';
import {Dimensions, Image, StyleSheet, View, TextInput, Text} from 'react-native'
import logo from '../../../assets/logo.png'

const width = Dimensions.get('screen').width;


export default function Login(){
    const [text, setText] = useState('');

return <View style={estilos.container}>
    
<Image source={ logo } style={estilos.logo}/>
<View>

<TextInput
        style={estilos.input}
        placeholder="Email:"
        placeholderTextColor="white"
      />

      <TextInput
        style={estilos.input}
        onChangeText={setText}
        placeholder="Senha:"
        placeholderTextColor="white"
      />      
    
    <Text style={estilos.texto}>{text}</Text>
    </View>
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
  
    input: {
        width: '80%',
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        padding: 10,
        color: 'white',
        left: "10%",
        top: "15%",
        backgroundColor: "#462783",
        paddingStart: 10,
        marginTop: 10
    },

    texto: {
        color: "white",
        left: "11%",
        top: "17%"
    }


    })