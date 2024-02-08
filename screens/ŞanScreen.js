import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useUserData } from '../UserDataContext';

const ŞanScreen = ({ navigation }) => {
  const { userData, setUserData } = useUserData();

  const sans = [
    { id: '6', name: 'VW PASSAT B7 2.0 TDİ', price: 10000,
     image: require('../assets/san/1.jpg') },
    { id: '7', name: 'VW PASSAT B6 2.0 TDI', price: 12000, 
    image: require('../assets/san/2.jpg') },
    { id: '8', name: 'DUSTER XJD DC4 020', price: 30800, 
    image: require('../assets/san/3.jpg') },
    { id: '9', name: 'OTOMATİK ŞANZIMAN', price: 30000, 
    image: require('../assets/san/4.jpg') },
    { id: '10', name: 'SCANIA ŞANZIMAN', price: 27000, 
    image: require('../assets/san/5.jpg') },
  ];

  const addToCart = (san) => {
    setUserData([...userData, san]);
  };

  const navigateToCart = () => {
    navigation.navigate('Sepet');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Şanzıman</Text>
      <FlatList
        data={sans}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.sanItem}>
            <Image source={item.image} style={styles.sanImage} />
            <View style={styles.sanDetails}>
              <Text style={styles.sanName}>{item.name}</Text>
              <Text style={styles.sanPrice}>Fiyat: {item.price} TL</Text>
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
  sanItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  sanImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  sanDetails: {
    flex: 1,
  },
  sanName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sanPrice: {
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

export default ŞanScreen;