import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, Touchable,Dimensions, TouchableOpacity, View, ScrollView } from 'react-native'
import React,{useEffect, useRef, useState} from 'react'
import Carousel,{ getInputRangeFromIndexes }  from 'react-native-snap-carousel';
import Nav from '../../assets/Assets/nav.svg'
import Search from '../../assets/Assets/search.svg'
import Cart from '../../assets/Assets/cart.svg'

const {width, height}= Dimensions.get('screen')

export default function Main({navigation}) {
    const [data,setData]= useState([])
    const [index, setIndex] = useState(2); 
    const [active,setActive]= useState(1)
    const [category,setCategory]=useState('women')
    const [filtered,setFiltered] = useState([])


    useEffect(()=>{
        setData([
            {
              id : 1,
              style : 'Casual',
              name : 'Blue Dress',
              image : require('../../assets/images/blueDress.png'),
              price : 178.99,
              category : 'women'
            },
            {
              id : 2,
              style : 'Regular',
              name : 'Eye Wear',
              image : require('../../assets/images/eyeWear.png'),
              price : 102.13,
              category : 'eyeWear'
            },
            {
              id : 3,
              style : 'Regular',
              name : 'Green Kurtha',
              image : require('../../assets/images/green_kurta.jpg'),
              price : 300.74,
              category : 'women'
            },
            {
              id : 4,
              style : 'Regular',
              name : 'Pink Tshirt',
              image : require('../../assets/images/pinkTshirt.png'),
              price : 58.98,
              category : 'women'
            },
            {
              id : 5,
              style : 'Regular',
              name : 'Red Dress',
              image : require('../../assets/images/redDress.png'),
              price : 85.25,
              category : 'women'
            },
            {
              id : 6,
              style : 'Casual',
              name : 'White Shirt',
              image : require('../../assets/images/shirt.png'),
              price : 254.45,
              category : 'winter'
            },
            {
              id : 7,
              style : 'Regular',
              name : 'White Dress',
              image : require('../../assets/images/whiteDress.png'),
              price : 25.75,
              category : 'women'
            },
            {
              id : 8,
              style : 'Casual',
              name : 'White Kurtha',
              image : require('../../assets/images/whiteKurtha.png'),
              price : 251.85,
              category : 'winter'
            }
          ]);



    },[category])
    

  const isCarousal =useRef(null);
  
  const render_items=({item})=>(
       <TouchableOpacity onPress={()=>navigation.navigate('Product',{item})} style={styles.sliderContainer}>
          <Image style={styles.sliderImage} source={item.image} />
          <Text style={styles.productName}>{item.style} {item.name}</Text>
          <Text style={styles.productPrice}>$ {item.price}</Text>
        </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.Main}>
      <View style={styles.NavContianer}>
        <View style={styles.NavLeft}>
          <TouchableOpacity style={styles.NavLeftButton}>
            <Nav width={25} height={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.NavRight}>
          <TouchableOpacity style={styles.NavRightButton}>
            <Search width={25} height={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.NavRightButton} onPress={()=>navigation.navigate('Cart')}>
            <Cart width={25} height={25} />
          </TouchableOpacity>
        </View>
      </View>

      <View style= {styles.titleContainer}>
        <Text style={styles.title}>Find your style</Text>
        <Image style={styles.titleImage} source={require('../../assets/Assets/vector.png')} />
      </View>
      <View style={styles.Route}>
        <TouchableOpacity onPress={()=>{setActive(1),setCategory()}} style={active==1?styles.routerButtonActive:styles.routerButton}>
           <Text style={active==1?styles.ButtonTextActive:styles.ButtonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setActive(2),setCategory('winter')}} style={active==2?styles.routerButtonActive:styles.routerButton}>
           <Text style={active==2?styles.ButtonTextActive:styles.ButtonText}>Winter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setActive(3),setCategory('women')}} style={active==3?styles.routerButtonActive:styles.routerButton} >
           <Text style={active==3?styles.ButtonTextActive:styles.ButtonText}>Women</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setActive(4),setCategory('eyeWear')}} style={active==4?styles.routerButtonActive:styles.routerButton} >
           <Text style={active==4?styles.ButtonTextActive:styles.ButtonText}>EyeWear</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.SliderHor}>
        <Carousel 
          ref= {isCarousal}
          data={category? data.filter((item)=>item.category===category):data}
          renderItem = {render_items}
          sliderWidth = {width}
          itemWidth = {width*.4}
          layout={'default'} 
          inactiveSlideScale = {.7}  
          // firstItem={}
          vertical={false}
          enableSnap={true}
          loop={true}  
        />
      </View> 
      <View style={styles.popularContainer}>
        <View style={styles.popularTitleContainer}>
          <Text style={styles.popularTitle}>Most Popular</Text>
          <Text style={styles.popularSee}>See All</Text>
        </View>
        <FlatList       
          data={category? data.filter((item)=>item.category===category):data}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=>navigation.navigate('Product',{item})} style={styles.item}>
              <Image style={styles.PopularImage} source={item.image} />
                <Text style={styles.popularName}>{item.style} {item.name}</Text>
                <Text style={styles.popularPrice}>$ {item.price}</Text>
            </TouchableOpacity>
          )}
          numColumns={2}
          horizontal={false}
          contentContainerStyle={styles.popularList}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Main: {
    flex:1
    
  },
  NavContianer: {
    width : '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    padding : 20
  },
  NavLeft: {
  },
  NavRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '20%'

  },
  titleContainer: {
    padding: 20,
    position: 'relative',
    paddingTop : 0


  },
  title : {
    fontSize :24,
    color : '#000',
    fontWeight : '600',

  },
  titleImage:{
    position: 'relative',
    left:100,
    bottom: 0,
  },
  Route: {
    width : '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : 'center',
    paddingHorizontal : 20,
    paddingBottom: 30,

  },
  routerButton: {
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#a6a6a6',
  },
  routerButtonActive: {
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 0,
    borderRadius: 8,
    backgroundColor: '#000'
  },
  ButtonText: {
    color : '#000',
    fontSize: 16,
    fontWeight: '600'
  },
  ButtonTextActive:{
    color : '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  SliderHor:{

  },
  sliderContainer :{
    alignItems: 'center',
  },
  sliderImage :{
    width : '100%',
    height : width*.6,
    borderRadius : 8
    
  },
  productName : {
    color : '#000',
    marginVertical : 10,
    fontSize: 16,
    fontWeight : '400'

  },
  productPrice : {
    color : '#000',
    fontSize: 14,
    fontWeight : '600'
  },
  popularContainer:{
    width,
    alignItems:'center',
    flex:1,
    padding:10
  },
  popularTitleContainer :{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:width-20,
    padding:10,
    marginBottom: 20,
    
   
  },
  popularTitle:{
    color:'#000',
    fontSize: 18,
    fontWeight:'600'
  },
  popularSee:{
    fontSize: 16,
    fontWeight:'600',
    color: '#000'
  },
  popularList : {
    justifyContent: 'space-between',
    alignItems: 'center',
    width:width-20

  },
  item : {
    width: width*.5 - 10,
    padding : 10,
    

  },
  PopularImage : {
    width : '100%',
    height :width*.5,
    borderRadius: 8
  },
  popularName:{
    color : '#000',
    fontSize:16,
    fontWeight:'400'
  },
  popularPrice:{
    fontSize:14,
    fontWeight:'600',
    color : '#000',
  },
  
})
