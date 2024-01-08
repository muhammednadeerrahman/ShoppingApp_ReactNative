import { Dimensions, SafeAreaView, StyleSheet, Text, View,TouchableOpacity, Image, Pressable, FlatList, ScrollView} from 'react-native'
import React,{useEffect, useState} from 'react'

import Arrow from '../../assets/Assets/arrow.svg'
import CartLogo from '../../assets/Assets/cart.svg'
import Location from '../../assets/Assets/location.svg'
import Tag from '../../assets/Assets/tag.svg'
import Minus from '../../assets/Assets/minus.svg'
import Plus from '../../assets/Assets/plus.svg'
import Close from '../../assets/Assets/close.svg'
import AsyncStorage from '@react-native-async-storage/async-storage'


const {width,height}=Dimensions.get('screen')

export default function Payment({navigation}) {


    const [paymentList, setPaymentList] = useState([])
    const[paymentActive,setPaymentActive] =useState(1)
    const [total, setTotal] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);
    const [payAmount, setPayAmount] = useState(0);
    const [cartItems , setCartItems] = useState([])

    const fetchItems = async()=>{
        const storedItems = await AsyncStorage.getItem('items')
        const itemsArray = storedItems ? JSON.parse(storedItems)  :[]

        setCartItems(itemsArray)
        console.log(cartItems)
        
    }

    useEffect(()=>{
        setPaymentList([
            {
                id:1,
                paymentMode : 'Master card',
                number : '8043 8203',
                image : require('../../assets/Assets/Master-Card.png')
            },
            {
                id:2,
                paymentMode : 'Apple Pay',
                number : '8043 8203',
                image : require('../../assets/Assets/Apple-Pay.png')
            },
            {
                id:3,
                paymentMode : 'Google Pay',
                number : '8043 8203',
                image : require('../../assets/Assets/Google-pay.png')
            }
        ])

         fetchItems()
         totalPrice()

    
    },[setCartItems])

    const totalPrice = async ()=>{
        let amount = 0
        const storedItems = await AsyncStorage.getItem('items')
        const itemsArray = storedItems ? JSON.parse(storedItems):[]
        itemsArray.map((price)=>(
            amount += price.price
        ))
        let totalAmount = Number(amount.toFixed(2))
        setTotal(totalAmount)

        let updatedShippingCost = totalAmount !== 0 ? 20.9 : 0
        setShippingCost(updatedShippingCost)

        let finalPrice = Number((totalAmount + updatedShippingCost).toFixed(2))
        setPayAmount(finalPrice)
    }

    const handlePayment = async()=>{
        await AsyncStorage.clear()
        navigation.navigate('Main')

    }


  return (
    <SafeAreaView style={styles.Main}>
        <View style={styles.NavContainer}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.NavButton}>
                <Arrow width={35} height={35} />
            </TouchableOpacity>
            <Text style={styles.NavText}>Checkout</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Cart')} style={styles.NavButton}>
                <CartLogo width={35} height={35} />            
            </TouchableOpacity>
        </View>
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
        >
            <View style={styles.detailContainer}>
                <View style={styles.deliveryContainer}>
                    <Text style={styles.deliveryTitle}>Delivery Address</Text>

                    <View style={styles.deliveryAddressContainer}>
                        <View style={styles.locationContainer}>
                            <Location width={25} height={25} />
                        </View>
                        <View style={styles.deliveryRight}>
                            <View style={styles.deliveryRightTop}>
                                <Text style={styles.address}>20845 Oakridge Form Lane</Text>
                                <Tag width={25} height={25} />
                            </View>
                            <Text style={styles.city}>Newyork(NYC)</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.paymentContainer}>
                <Text style={styles.paymentTitle}>Payment Method</Text>       
            </View>
            <View style={styles.paymentList}>
                {paymentList.map((item)=>(
                     <View key={item.id} style={styles.paymentOptions} >
                        <View style={styles.PaymentImageContainer}>
                            <Image style={styles.paymentImage} source={item.image} />
                        </View>
                        <View style={styles.paymentDetails}>
                            <View style={styles.paymentTypeContainer}>
                                <Text style={styles.paymentName} >{item.paymentMode}</Text>
                                <Text style={styles.paymentNameDetail} >......{item.number}</Text>
                            </View>
                            <TouchableOpacity onPress={()=>{setPaymentActive(item.id)}} style={paymentActive==item.id? styles.paymentSelectionActive: styles.paymentSelection}>
                                <View style={styles.selectionCircle}></View>
                            </TouchableOpacity>
                        </View>
                    </View>

                ))}
            </View>
            <View style={styles.cartTitleContainer} >
                <Text style={styles.cartTitle}>My Cart</Text>
                <Tag width ={25} height={25} />
            </View>
            <View style={styles.flatlistContainer}>
                <FlatList 
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        contentContainerStyle={styles.cartList}
                        data={cartItems}
                        renderItem={({item})=>(
                            <View style={styles.productContainer}>
                                <View style={styles.imageContainer}>
                                    <Image style={[styles.productImage,]} source={item.image} />
                                </View>
                                <View style={styles.productDetails}>
                                    <Text style={styles.productName}>{item.style}</Text>
                                    <Text style={styles.productName}>{item.name}</Text>
                                    <Text style={styles.productSize}>Size : {item.size}</Text>
                                    <View style={styles.priceBox}>
                                        <Text style={styles.dollar}>$ </Text>
                                        <Text style={styles.productPrice}>{item.price}</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
            </View>
            
            <View style={styles.totalContainer}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.totalCost}>$ {payAmount}</Text>
            </View>
            <TouchableOpacity style={styles.PaymentButton} onPress={handlePayment}>
                <Text style={styles.paymentText}>Pay Now</Text>
            </TouchableOpacity> 
        </ScrollView>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
    Main :{
        width,
        alignItems: 'center',
        backgroundColor:'#D9D9D9',
        paddingBottom: 20,
        flex:1
    },
    scrollContainer:{
        width,
        alignItems: 'center',
        backgroundColor:'#D9D9D9',

    },
    NavContainer :{
        width: '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems: 'center',
        padding : 20,
        paddingVertical: 10,
        backgroundColor: '#fff',

    },
    NavButton :{},
    NavText :{
        color : '#000',
        fontWeight : '600',
        fontSize : 20
    },
    detailContainer:{
        backgroundColor : '#D9D9D9',
        width : width,
        paddingHorizontal : 20,
        paddingTop:20
    },
    deliveryTitle:{
        color : '#000',
        fontSize: 18,
        fontWeight:'600',
    },
    deliveryAddressContainer:{
        marginVertical : 20,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems: 'center',
        width : '100%',


    },
    locationContainer:{
        alignItems : 'center',
        justifyContent : 'center',
        padding : 10,
        backgroundColor : '#fff',
        borderRadius : 8
    
    },
    deliveryRight:{
        width : '80%'
    },
    deliveryRightTop:{
        
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
    },
    address:{
        color : '#000',
        fontSize : 18,
        fontWeight : '600',
    },
    city:{
        color  : '#A6A6A6',
        marginTop : 10,
    },
    paymentContainer:{
        width : '100%',
        backgroundColor:'#D9D9D9',
        paddingHorizontal: 20
    },
    paymentTitle:{
        color : '#000',
        fontSize : 18,
        fontWeight : '600',
        marginBottom : 15,
    },
    paymentList:{
        width :width,
        paddingHorizontal: 23,
        backgroundColor: '#D9D9D9',
        minHeight: width*.4
    },
    paymentOptions:{
        width:'100%',
        marginBottom : 25,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent:'space-between',
    },
    PaymentImageContainer:{
        width : 50,
        height : 50,
        borderRadius : 8,
        marginRight: 20
    },
    paymentImage:{
        width : 50,
        height : 50,
        borderRadius : 8,
        aspectRatio : 1/1

    },
    paymentDetails:{
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems : 'center',
        width: '70%'
    },
    paymentTypeContainer: {

    },
    paymentName:{
        color : '#000',
        fontSize : 18,
        fontWeight : '600',

    },
    paymentNameDetail:{
        color  : '#a6a6a6'
    },
    paymentSelection:{
        width : 25,
        height  : 25,
        borderRadius : 25/2,
        backgroundColor: '#fff',
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth: 1

    },
    paymentSelectionActive:{
        width : 25,
        height  : 25,
        borderRadius : 25/2,
        backgroundColor: '#FB975D',
        alignItems : 'center',
        justifyContent : 'center'
    },
    selectionCircle:{
        width : 7,
        height  : 7,
        borderRadius : 7/2,
        backgroundColor: '#fff'
    },

    cartTitleContainer : {
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent : 'space-between',
        width,
        padding: 20,
        paddingBottom:0
    },
    cartTitle:{
        color : '#000',
        fontSize  :18,
        fontWeight : '600',
    },
    flatlistContainer:{
        width,
        flex:1

    },
    cartList:{
        padding: 20,
        minWidth : width,
    },
    productContainer:{
        width: width/2,
        flexDirection : 'row',
        alignItems: 'center',

    },
    imageContainer:{
        width: 80,
        height  :100,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        overflow : 'hidden',
    },
    productImage:{
        width: 80,
        flex:1,
        borderRadius: 8,
    },
    productDetails:{
        marginLeft : 10
        
    },
    productName:{
        color: '#a6a6a6',
        marginBottom : 10,
        fontSize: 14,
        fontWeight : '500'

    },
    productSize:{
        color: '#a6a6a6',
        marginBottom : 13    
    },
    priceBox:{
        flexDirection :'row',
    },
    dollar:{
        color : '#FB975D'
    },
    productPrice:{
        color : '#000',
    },
 
    totalContainer:{
        flexDirection :'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        width,
        paddingHorizontal: 20


    },
    total:{
        color : '#a6a6a6',
        fontSize: 18,
        fontWeight: '500'
    },
    totalCost:{
        color : '#000',
        fontSize: 20,
        fontWeight: '600'
    },
    PaymentButton:{
        width : width-40,
        backgroundColor : '#000',
        alignItems : 'center',
        justifyContent  : 'center',
        borderRadius: 10,
        paddingVertical : 20,
        marginTop: 25,
    },
    paymentText:{
        color: '#fff',
        fontSize: 20
    },
})