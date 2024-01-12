import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const PropertyDetailScreen = ({ route }) => {
  // Suponiendo que pasas la propiedad seleccionada como parámetro a través de la navegación
  const { property } = route.params;

  return (
    <View>
      <Text>Nombre: {property.name}</Text>
      <Text>Dirección: {property.address}</Text>
      <Text>Habitaciones: {property.bedrooms}</Text>
      <Text>Baños: {property.bathrooms}</Text>
      <Text>Superficie: {property.area}</Text>
      <Text>Renta Mensual: {property.rent}</Text>
      <Text>Calificación: {property.rating}</Text>
      {/* Otros detalles de la propiedad que desees mostrar */}
    </View>
  );
};

PropertyDetailScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      property: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        bedrooms: PropTypes.number.isRequired,
        bathrooms: PropTypes.number.isRequired,
        area: PropTypes.string.isRequired,
        rent: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        // Agrega otras propiedades según sea necesario
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default PropertyDetailScreen;
