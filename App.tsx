import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/components/screens/Signup';

export default function App() {

  const stack = createNativeStackNavigator()
  return (
    <SafeAreaView style={styles.Main}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name='signup' component={Signup} />
        </stack.Navigator>

      </NavigationContainer>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Main : {
    flex :1,
    justifyContent : 'center',
    alignItems : 'center'

  }
})