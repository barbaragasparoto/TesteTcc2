import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Card from "../componentes/Card/Card";
import MyDatePicker from "../componentes/Data/index";
import { useState } from 'react';
import Inputlab from "../componentes/Inputlab";

export default function Home() {
  const router = useRouter();
  const [date, setDate] = useState('');

  return (
    <View>

        <View style={estilos.card}>
          <Card title="" content="" />
        </View>

        
      <View style={estilos.cardinput}>
        <Text style={estilos.textoinput}>Agende seu horario</Text>
        
        <MyDatePicker/>
        <Inputlab/>
        <TextInput
          style={estilos.input}
          placeholder="Email:"
          placeholderTextColor="black"
        />

      </View>

    </View>
  );
}

const estilos = StyleSheet.create({
  card: {
    padding: 15,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },



  cardinput: {
    backgroundColor: "#462783",
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 190,
    
  },

  textoinput: {
    fontFamily: "Arial",
    color: "#ffffff",
    textAlign: "center",
    fontSize: 17,
    marginBottom: 13
  },

  input: {
    width: "100%",
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    color: "black",
    backgroundColor: "#ffffff",
    paddingStart: 10,
    marginTop: 10,
  },
});
