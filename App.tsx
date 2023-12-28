import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/components/screens/Signup';
import SignUpPage from './src/components/screens/SignUpPage';
import Main from './src/components/screens/Main';

export default function App() {

  const Stack = createNativeStackNavigator()

  const [signup,setSignup]= useState([

  ])
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={
          {headerShown : false}
        }>
          <Stack.Screen name='SignUp' component={SignUpPage}  />
          <Stack.Screen name='Main' component={Main}  />
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