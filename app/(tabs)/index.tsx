import { useRouter } from "expo-router";
import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import Card from "../componentes/Card/Card";


export default function Home() {
  const router = useRouter();

  return (
    <View style={estilos.view}>
      <Text></Text>
    <View style={estilos.card}>
      <Card title="" content="" />
    </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  card: {
    padding: 15,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },

  view:{
    backgroundColor: "#462783",
    padding: 130,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  }

});