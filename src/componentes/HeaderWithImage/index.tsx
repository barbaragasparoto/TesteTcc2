import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const HeaderWithImage: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('/TesteTcc2/assets/logo.png')}
        style={styles.image}
      />
      <Text style={styles.headerText}>Seu Título</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 30, // Ajuste o tamanho da imagem conforme necessário
    height: 30,
    marginRight: 10, // Espaço entre a imagem e o texto
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HeaderWithImage;