import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/components/screens/Signup';
import SignUpPage from './src/components/screens/SignUpPage';
import Main from './src/components/screens/Main';
import Sample from './src/components/screens/Sample';
import Product from './src/components/screens/Product';
import Cart from './src/components/screens/Cart';

export default function App() {

  const Stack = createNativeStackNavigator()

  const [signup,setSignup]= useState([

  ])
  return (
    <NavigationContainer>
        <Stack.Navigator 
          screenOptions={
            {headerShown : false}
          }
          initialRouteName='Cart'
        >
            <Stack.Screen name='SignUp' component={SignUpPage}  />
            <Stack.Screen name='Main' component={Main}  />
            <Stack.Screen name='Product' component={Product}  />
            <Stack.Screen name='Cart' component={Cart}  />
        </Stack.Navigator>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  Main : {
    flex :1,
    justifyContent : 'center',
    alignItems : 'center'

  }
})