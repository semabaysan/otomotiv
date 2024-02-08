import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {

  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const Register = async () => {
    try {
      // Kullanıcı adı ve şifre boş değilse devam et
      if (!email || !password) {
        Alert.alert('Hata', 'Kullanıcı adı ve şifre boş olamaz.');
        return;
      }

      const response = await axios.post('http://10.0.2.2:8000/api/register', {
          name: name,
          email: email,
          password: password,
      });
      console.log(response.status);
      if (response.status == 200) {
        navigation.navigate('Giriş');
      } else {
      }
    } catch (error) {
  if (axios.isAxiosError(error)) {
    console.error('Axios Hatası:', error.response || error.request || error.message);
  } else {
    console.error('Giriş başarısız', error);
  }
      }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>
      <View style={styles.iconContainer}>
        <Ionicons name="ios-car" size={100} color="black" />
      </View>
      <View style={styles.inputContainer}>
      <Text style={styles.label}>Kullanıcı Adı:</Text>
      <TextInput
          style={styles.input}
          placeholder="Kullanıcı Adı Girin"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text style={styles.label}>E-Mail:</Text>
              <TextInput
          style={styles.input}
          placeholder="E-mail Girin:"
          value={email}
          onChangeText={(text) => setemail(text)}
        />
        <Text style={styles.label}>Şifre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Şifre Girin:"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={Register} >
        <Text style={styles.buttonText}>KAYIT OL</Text>
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
    fontSize: 16,
  },
});

export default RegisterScreen;
