import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { propertyItemStyles } from './PropertyItemStyles'
import PropTypes from 'prop-types';

const PropertyItem = ({ property, onPress }) => {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
      setLiked(!liked);
    };

    return (
      <TouchableOpacity onPress={onPress} style={propertyItemStyles.card}>
        <View style={propertyItemStyles.imageContainer}>
            <Image source={{ uri: property.image }} style={propertyItemStyles.image} resizeMode="cover" />
            <View style={propertyItemStyles.ratingContainer}>
                <Image source={require('../../assets/icons/star.png')} style={propertyItemStyles.starIcon} />
                <Text style={propertyItemStyles.ratingText}>{property.rating}</Text>
            </View>
        </View>
        <View style={propertyItemStyles.detailsContainer}>
          <Text style={propertyItemStyles.title}>{property.name}</Text>
          <View style={propertyItemStyles.addressContainer}>
            <Image source={require('../../assets/icons/LocationIcon.png')} style={propertyItemStyles.locationIcon} />
            <Text style={propertyItemStyles.addressText}>{property.address}</Text>
          </View>
          <View style={propertyItemStyles.infoContainer}>
            <View style={propertyItemStyles.iconContainer}>
              <Image source={require('../../assets/icons/RoomIcon.png')} style={propertyItemStyles.icon} />
              <Text style={propertyItemStyles.infoText}> {property.bedrooms}</Text>
            </View>
            <View style={propertyItemStyles.iconContainer}>
              <Image source={require('../../assets/icons/BathIcon.png')} style={propertyItemStyles.icon} />
              <Text style={propertyItemStyles.infoText}> {property.bathrooms}</Text>
            </View>
            <View style={propertyItemStyles.iconContainer}>
              <Image source={require('../../assets/icons/AreaIcon.png')} style={propertyItemStyles.icon} />
              <Text style={propertyItemStyles.infoText}> {property.area} ft²</Text>
            </View>
          </View>
          <Text>{property.rent}/m</Text>
          <View style={propertyItemStyles.likeContainer}>
          <TouchableOpacity onPress={handleLike}>
            <Image
              source={liked ? require('../../assets/icons/like_filled.png') : require('../../assets/icons/like.png')}
              style={propertyItemStyles.likeIcon}
            />
          </TouchableOpacity>
        </View>
        </View>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
  
});

PropertyItem.propTypes = {
  property: PropTypes.shape({
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    area: PropTypes.string.isRequired,
    rent: PropTypes.string.isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default PropertyItem;
