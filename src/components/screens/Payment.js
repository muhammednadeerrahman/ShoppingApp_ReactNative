import { Dimensions, SafeAreaView, StyleSheet, Text, View,TouchableOpacity, Image, Pressable} from 'react-native'
import React from 'react'

import Arrow from '../../assets/Assets/arrow.svg'
import CartLogo from '../../assets/Assets/cart.svg'
import Location from '../../assets/Assets/location.svg'
import Tag from '../../assets/Assets/tag.svg'
import Minus from '../../assets/Assets/minus.svg'
import Plus from '../../assets/Assets/plus.svg'
import Close from '../../assets/Assets/close.svg'


const {width,height}=Dimensions.get('screen')

export default function Payment({navigation}) {
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
        <View style={styles.detailContainer}>
            <View style={styles.deliveryContainer}>
                <Text style={styles.deliveryTitle}>Delivery Address</Text>

                <View style={styles.deliveryAddressContainer}>
                    <View style={styles.locationContainer}>
                        <Location width={35} height={35} />
                    </View>
                    <View style={styles.deliveryRight}>
                        <View style={styles.deliveryRightTop}>
                            <Text style={styles.address}>20845 Oakridge Form Lane</Text>
                            <Tag width={25} height={25} />
                        </View>
                        <Text style={styles.city}>Newyork(NYC)</Text>
                    </View>
                </View>
                <View style={styles.paymentContainer}>
                    <Text style={styles.paymentTitle}>Payment Method</Text>
                    <View style={styles.paymentOptions} >
                        <View style={styles.PaymentImageContainer}>
                            <Image style={styles.paymentImage} source={require("../../assets/Assets/Master-Card.png")} />
                        </View>
                        <View style={styles.paymentDetails}>
                            <View style={styles.paymentTypeContainer}>
                                <Text style={styles.paymentName} >Master Card</Text>
                                <Text style={styles.paymentNameDetail} >......9865 1656</Text>
                            </View>
                            <View style={styles.paymentSelection}>
                                <View style={styles.selectionCircle}></View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.paymentOptions} >
                        <View style={styles.PaymentImageContainer}>
                            <Image style={styles.paymentImage} source={require("../../assets/Assets/Master-Card.png")} />
                        </View>
                        <View style={styles.paymentDetails}>
                            <View style={styles.paymentTypeContainer}>
                                <Text style={styles.paymentName} >Master Card</Text>
                                <Text style={styles.paymentNameDetail} >......9865 1656</Text>
                            </View>
                            <View style={styles.paymentSelection}>
                                <View style={styles.selectionCircle}></View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.cartItemsContainer}>
                    <View style={styles.cartTitleContainer} >
                        <Text style={styles.cartTitle}>My Cart</Text>
                        <Tag width ={25} height={25} />
                    </View>
                    <View style={styles.cartList}>
                        <View style={styles.productContainer}>
                            <View style={styles.imageContainer}>
                                <Image resizeMode='contain' style={[styles.productImage,{width:200,height:200}]} source={require('../../assets/images/blueDress.png')} />
                            </View>
                            <View style={styles.productDetails}>
                                <Text style={styles.productName}>Beach Crochet Lace</Text>
                                <Text style={styles.productSize}>Size : M</Text>
                                <View style={styles.priceBox}>
                                    <Text style={styles.dollar}>$ </Text>
                                    <Text style={styles.productPrice}>145.4</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.totalContainer}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.totalCost}>$ 240.34</Text>
            </View>
            <TouchableOpacity style={styles.PaymentButton}>
                <Text style={styles.paymentText}>Pay Now</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
    Main :{
        width,
        paddingVertical : 20,
        alignItems: 'center',
        flex : 1

    },
    NavContainer :{
        width: '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems: 'center',
        marginBottom : 30,
        paddingHorizontal : 20,

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
        padding : 20,
        height 
    },
    deliveryTitle:{
        color : '#000',
        fontSize: 18,
        fontWeight:'600',
    },
    deliveryAddressContainer:{
        marginVertical : 25,
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
    },
    paymentTitle:{
        color : '#000',
        fontSize : 18,
        fontWeight : '600',
        marginBottom : 25,
    },
    paymentOptions:{
        marginBottom : 25,
        flexDirection : 'row',
        alignItems : 'center',
    },
    PaymentImageContainer:{
        width : 53,
        height : 53,
        borderRadius : 8,
        marginRight: 20
    },
    paymentImage:{
        width : 53,
        height : 53,
        borderRadius : 8,
        aspectRatio : 1/1

    },
    paymentDetails:{
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems : 'center',
        width: '80%'
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
    cartItemsContainer:{
        marginBottom:20,
    },
    cartTitleContainer : {
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent : 'space-between',
        marginBottom : 20
    },
    cartTitle:{
        color : '#000',
        fontSize  :18,
        fontWeight : '600',
    },
    cartList:{
        width: '100%'
    },
    productContainer:{
        width: '100%',
        flexDirection : 'row',
        alignItems: 'center'
    },
    imageContainer:{
        width: 80,
        height  :100,
        backgroundColor: 'red',
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
        color : '#000'
    },
 
    totalContainer:{
        flexDirection :'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        width: '100%',


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
        marginTop: 25
    },
    paymentText:{
        color: '#fff',
        fontSize: 20
    },
})