// KaportaScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useUserData } from '../UserDataContext';

const KaportaScreen = ({ navigation }) => {
  const { userData, setUserData } = useUserData();

  const kaportas = [
    { id: '16', name: 'FORD COURIER MOTOR KAPUT', price: 8500, 
    image: require('../assets/kaporta/1.jpg') },
    { id: '17', name: 'CADDY ÖN KAPUT', price: 10000, 
    image: require('../assets/kaporta/2.jpg') },
    { id: '18', name: 'FORD CONNECT MOTOR KAPUTU', price: 9000,
     image: require('../assets/kaporta/3.jpg') },
     { id: '19', name: 'ISUZU MOTOR KAPUTU', price: 7000,
     image: require('../assets/kaporta/4.jpg') },
     { id: '20', name: 'BMW KAPORTA', price: 10000,
     image: require('../assets/kaporta/5.jpg') },
  ];

  const addToCart = (kaporta) => {
    setUserData([...userData, kaporta]);
  };

  const navigateToCart = () => {
    navigation.navigate('Sepet');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kaporta</Text>
      <FlatList
        data={kaportas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.kaportaItem}>
            <Image source={item.image} style={styles.kaportaImage} />
            <View style={styles.kaportaDetails}>
              <Text style={styles.kaportaName}>{item.name}</Text>
              <Text style={styles.kaportaPrice}>Fiyat: {item.price} TL</Text>
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
  kaportaItem: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  kaportaImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  kaportaDetails: {
    flex: 1,
  },
  kaportaName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  kaportaPrice: {
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

export default KaportaScreen;
