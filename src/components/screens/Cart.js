import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      const fetchCartItems = async () => {
        try {
          // Retrieve items from AsyncStorage
          const storedItems = await AsyncStorage.getItem('items');
          
          // Parse the stored items or initialize as an empty array
          const itemsArray = storedItems ? JSON.parse(storedItems) : [];
  
          // Update state with the retrieved items
          setCartItems(itemsArray);
        } catch (error) {
          console.error('Error fetching cart items:', error);
        }
      };
  
      // Call the function to fetch cart items
      fetchCartItems();
      console.log(cartItems)
    }, []);
  return (
    <View>
      <Text>Cart</Text>
    </View>
  )
}

const styles = StyleSheet.create({})