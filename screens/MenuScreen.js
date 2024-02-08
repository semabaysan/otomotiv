import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const MenuScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const goToMotorScreen = () => {
    navigation.navigate('Motor'); // 'Motor' ekranına yönlendirme
  }; 
  const goToŞanScreen = () => {
    navigation.navigate('Şanzıman'); // Şanzıman sayfasına yönlendirme
  };
  const goToCartScreen = () => {
    navigation.navigate('Sepet'); // Alışveriş sepetine yönlendirme
  };
  const goToFrenScreen = () => {
    navigation.navigate('Fren'); // Fren sayfasına yönlendirme
  };
  const goToKaportaScreen = () => {
    navigation.navigate('Kaporta'); // Kaporta sayfasına yönlendirme
  };
  const goToBestSellersScreen =()=>{
    navigation.navigate('BestSellersScreen');
  };
  const goToTekerlekScreen =()=>{
    navigation.navigate('Tekerlek');
  };

  const handleSearch = () => {
    // Arama metnini kontrol et ve ilgili sayfaya yönlendir
    const lowercaseSearchText = searchText.toLowerCase();

    if (lowercaseSearchText.includes('motor')) {
      goToMotorScreen();
    } else if (lowercaseSearchText.includes('şanzıman')) {
      goToŞanScreen();
    } else if (lowercaseSearchText.includes('fren')) {
      goToFrenScreen();
    } else if (lowercaseSearchText.includes('kaporta')) {
      goToKaportaScreen();
    } else {
      alert("Böyle bir ürün bulunmamaktadır.");
      return;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToCartScreen} style={styles.cartIcon}>
        <FontAwesome name="shopping-cart" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Otomotiv Yedek Parça</Text>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Ara..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onSubmitEditing={handleSearch}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToMotorScreen}>
          <Image source={require('../assets/img/car-engine.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Motor</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.button} onPress={goToŞanScreen}>
          <Image source={require('../assets/img/gearbox.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Şanzıman</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.button} onPress={goToFrenScreen}>
          <Image source={require('../assets/img/pedal.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Fren</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToKaportaScreen}>
          <Image source={require('../assets/img/araba.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Kaporta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToTekerlekScreen}>
        <Image source={require('../assets/img/rim.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Tekerlek</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToBestSellersScreen}>
        <Image source={require('../assets/img/award.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Çok Satanlar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: 'gainsboro',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  label: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
  },
  button: {
    backgroundColor: 'orange',
    padding: 42,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
    marginBottom: 10, 
    marginRight: '1%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19,
    textAlign: 'center'
  },
  buttonImage: {
    width: 50,
    height: 40,
    marginRight: 10,
  },
  cartIcon: {
    position: 'fixed',
    top: "0px",
    right: -150,
  },
});

export default MenuScreen;
