import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'react-native-web';

export default function PlantPriceTable() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tabla de Precios de Plantas</Text>
      <ScrollView style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Nombre de la Planta</Text>
          <Text style={styles.tableHeader}>Precio por Unidad</Text>
          <Text style={styles.tableHeader}>Descripción</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Planta Rosa</Text>
          <Text style={styles.tableCell}>$12.99</Text>
          <Text style={styles.tableCell}>Planta Rosa es una planta de floración hermosa y fragante.</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Planta de Lavanda</Text>
          <Text style={styles.tableCell}>$9.99</Text>
          <Text style={styles.tableCell}>Planta de Lavanda es conocida por su aroma relajante y propiedades medicinales.</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Cactus de Bola</Text>
          <Text style={styles.tableCell}>$6.49</Text>
          <Text style={styles.tableCell}>Cactus de Bola es un cactus pequeño y fácil de cuidar, ideal para interiores.</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Planta de Tomate</Text>
          <Text style={styles.tableCell}>$7.99</Text>
          <Text style={styles.tableCell}>Planta de Tomate es perfecta para cultivar tus propios tomates frescos en casa.</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Suculenta Echeveria</Text>
          <Text style={styles.tableCell}>$5.99</Text>
          <Text style={styles.tableCell}>La Suculenta Echeveria es una planta suculenta con hojas en forma de roseta.</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Planta de Pimiento</Text>
          <Text style={styles.tableCell}>$6.99</Text>
          <Text style={styles.tableCell}>La Planta de Pimiento produce pimientos frescos y sabrosos en tu jardín.</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Ficus Elástica</Text>
          <Text style={styles.tableCell}>$14.99</Text>
          <Text style={styles.tableCell}>El Ficus Elástica es una planta de interior popular con hojas brillantes y verdes.</Text>
        </View>
        {/* Agrega más filas para otras plantas según sea necesario */}
      </ScrollView>
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
    padding: 100, // Agrega margen alrededor del contenedor
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tableContainer: {
    width: '100%',
    maxHeight: 2000, // Ajusta la altura máxima de la tabla según tus necesidades
    borderWidth: 1,
    borderColor: '#ccc',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  tableHeader: {
    fontWeight: 'bold',
  },
  tableCell: {
    flex: 1,
  },
});
