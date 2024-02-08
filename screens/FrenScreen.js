import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useUserData } from '../UserDataContext';

const FrenScreen = ({ navigation }) => {
  const { userData, setUserData } = useUserData();

  const frens = [
  
    { id: '11', name: 'BMW E46 FREN PEDALI', price: 120, 
    image: require('../assets/fren/2.jpg') },
    { id: '12', name: 'BMW 3.20 E46 FREN VE DEBRİYAJ ', price: 800, 
    image: require('../assets/fren/3.jpg') },
    { id: '13', name: 'AMAROK FREN PEDALI OTOMATİK', price: 112, 
    image: require('../assets/fren/1.jpg') },
    { id: '14', name: 'SAĞ SOL FREN DİSKİ', price: 1200, 
    image: require('../assets/fren/4.jpg') },
    { id: '15', name: 'FERODO DDF144 DİSK', price: 500, 
    image: require('../assets/fren/5.jpg') },
  ];

  const addToCart = (fren) => {
    setUserData([...userData, fren]);
  };

  const navigateToCart = () => {
    navigation.navigate('Sepet');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fren</Text>
      <FlatList
        data={frens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.frenItem}>
            <Image source={item.image} style={styles.frenImage} />
            <View style={styles.frenDetails}>
              <Text style={styles.frenName}>{item.name}</Text>
              <Text style={styles.frenPrice}>Fiyat: {item.price} TL</Text>
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
  frenItem: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  frenImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  frenDetails: {
    flex: 1,
  },
  frenName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  frenPrice: {
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

export default FrenScreen;
