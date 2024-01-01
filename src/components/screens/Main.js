import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, Touchable,Dimensions, TouchableOpacity, View, ScrollView } from 'react-native'
import React,{useEffect, useRef, useState} from 'react'
import Carousel,{Pagination} from 'react-native-snap-carousel';

const {width, height}= Dimensions.get('screen')

export default function Main({navigation}) {
    const [data,setData]= useState([])
    const [index, setIndex] = useState(2);  


    useEffect(()=>{
        setData([
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
          ])


    },[])
    


  const isCarousal =useRef(null);

  const render_items=({item})=>(
    <TouchableOpacity onPress={()=>navigation.navigate('Product',{item})} style={styles.sliderContainer}>
        <Image style={styles.sliderImage} source={item.image} />
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.Main}>
        <View>
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
            sliderHeight = {width*.5}
            itemWidth = {width*.4}
            layout={'default'} 
            inactiveSlideScale = {.7}  
            firstItem={2}
            style={styles.carousel}
            vertical={false}
            onSnapToItem = {index => setIndex(index)}
            />
        </View>
      
       
            <View>
                <Text>Most Popular</Text>
                <Text>See All</Text>
            </View>
            <FlatList 
                
                data={data}
                renderItem={({item})=>(
                    <View style={styles.item}>
                        <Image style={styles.sliderImage} source={item.image} resizeMode='contain' />
                    </View>
                  )}
                numColumns={2}
                horizontal={false}

            />
      


      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Main: {
    
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
  sliderContainer :{
    width : '100%',
    alignItems : 'center',
    justifyContent : 'center',

  },
  sliderImage :{
    width : '100%',
    height : 250
    
  },
  carousel :{
   
  },
  list : {
    width,

    
  },
  item : {
    flex : 1

    

    




  },
  popularImage : {
    width : 200,
    
    height :200

  },
})
