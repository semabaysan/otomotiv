import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useUserData } from '../UserDataContext';

const BestSellersScreen = ({ navigation }) => {
  const { userData, setUserData } = useUserData();

  const bests = [
    { id: '26', name: 'RANGE ROVER DİZEL ', price: 100000, 
    image: require('../assets/motor/1.jpg') },
    { id: '27', name: 'BMW 3.20 E46 FREN  ', price: 800, 
    image: require('../assets/fren/3.jpg') },
    { id: '28', name: 'FIAT EGEA 1.6 MULTIJET  ', price: 18000, 
    image: require('../assets/motor/3.jpg') },
    { id: '29', name: 'CADDY ÖN KAPUT', price: 10000,
     image: require('../assets/kaporta/2.jpg') },
     { id: '30', name: 'DUSTER XJD DC4 020', price: 30800, 
     image: require('../assets/san/3.jpg') },
     { id: '31', name: 'RC TEKERLEK', price: 550, 
     image: require('../assets/tekerlek/2.jpg') },
     { id: '32', name: 'BMW KAPORTA', price: 10000,
     image: require('../assets/kaporta/5.jpg') },
  ];
  
  const addToCart = (best) => {
    setUserData([...userData, best]);
  };

  const navigateToCart = () => {
    navigation.navigate('Sepet');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Çok Satanlar</Text>
      <FlatList
        data={bests}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bestItem}>
            <Image source={item.image} style={styles.bestImage} />
            <View style={styles.bestrDetails}>
              <Text style={styles.bestrName}>{item.name}</Text>
              <Text style={styles.bestPrice}>Fiyat: {item.price} TL</Text>
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
  bestItem: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  bestImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  bestrDetails: {
    flex: 1,
  },
  bestrName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bestPrice: {
    marginBottom: 5,
    fontSize: 16
    
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


export default BestSellersScreen ;
