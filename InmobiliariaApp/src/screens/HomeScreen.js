import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import propertiesData from '../data/propertiesData'; // Importar datos de ejemplo
import PropertyItem from '../components/PropertyItem';
import PropTypes from 'prop-types';

const HomeScreen = ({ navigation }) => {
  const renderPropertyItem = ({ item }) => {
    return (
      <PropertyItem
        property={item}
        onPress={() => navigation.navigate('PropertyDetail', { property: item })}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={propertiesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPropertyItem}
      />
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
