import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Card = ({ title, content }) => {
  return (
    <View style={styles.card}>
      <Ionicons style={styles.icone} name="person-circle-outline" />
      <View style={styles.text}>
        <Text style={styles.title}>{title}ROGÉRIO FURLAN </Text>
        <Text style={styles.permissao}>{content}Coordenador </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#462783",
    borderRadius: 8,
    padding: 16,
    margin: 0,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

  },

  text: {
    flexDirection: "column",
  },

  icone: {
    color: "#FFCC00",
    fontSize: 120,
    marginRight: 16,
    textAlign: "left",
  },

  title: {
    fontSize: 18,
    fontFamily: "Arial",
    fontWeight: "bold",
    textAlign: "right",
    flex: 1,
    color: "#ffffff"
  },
  permissao: {
    fontSize: 15,
    fontFamily: "Arial",
    color: "#FFCC00",
    textAlign: "right",
    marginEnd: 77,
  },
});

export default Card;
