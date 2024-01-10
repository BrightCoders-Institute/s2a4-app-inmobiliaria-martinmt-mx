import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import propertiesData from '../data/propertiesData'; // Importar datos de ejemplo
import PropertyItem from '../components/PropertyItem';

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

export default HomeScreen;
