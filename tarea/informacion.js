import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'react-native-web';

export default function PlantInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bienvenido a Nuestra Tienda de Plantas</Text>
      <Text style={styles.description}>
        Descubre una variedad de plantas hermosas para decorar tu hogar o jardín.
      </Text>
      <Text style={styles.cta}>Explora nuestras plantas</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  video: {
    width: 300, // Ajusta el ancho del video según tus necesidades
    height: 200, // Ajusta la altura del video según tus necesidades
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  cta: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green', // Cambia el color según tu preferencia
  },
});
