// MotorScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useUserData } from '../UserDataContext';

const MotorScreen = ({ navigation }) => {
  const { userData, setUserData } = useUserData();

  const motors = [
    { id: '1', name: 'RANGE ROVER DİZEL ', price: 100000, 
    image: require('../assets/motor/1.jpg') },
    { id: '2', name: 'JAGUAR XF XJ DOLU MOTOR ', price: 120000,
     image: require('../assets/motor/2.jpg') },
    { id: '3', name: 'FIAT EGEA 1.6 MULTIJET  ', price: 18000, 
    image: require('../assets/motor/3.jpg') },
    { id: '4', name: 'MOTOR DİŞLİSİ ', price: 20000, 
    image: require('../assets/motor/4.jpg') },
    { id: '5', name: 'THUNDER TİGER PRO-28BX ', price: 25000, 
    image: require('../assets/motor/5.jpg') },
  ];

  const addToCart = (motor) => {
    setUserData([...userData, motor]);
  };

  const navigateToCart = () => {
    navigation.navigate('Sepet');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Motor</Text>
      <FlatList
        data={motors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.motorItem}>
            <Image source={item.image} style={styles.motorImage} />
            <View style={styles.motorDetails}>
              <Text style={styles.motorName}>{item.name}</Text>
              <Text style={styles.motorPrice}>Fiyat: {item.price} TL</Text>
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
  motorItem: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  motorImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  motorDetails: {
    flex: 1,
  },
  motorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  motorPrice: {
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

export default MotorScreen;
