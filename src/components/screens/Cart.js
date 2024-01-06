import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Arrow from '../../assets/Assets/arrow.svg'
import CartLogo from '../../assets/Assets/cart.svg'
import Minus from '../../assets/Assets/minus.svg'
import Plus from '../../assets/Assets/plus.svg'
import Close from '../../assets/Assets/close.svg'
import Tag from '../../assets/Assets/tag.svg'


const {width,height}= Dimensions.get('screen')

export default function Cart({navigation}) {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const itemsArray = await fetchCartItems();
            setCartItems(itemsArray);
        };
    
        fetchData();
    }, []);
    
    const fetchCartItems = async () => {
        try {
            const storedItems = await AsyncStorage.getItem('items');
            const itemsArray = storedItems ? JSON.parse(storedItems) : [];
            return itemsArray;
        } catch (error) {
            console.error('Error fetching cart items:', error);
            return [];
        }
    };
    
  return (
    <SafeAreaView style={styles.Main}>
        <View style={styles.NavContainer}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.NavButton}>
                <Arrow width={35} height={35} />
            </TouchableOpacity>
            <Text style={styles.NavText}>My Cart</Text>
            <TouchableOpacity style={styles.NavButton}>
                <CartLogo width={35} height={35} />            
            </TouchableOpacity>
        </View>
        {/* <View style={styles.emptyContainer}>
                <Text style={styles.emptyTitle}>Hey,it feels so light !</Text>
                <Text style={styles.emptySub}>there is nothing in your cart.Let's add some items.</Text>
        </View> */}
        <FlatList 
        contentContainerStyle={{width:'100%', minHeight : height}}
        showsVerticalScrollIndicator={false}
        data={cartItems}
        
        renderItem={({item})=>(
            <View key={item.id} style={styles.productContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.productImage} source={item.image} />
                </View>
                <View style={styles.productDetails}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productSize}>Size : {item.size}</Text>
                    <View style={styles.priceBox}>
                        <Text style={styles.dollar}>$ </Text>
                        <Text style={styles.productPrice}>{item.price}</Text>
                    </View>
                    <View style={styles.prodBottomContainer}>
                        <View style={styles.prodButtonContainer}>
                            <TouchableOpacity style={styles.changeButton}>
                                <Minus width={25} height={25} />
                            </TouchableOpacity>
                            <Text style={styles.quantity}>{item.quantity}</Text>
                            <TouchableOpacity style={styles.changeButton}>
                                <Plus width={25} height={25} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.deleteButton}>
                            <Close width={25} height={25} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )}
        />
        
            
            <View style={styles.productContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.productImage} source={require('../../assets/images/pinkTshirt.png')} />
                </View>
                <View style={styles.productDetails}>
                    <Text style={styles.productName}>Beach Crochet Lace</Text>
                    <Text style={styles.productSize}>Size : M</Text>
                    <View style={styles.priceBox}>
                        <Text style={styles.dollar}>$ </Text>
                        <Text style={styles.productPrice}>145.4</Text>
                    </View>
                    <View style={styles.prodBottomContainer}>
                        <View style={styles.prodButtonContainer}>
                            <TouchableOpacity style={styles.changeButton}>
                                <Minus width={25} height={25} />
                            </TouchableOpacity>
                            <Text style={styles.quantity}>1</Text>
                            <TouchableOpacity style={styles.changeButton}>
                                <Plus width={25} height={25} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.deleteButton}>
                            <Close width={25} height={25} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* <View style={styles.productContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.productImage} source={require('../../assets/images/blueDress.png')} />
                </View>
                <View style={styles.productDetails}>
                    <Text style={styles.productName}>Beach Crochet Lace</Text>
                    <Text style={styles.productSize}>Size : M</Text>
                    <View style={styles.priceBox}>
                        <Text style={styles.dollar}>$ </Text>
                        <Text style={styles.productPrice}>145.4</Text>
                    </View>
                    <View style={styles.prodBottomContainer}>
                        <View style={styles.prodButtonContainer}>
                            <TouchableOpacity style={styles.changeButton}>
                                <Minus width={25} height={25} />
                            </TouchableOpacity>
                            <Text style={styles.quantity}>1</Text>
                            <TouchableOpacity style={styles.changeButton}>
                                <Plus width={25} height={25} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.deleteButton}>
                            <Close width={25} height={25} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.productContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.productImage} source={require('../../assets/images/blueDress.png')} />
                </View>
                <View style={styles.productDetails}>
                    <Text style={styles.productName}>Beach Crochet Lace</Text>
                    <Text style={styles.productSize}>Size : M</Text>
                    <View style={styles.priceBox}>
                        <Text style={styles.dollar}>$ </Text>
                        <Text style={styles.productPrice}>145.4</Text>
                    </View>
                    <View style={styles.prodBottomContainer}>
                        <View style={styles.prodButtonContainer}>
                            <TouchableOpacity style={styles.changeButton}>
                                <Minus width={25} height={25} />
                            </TouchableOpacity>
                            <Text style={styles.quantity}>1</Text>
                            <TouchableOpacity style={styles.changeButton}>
                                <Plus width={25} height={25} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.deleteButton}>
                            <Close width={25} height={25} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View> */}
            <View style={styles.checkoutContainer}>
                <TouchableOpacity style={styles.promoContainer}>
                    <Text style={styles.promo}>Promo/student Code or Vouchers</Text>
                    <Tag width={25} height={25} />
                </TouchableOpacity>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceTitle}>Sub Total</Text>
                    <Text style={styles.price}>$ 250.54</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceTitle}>Shipping</Text>
                    <Text style={styles.price}>$ 250.54</Text>
                </View>
                <View style={styles.TotalContainer}>
                    <Text style={styles.priceTitle}>Total</Text>
                    <Text style={styles.price}>$ 250.54</Text>
                </View>
                <TouchableOpacity onPress={async()=>console.log(await AsyncStorage.getItem('items'))} style={styles.checkoutButton}>
                    <Text style={styles.checkoutText}>Checkout</Text>
                </TouchableOpacity>
            </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Main :{
        width,
        padding : 20,
        alignItems: 'center',
        flex : 1

    },
    NavContainer :{
        width: '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems: 'center',
        marginBottom : 30,

    },
    NavButton :{},
    NavText :{
        color : '#000',
        fontWeight : '600',
        fontSize : 20
    },
    emptyContainer : {
        alignItems : 'center',
        justifyContent : 'center',
        width: '100%',
        flex :1,
        display : 'none'
    },
    emptyTitle : {
        color : '#000',
        fontWeight : '600',
        fontSize : 20
    },
    emptySub : {
        color : '#000',
        marginTop: 10,
        fontSize : 16

    },
    productContainer:{
        flexDirection : 'row',
        flex :1,
        justifyContent: 'space-between',
        marginBottom: 20

    },
    imageContainer : {
        flex : 5/11,
        backgroundColor : 'red',
        height : width/2,
        borderRadius : 8

    },
    productImage :{
        height: '100%',
        width:'100%' ,
        borderRadius : 8
       },
       productDetails:{
        flex : 6/11,
        paddingLeft : 10

       },
       productName:{
        fontSize:20,
        color : '#000',
        fontWeight: '600',
        
        

       },
       productSize:{
        color : '#A6A6A6',
        marginVertical : 20,
       },
       priceBox : {
        marginBottom: 20,
        flexDirection : 'row',
       },
       dollar : {
        fontWeight: '600',
        fontSize:20,
        color : '#FB975D'
       },
       productPrice:{
        fontSize:20,
        color : '#000',
        fontWeight: '600',
       },
       prodBottomContainer:{
        flexDirection: 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
        
       },
       prodButtonContainer:{
        flexDirection: 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        width: 90
       },
       changeButton:{},
       quantity :{
        color : '#000',
        fontSize: 20,
        fontWeight: '600'
       },
       deleteButton:{},
       checkoutContainer:{
        paddingVertical : 20,
        width: '100%'

       },
       promoContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent : 'space-between'
       },
       promo:{
        color : '#000',
        fontSize:20,
        fontWeight: '600'
       },
       priceContainer:{
        marginTop: 20,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
       },
       priceTitle:{
        fontWeight : '600',
        color : '#A6A6A6',
        fontSize : 18
       },
       price:{
        fontWeight : '600',
        color : '#000',
        fontSize :20
       },
       TotalContainer:{
        paddingVertical  :20,
        borderTopWidth : 1,
        borderColor : '#A6A6A6',
        borderStyle : 'dashed',
        marginTop :20,
        flexDirection : 'row',
        justifyContent  : 'space-between',
        alignItems : 'center'
       },
       checkoutButton:{
        width : width-40,
        backgroundColor : '#000',
        alignItems : 'center',
        justifyContent  : 'center',
        borderRadius: 10,
        paddingVertical : 20
       },
       checkoutText:{
        color : '#fff',
        fontSize : 20
       },
})