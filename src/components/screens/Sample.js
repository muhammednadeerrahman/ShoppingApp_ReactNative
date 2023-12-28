import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Sample() {
    
    const data = [
        {
            id : 1,
            image : require('../../assets/images/blueDress.png'),
            price : 178.99,
            category : 'women'
          },
          {
            id : 2,
            image : require('../../assets/images/eyeWear.png'),
            price : 102.13,
            category : 'eyeWear'
          },
          {
            id : 3,
            image : require('../../assets/images/green_kurta.jpg'),
            price : 300.74,
            category : 'women'
          },
          {
            id : 4,
            image : require('../../assets/images/pinkTshirt.png'),
            price : 58.98,
            category : 'women'
          },
          {
            id : 5,
            image : require('../../assets/images/redDress.png'),
            price : 85.25,
            category : 'women'
          },
          {
            id : 6,
            image : require('../../assets/images/shirt.png'),
            price : 254.45,
            category : 'winter'
          },
          {
            id : 7,
            image : require('../../assets/images/whiteDress.png'),
            price : 251.85,
            category : 'women'
          },
          {
            id : 8,
            image : require('../../assets/images/whiteKurtha.png'),
            price : 251.85,
            category : 'winter'
          }
    ]
  return (
    <SafeAreaView>
        <Text>hellooo</Text>
        <FlatList 
            
            data={data}
            renderItem={({item})=>(
                <View style={styles.item}>
                    <Image style={styles.image} source={item.image} resizeMode='contain' />

                </View>

            )}
            numColumns={2}
            horizontal={false}
        />
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    


    item :{
        flex : 1,
    },
    image : {
        width : 200,
        height: 200
    }
})