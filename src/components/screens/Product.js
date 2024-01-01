import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Product({route,navigation}) {
    const {item} = route.params

    const addCart = async () => {
        try {
          const storedItems = await AsyncStorage.getItem('items');
    
          let itemsArray = storedItems ? JSON.parse(storedItems) : [];
    
          await AsyncStorage.setItem('items', JSON.stringify([...itemsArray, item]));
          
        } catch (error) {
          console.error('Error adding item to cart:', error);
        }
        console.log(await AsyncStorage.getItem('items'))
      };
  return (
    <SafeAreaView style={styles.Main}>
        <View>
            <Text>{item.id}</Text>
            <Text>{item.price}</Text>
            
        </View>
        <Text style={styles.title}>Beach Cochet Lace</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Image  style={styles.image} source={item.image} resizeMode='contain' />
        
        <View style={styles.sizeContainer}>
            <Text style={styles.sizeTitle}>size</Text>
            <View style={styles.sizeList}>
                <TouchableOpacity activeOpacity={.6} style={styles.sizeButton} >
                    <Text style={styles.buttonSizeText}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sizeButton} >
                    <Text style={styles.buttonSizeText}>M</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sizeButton} >
                    <Text style={styles.buttonSizeText}>L</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sizeButton} >
                    <Text style={styles.buttonSizeText}>XL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sizeButton} >
                    <Text style={styles.buttonSizeText}>XXL</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.colorContainer}>
            <Text style={styles.colorTitle}>size</Text>
            <View style={styles.ColorList}>
                <TouchableOpacity style={styles.ColorButton} ></TouchableOpacity>
                <TouchableOpacity style={styles.ColorButton} ></TouchableOpacity>
                <TouchableOpacity style={styles.ColorButton} ></TouchableOpacity>
                <TouchableOpacity style={styles.ColorButton} ></TouchableOpacity>
                <TouchableOpacity style={styles.ColorButton} ></TouchableOpacity>
            </View>
        </View>
        <View style={styles.bottomContainer}>
            <Text style={styles.bottomPrice}></Text>
            <TouchableOpacity activeOpacity={.8}  style={styles.AddCart} onPress={addCart}>
                <Text style={styles.AddCartText}>Add  to cart</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Main :{},
    title :{},
    price :{},
    image :{
        width: '100%',
        height: 200,
    },
    sizeContainer :{},
    sizeTitle :{},
    sizeList :{},
    sizeButton :{},
    buttonSizeText :{},
    colorContainer :{},
    colorTitle :{},
    ColorList :{},
    ColorButton :{},
    bottomContainer :{},
    bottomPrice :{},
    AddCart :{},
    AddCartText :{},

})