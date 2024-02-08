import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useUserData } from '../UserDataContext';

const TekerlekScreen = ({ navigation }) => {
  const { userData, setUserData } = useUserData();

  const tekerleks = [
    { id: '21', name: 'SHAUİ YAN 4 ADET TEKERLEK ', price: 400, 
    image: require('../assets/tekerlek/1.jpg') },
    { id: '22', name: 'RC TEKERLEK', price: 550, 
    image: require('../assets/tekerlek/2.jpg') },
    { id: '23', name: 'Rivero Blesiya Lastik Tekerlek', price: 300, 
    image: require('../assets/tekerlek/3.jpg') },
    { id: '24', name: 'RC TEKERLEK KAYMAZ KAUÇUK', price: 400, 
    image: require('../assets/tekerlek/4.jpg') },
    { id: '25', name: '4 ADET LASTİK KAYMAZ', price: 300, 
    image: require('../assets/tekerlek/5.jpg') },
    
  ];

  const addToCart = (tekerlek) => {
    setUserData([...userData, tekerlek]);
  };

  const navigateToCart = () => {
    navigation.navigate('Sepet');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tekerlek</Text>
      <FlatList
        data={tekerleks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tekerlekItem}>
            <Image source={item.image} style={styles.tekerlekImage} />
            <View style={styles.tekerlekDetails}>
              <Text style={styles.tekerlekName}>{item.name}</Text>
              <Text style={styles.tekerlekPrice}>Fiyat: {item.price} TL</Text>
              <TouchableOpacity onPress={() => addToCart(item)} style={styles.addToCartButton}>
                <Text style={styles.addToCartButtonText}>Sepete Ekle</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Text style={styles.cartTitle}>Sepet</Text>
      {userData.map((item) => (
        <View key={item.id} style={styles.cartItem}>
          <Text>{item.name}</Text>
          <Text>Fiyat: {item.price} TL</Text>
        </View>
      ))}
      <TouchableOpacity onPress={navigateToCart} style={styles.viewCartButton}>
        <Text style={styles.viewCartButtonText}>Sepeti Görüntüle</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'gainsboro',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tekerlekItem: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  tekerlekImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  tekerlekDetails: {
    flex: 1,
  },
  tekerlekName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tekerlekPrice: {
    marginBottom: 5,
    fontSize: 16,
  },
  addToCartButton: {
    backgroundColor: 'blue',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  cartItem: {
    marginBottom: 10,
  },
  viewCartButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  viewCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TekerlekScreen;
