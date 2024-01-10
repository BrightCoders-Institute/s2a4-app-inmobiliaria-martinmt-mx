import { StyleSheet } from 'react-native';

export const propertyItemStyles = StyleSheet.create({
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        marginRight: 15,
        },
        icon: {
        width: 20,
        height: 20,
        
        },
        infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        },
        infoText: {
        marginLeft: 5,
        },
        card: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        margin: 5,
        backgroundColor: 'rgb(245, 253, 255)',
        flexDirection: 'row',
        alignItems: 'center',
        },
        imageContainer: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',
        },
        ratingContainer: {
        position: 'absolute',
        bottom: 10,
        left: '44%',
        transform: [{ translateX: -15 }], // Centra el rating
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(251, 237, 183, 1)',
        borderRadius: 15,
        paddingHorizontal: 7,
        paddingVertical:5,
        },
        starIcon: {
        width: 15,
        height: 15,
        marginRight: 3,
        tintColor: 'rgba(238, 186, 0, 1)', // Cambia el color del ícono de la estrella según tu preferencia
        },
        ratingText: {
        fontWeight: 'bold',
        },
        image: {
        width: '100%',
        height: '100%',
        },
        detailsContainer: {
        flex: 1,
        },
        title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
        },
        location: {
        color: '#888',
        marginBottom: 5,
        },
        likeContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        },
        likeIcon: {
        width: 20,
        height: 20,
        tintColor: 'green',
        },
        addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        },
        locationIcon: {
        width: 15,
        height: 15,
        marginRight: 5,
        },
        addressText: {
        fontSize: 16,
        },
});