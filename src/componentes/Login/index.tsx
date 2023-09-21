import React, { useState } from 'react';
import {Dimensions, StyleSheet, View, TextInput, Text, Pressable} from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import Logo from '../Logo';


export default function Login({ navigation }: { navigation: NavigationProp<ParamListBase> }){

    const [text, setText] = useState('');

return <View style={estilos.container}>
    
    <Logo/>
    <View style={estilos.conteudo}>
    <TextInput style={estilos.input} placeholder="Email:" placeholderTextColor="white"/>
    <TextInput secureTextEntry={true} style={estilos.input} onChangeText={setText} placeholder="Senha:" placeholderTextColor="white"/>      
    <Text style={estilos.texto}>{text}</Text>
        <Pressable style={estilos.botao} onPress={() => navigation.navigate('Home')}>
          <Text style={estilos.texto}>Entrar</Text>
      </Pressable>
    </View>

</View>
}

const estilos = StyleSheet.create({


    container: {
        backgroundColor: 'black',
        height: '100%'
},
  
    input: {
        width: '80%',
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        padding: 10,
        color: 'white',
        backgroundColor: "#462783",
        paddingStart: 10,
        marginTop: 10
    },

    texto: {
        color: "white",
        textAlign: "center"
    },

    botao: {
        backgroundColor: "#462783",
        borderRadius: 20,
        padding: 10,
        marginTop: 20,
        width: "50%"
    },
    conteudo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }

    })