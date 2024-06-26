import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import informacion from './informacion';
import precios from './precios';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="informacion">
        <Drawer.Screen name="Informacion" component={informacion} />
        <Drawer.Screen name="Precios" component={precios} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
