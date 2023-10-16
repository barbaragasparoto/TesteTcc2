import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Card = ({ title, content }) => {
  return (

    <View style={styles.card}>
      <View style={styles.coluna}>
      <Ionicons style={styles.icone} name="person-circle-outline"/>
      <Text style={styles.title}>{title}ROGÉRIO FURLAN  </Text>
      <Text style={styles.permissao}>{content}Coordenador </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
   
  },

  coluna:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#000000'
  },

  icone:{
    color: '#FFCC00',
    fontSize: 120,
    marginRight: 16,
    textAlign: 'left',
  },

  title: {
    fontSize: 18,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'right',
    flex: 1,

    
  },
  permissao: {
    fontSize: 15,
    fontFamily: 'Arial',
    color: '#FFCC00',
    textAlign: 'right',
    marginEnd: 82,
    
  },
});

export default Card;
