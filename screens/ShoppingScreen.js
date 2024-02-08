import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useUserData } from '../UserDataContext';
import { useNavigation } from '@react-navigation/native';

const ShoppingScreen = () => {
  const { userData, setUserData } = useUserData();
  const navigation = useNavigation();

  const removeFromCart = (itemId) => {
    const updatedCart = userData.filter((item) => item.id !== itemId);
    setUserData(updatedCart);
  };

  const calculateTotalPrice = () => {
    return userData.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    if (userData.length === 0) {
      // Sepet boşsa ödeme ekranına geçiş yapma
      alert("Sepetiniz boş. Ödeme yapabilmek için önce ürün ekleyin.");
      return;
    }

    // Ödeme ekranına geçiş yap
    navigation.navigate('Odeme', { cartItems: userData });
  };

  const clearCart = () => {
    setUserData([]);
  };

  const handleReturnToMenu = () => {
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alışveriş Sepeti</Text>
      {userData.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Sepetiniz boş.</Text>
          <TouchableOpacity onPress={handleReturnToMenu} style={styles.returnToMenuButton}>
            <Text style={styles.returnToMenuButtonText}>Menüye Dön</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={userData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <View style={styles.itemDetails}>
                <Image source={item.image} style={styles.itemImage} />
                <View>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>Fiyat: {item.price} TL</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Sil</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
      <TouchableOpacity onPress={clearCart} style={styles.clearCartButton}>
        <Text style={styles.clearCartButtonText}>Tüm Sepeti Sil</Text>
      </TouchableOpacity>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Toplam Tutar: {calculateTotalPrice()} TL</Text>
        <TouchableOpacity onPress={handleCheckout} style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Sepeti Onayla</Text>
        </TouchableOpacity>
      </View>
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
  cartItem: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  clearCartButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  clearCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  totalContainer: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 18,
  },
  returnToMenuButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  returnToMenuButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ShoppingScreen;
