import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Arrow from '../../assets/Assets/arrow.svg'
import Heart from '../../assets/Assets/heart.svg'


const {width,height} = Dimensions.get('screen')
imageWidth = Math.round(width-40)

export default function Product({route,navigation}) {
    const {item} = route.params
    const [tab, setTab]=useState(1)
    const [colorTab, setColorTab]=useState(0)

    const addCart = async () => {
        try {
          const storedItems = await AsyncStorage.getItem('items');
    
          let itemsArray = storedItems ? JSON.parse(storedItems) : [];
    
          await AsyncStorage.setItem('items', JSON.stringify([...itemsArray, item]));
          
        } catch (error) {
          console.error('Error adding item to cart:', error);
        }
        console.log(await AsyncStorage.getItem('items'))
        navigation.navigate('Cart')
      };
      const colorData = [
        {
            id :0,
            color:'#fff'
        },
        {
            id :1,
            color:'#C4B5B1'
        },
        {
            id :2,
            color:'#D6E1FD'
        },
        {
            id :3,
            color:'#F6D6FE'
        },
        {
            id :4,
            color:'#D5EEED'
        },
        {
            id :5,
            color:'#D9D9D9'
        },
        {
            id :6,
            color:'#FED6DF'
        },
      ]
      sizeData=[
        {
            id :1,
            size:'S'
        },
        {
            id :2,
            size:'M'
        },
        {
            id :3,
            size:'L'
        },
        {
            id :4,
            size:'XL'
        },
        {
            id :5,
            size:'XXL'
        },
      ]

    
        
      
  return (
    <SafeAreaView style={styles.Main}>
        <View style={styles.navContainer}>
            <TouchableOpacity 
                onPress={()=>navigation.goBack()}
                style={styles.navButtons} 
                activeOpacity={.8}
            >
                <Arrow  width={35} height={35} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.8}>
                <Heart width={35} height={35} />
            </TouchableOpacity>
        </View>
        <ScrollView
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={styles.scrollContainer}
        >
            <Text style={styles.title}>{item.style} {item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <Image style={styles.image} source={item.image}  />
            
            <View style={styles.sizeContainer}>
                <Text style={styles.sizeTitle}>Select Size</Text>
                <View style={styles.sizeList}>
                    {sizeData.map((item)=>(
                        <TouchableOpacity key={item.id} onPress={()=>setTab(item.id)} activeOpacity={.6} style={tab==item.id?styles.sizeButtonActive :styles.sizeButton} >
                            <Text style={tab==item.id ?styles.buttonSizeTextActive :styles.buttonSizeText}>{item.size}</Text>
                        </TouchableOpacity>
                    ))}

                </View>
            </View>
            <View style={styles.colorContainer}>
                <Text style={styles.colorTitle}>Select Color</Text>
                    <View style={styles.ColorList}>
                        {colorData.map((item)=>(
                            <TouchableOpacity 
                            key={item.id} 
                            onPress={()=>setColorTab(item.id)} 
                            style={[styles.ColorButton,
                                {backgroundColor:item.color},
                                colorTab==item.id
                                ?{borderColor:'#FB975D',borderWidth:1}
                                :{borderColor:item.color,borderWidth:1}]} 
                            ></TouchableOpacity>
                        ))}
                    </View>
            </View>
            <View style={styles.bottomContainer} >
                <Text style={styles.bottomPrice}>${item.price}</Text>
                <TouchableOpacity activeOpacity={.8}  style={styles.AddCart} onPress={addCart}>
                    <Text style={styles.AddCartText}>Add  to cart</Text>
                </TouchableOpacity>
            </View>
           
        </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Main :{
        width,
        alignItems:'center',
        padding:20,
        

    },
    navContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        marginBottom:20,
        alignItems: 'center'
    },
    navButtons :{

    },
    scrollContainer:{

    },
    title :{
        fontSize:22,
        fontWeight:'bold',
        color:'#000',
        textAlign: 'center'

    },
    price :{
        fontSize:18,
        fontWeight:'bold',
        color:'#000',
        marginVertical:10,
        textAlign: 'center'

    },
    image :{
        width: imageWidth,
        height :imageWidth,
        borderRadius : 10,
        aspectRatio : 1/1
    },
    sizeContainer :{
        width : '100%',
        paddingVertical: 20,

    },
    sizeTitle :{
        color: '#000',
        fontWeight : 'bold',
        fontSize : 16,
        marginBottom: 30,
    },
    sizeList :{
        marginVertical : 30,
        flexDirection: 'row'
    },
    sizeButton :{
        width:40,
        height : 40,
        alignItems:'center',
        justifyContent : 'center',
        borderWidth : 1,
        borderRadius : 10,
        marginRight : 10,
        borderColor : '#A6A6A6'
    },
    sizeButtonActive :{
        width:40,
        height : 40,
        alignItems:'center',
        justifyContent : 'center',
        borderWidth : 1,
        borderRadius : 10,
        marginRight : 10,
        backgroundColor:'#FB975D',
        borderColor : '#FB975D'
    },
    buttonSizeText :{
        color : '#000',
        fontWeight : 'bold',
        fontSize: 15,
    },
    buttonSizeTextActive:{
       color: '#fff',
    },
    colorContainer :{
        width : '100%',
        paddingVertical: 20,

    },
    colorTitle :{
        color: '#000',
        fontWeight : 'bold',
        fontSize : 16,
    },
    ColorList :{
        marginVertical : 30,
        flexDirection: 'row'
    },
    ColorButton :{
        width:25,
        height : 25,
        alignItems:'center',
        justifyContent : 'center',
        borderRadius : 7,
        marginRight : 7
    },
    bottomContainer :{
        flexDirection:'row',
        justifyContent : 'space-between',
        marginBottom : 50,
        alignItems: 'center'

    },
    bottomPrice :{
        color : '#000',
        fontSize: 22,
        fontWeight: '600'
    },
    AddCart :{
        backgroundColor: '#000',
        paddingVertical : 15,
        paddingHorizontal:40,
        borderRadius : 14
    },
    AddCartText :{
        color: '#fff',
        fontSize:18,
        fontWeight:'500'
    },

})