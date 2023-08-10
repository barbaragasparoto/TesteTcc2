import React from 'react';
import {Image, StyleSheet} from 'react-native'
import logo from '../../../assets/logo.png'

export default function Login(){

return <Image source={ logo } style={estilos.logo}/>
}

const estilos = StyleSheet.create({

    logo: {
     width: "100%" 
    }
    
    })