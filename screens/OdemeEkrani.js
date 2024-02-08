import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, StyleSheet } from 'react-native';

const OdemeEkrani = ({ route }) => {
  const { cartItems } = route.params;

  const [paymentMethod, setPaymentMethod] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');

  const handlePayment = () => {
    if (!paymentMethod) {
      Alert.alert('Uyarı', 'Lütfen ödeme yöntemini seçin.');
      return;
    }

    if (paymentMethod === 'creditCard' && !validateCardNumber(cardNumber)) {
      Alert.alert('Uyarı', 'Geçerli bir kredi kartı numarası girin.');
      return;
    }

    if (!fullName || !address) {
      Alert.alert('Uyarı', 'Ad-Soyad ve Adres bilgilerini doldurun.');
      return;
    }

    // Ödeme işlemleri burada gerçekleştirilecek
    console.log('Ödeme başarıyla gerçekleşti!');
    // Şipariş oluşturuldu uyarısı
  Alert.alert('Bilgi', 'Siparişiniz oluşturuldu.');
  };

  const validateCardNumber = (cardNumber) => {
    // Kredi kartı numarası doğrulama işlemi burada gerçekleştirilebilir
    // Bu örnekte sadece basit bir uzunluk kontrolü yapılmıştır
    return cardNumber.length === 16;
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontWeight: 'bold' }]}>Ödeme Ekranı</Text>
      <Text style={[styles.label, { fontWeight: 'bold' }]}>Toplam Tutar: {calculateTotalPrice(cartItems)} TL</Text>
      <Text style={[styles.label, { fontWeight: 'bold' }]}>Ödeme Yöntemi:</Text>
      <View style={styles.paymentMethodContainer}>
        <TouchableOpacity
          style={styles.paymentMethodButton}
          onPress={() => setPaymentMethod('creditCard')}
        >
          <Text style={styles.paymentMethodButtonText}>Kredi Kartı</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.paymentMethodButton}
          onPress={() => setPaymentMethod('cashOnDelivery')}
        >
          <Text style={styles.paymentMethodButtonText}>Kapıda Ödeme</Text>
        </TouchableOpacity>
      </View>

      {paymentMethod === 'creditCard' && (
        <View>
          <Text style={[styles.label, { fontWeight: 'bold' }]}>Kredi Kartı Numarası:</Text>
          <TextInput
            style={styles.input}
            placeholder="Kart Numarası"
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={(text) => setCardNumber(text)}
          />
        </View>
      )}

      <Text style={[styles.label, { fontWeight: 'bold' }]}>Ad-Soyad:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ad-Soyad"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />

      <Text style={[styles.label, { fontWeight: 'bold' }]}>Adres:</Text>
      <TextInput
        style={styles.input}
        placeholder="Adres"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />

      <TouchableOpacity onPress={handlePayment} style={styles.payButton}>
        <Text style={[styles.payButtonText, { fontWeight: 'bold' }]}>Ödeme Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => total + item.price, 0);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'gainsboro',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginTop: 10,
  },
  paymentMethodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  paymentMethodButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    flex: 1,
    marginRight: 5,
  },
  paymentMethodButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  payButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  payButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default OdemeEkrani;
