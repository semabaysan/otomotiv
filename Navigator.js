
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MenuScreen from './screens/MenuScreen';
import MotorScreen from './screens/MotorScreen';
import ŞanScreen from './screens/ŞanScreen';
import ShoppingScreen from './screens/ShoppingScreen';
import OdemeEkrani from './screens/OdemeEkrani';
import FrenScreen from './screens/FrenScreen';
import KaportaScreen from './screens/KaportaScreen';
import BestSellersScreen from './screens/BestSellersScreen';
import TekerlekScreen from './screens/TekerlekScreen';
const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Giriş" component={LoginScreen} />
        <Stack.Screen name="Kayıt" component={RegisterScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Motor" component={MotorScreen} />
        <Stack.Screen name="Şanzıman" component={ŞanScreen}/>
        <Stack.Screen name="Sepet" component={ShoppingScreen}/>
        <Stack.Screen name='Odeme' component={OdemeEkrani}/>
        <Stack.Screen name='Fren' component={FrenScreen}/>
        <Stack.Screen name='Kaporta' component={KaportaScreen}/>
        <Stack.Screen name='BestSellersScreen' component={BestSellersScreen}/>
        <Stack.Screen name='Tekerlek' component={TekerlekScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


