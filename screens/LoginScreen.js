import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  // Kayıt ekranına yönlendirme fonksiyonu
  const goToRegister = () => {
    navigation.navigate('Kayıt');
  };

  // Giriş yapma fonksiyonu
  const goToMenu = async () => {
    try {
      // Kullanıcı adı ve şifre boş değilse devam et
      if (!email || !password) {
        Alert.alert('Hata', 'Kullanıcı adı ve şifre boş olamaz.');
        return;
      }

      // API'ye kullanıcı doğrulama isteği gönderme
      const response = await axios.get('http://10.0.2.2:8000/api/user', {
        params:{
          email: email,
          password: password,
        }

      });
      console.log(response.status);
      // Doğrulama başarılıysa Menü ekranına yönlendir
      if (response.status == 200) {
        navigation.navigate('Menu');
      } else {
        // Doğrulama başarısızsa hata mesajı gösterme
        Alert.alert('Hata', 'Kullanıcı adı veya şifre hatalı.');
      }
    } catch (error) {
  if (axios.isAxiosError(error)) {
    console.error('Axios Hatası:', error.response || error.request || error.message);
  } else {
    // Diğer hatalar
    console.error('Giriş başarısız', error);
  }
  Alert.alert('Hata', 'Giriş sırasında bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Otomotiv Yedek Parça</Text>
      <View style={styles.iconContainer}>
        <Ionicons name="ios-car" size={100} color="black" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-Mail:</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail Girin"
          value={email}
          onChangeText={(text) => setemail(text)}
        />
        <Text style={styles.label}>Şifre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Şifre Girin"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={goToMenu}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={goToRegister}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gainsboro',
    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconContainer: {
    marginBottom: 30,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default LoginScreen; 