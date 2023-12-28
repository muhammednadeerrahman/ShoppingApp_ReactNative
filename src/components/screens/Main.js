import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, Touchable,Dimensions, TouchableOpacity, View } from 'react-native'
import React,{useRef} from 'react'
import Carousel,{Pagination} from 'react-native-snap-carousel';

const {width, height}= Dimensions.get('screen')

export default function Main() {

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
  const isCarousal =useRef(null);
  render_items=({item})=>(
    <View style={styles.sldierContainer}>
      <Image style={styles.sliderImage} source={item.image} />
    </View>
  )

  return (
    <SafeAreaView style={styles.Main}>
      <View style={styles.Header}>
        <View style={styles.HeaderRight}>
          
        </View>
        <View style={styles.HeaderLeft}></View>
      </View>
      <View style= {styles.titleContainer}>
        <Text>Find your style</Text>
        <Image source={require('../../assets/Assets/vector.png')} />
      </View>
      <View style={styles.Route}>
        <TouchableOpacity style={styles.routerButton}>
           <Text style={styles.ButtonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.routerButton}>
           <Text style={styles.ButtonText}>Winter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.routerButton}>
           <Text style={styles.ButtonText}>Women</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.routerButton}>
           <Text style={styles.ButtonText}>EyeWear</Text>
        </TouchableOpacity>
      </View>
      
      <Carousel 
       ref= {isCarousal}
       data={data}
       renderItem = {render_items}
       sliderWidth = {width}
       itemWidth = {width}
       layout={'tinder'} 
       layoutCardOffset={`3`} 
   
   
      />

      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    // Add other styles as needed
  },
  Header: {
    // Styles for your header
  },
  HeaderRight: {
    // Styles for the right side of the header
  },
  HeaderLeft: {
    // Styles for the left side of the header
  },
  titleContainer: {
    // Styles for the title container
  },
  Route: {
    // Styles for the route container
  },
  routerButton: {
    // Styles for individual route buttons
  },
  ButtonText: {
    // Styles for the text inside the buttons
  },
  sldierContainer :{
    width,
    flex :1,
    alignItems : 'center'
  },
  sliderImage :{
    width : '50%',
    flex : .8
  },
})
