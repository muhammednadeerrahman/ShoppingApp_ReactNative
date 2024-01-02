import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Payment() {
  return (
    <SafeAreaView style={styles.Main}>
        <View style={styles.NavContainer}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.NavButton}>
                <Arrow width={35} height={35} />
            </TouchableOpacity>
            <Text style={styles.NavText}>Checkout</Text>
            <TouchableOpacity style={styles.NavButton}>
                <CartLogo width={35} height={35} />            
            </TouchableOpacity>
        </View>    
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({})