import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import PropertyDetailScreen from './src/screens/PropertyDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="PropertyDetail" component={PropertyDetailScreen} options={{ title: 'Detalles de la Propiedad' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
