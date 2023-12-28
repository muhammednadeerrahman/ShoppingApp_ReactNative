import { StyleSheet, Text, View,SafeAreaView, FlatList, Image,TouchableOpacity,Dimensions } from 'react-native'
import React,{useRef, useState} from 'react'
import Arrow from '../../assets/Assets/rightArrow.svg'
import Carousel,{Pagination} from 'react-native-snap-carousel';


const {width, height}= Dimensions.get('screen')
const itemHeight = Math.round(height * .7)

export default function SignUpPage({navigation}) {

    const [index, setIndex] = useState(1);  
    const isCarousal =useRef(null);
    const sliderData = [

       

        {
            id :1,
            image : require("../../assets/images/pinkTshirt.png"),
            
        },
        {
            id :2,
            image : require("../../assets/images/signup.png"),
            title : 'Fastacy',
            subTitle1 : 'Classy',
            subTitle2 : 'Fashion',
            titleImage : require("../../assets/Assets/Polygon.png")
                
        },

        {
            id :3,
            image : require("../../assets/images/signup.png"),
            
        }
        
    ]

    render_items = ({item})=>(
        <View style={ styles.main1}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.titleImage} source={item.image}
            resizeMode='contain'
         />
        <View style={styles.subTitleContainer} >
            <Text style={styles.classy} >{item.subTitle1}</Text>
            {item.titleImage && (
                <View style={styles.polygenContainer}>
                    <Text style={styles.FashionTitle}>{item.subTitle2}</Text>
                    <Image style={styles.polygon} source={item.titleImage} />
                            
                </View>
            )}

        </View>
    </View>
    )

    // const sliderHandle = (index) =>{ 
    //     setSlider(index)
        
    // }

  return (
    
        <SafeAreaView style={styles.main}>
            <Carousel
                ref= {isCarousal}
                data={sliderData}
                renderItem = {render_items}
                sliderWidth = {width}
                itemWidth = {width}
                sliderHeight = {itemHeight}
                firstItem = {1}
                onSnapToItem = {index => setIndex(index)}
            />
            <Pagination
                dotsLength = {sliderData.length}
                activeDotIndex = {index}
                carouselRef = {isCarousal}
                dotStyle = {{
                    width : 10,
                    height : 10,
                    borderRadius : 10,
                    marginHorizontal : -3,
                    backgroundColor: '#000'
                }}
                inactiveDotStyle ={{
                    backgroundColor:'#A6A6A6'
                }}
                inactiveDotScale={1}
            />

            <View style={styles.bottomContainer}>
                <View style={styles.leftBottom}>
                    <View style={styles.yellowContainer}>
                        <Text style={styles.category}>Tops</Text>
                        <Text style={styles.yellow}>----</Text>
                    </View>
                    
                    <Text style={styles.category}>Tshirts</Text>
                    <Text style={styles.category}>Hoddies</Text>
                    <Text style={styles.category}>126 + Categories</Text>
                </View>
                <View style={styles.RightBottom}>
                    <TouchableOpacity 
                        activeOpacity={0.3}
                        onPress={()=>navigation.navigate('Main')}
                        style={styles.SignUpButton}
                    >
                        <Text style={styles.SignupText}>Sign Up</Text>
                        <Arrow width={30} height ={40} />
                        

                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    main : {
        flex :1,
        width,
    },

    main1 :{
        width,
        paddingTop: 50,
        paddingLeft:30,
        flex :1,
    },
    active :{
        
    },
    inactive :{
        display : 'none'
    },
    title :{
        fontSize:35,
        color: '#000',
        fontWeight:'700',
        transform: [{rotate: '-20deg'}],
        position: 'absolute',
        top : 50,
        left: 30
    },
    titleImage :{
        width : '100%',
       flex :.8,
       position:'relative'
        
        
    },
    subTitleContainer :{
        position: 'absolute',
        right: 30,
        bottom:100

        
    },
    classy :{
        fontSize:35,
        paddingLeft : 50,
        color: '#000',
        fontWeight:'700',
       
    },
    polygenContainer :{
        flexDirection : 'row',
        alignItems: 'center'
    },
    FashionTitle :{
        fontSize:35,
        color: '#000',
        fontWeight:'700',
        marginRight : 15,
        
    },
    polygon :{
        height :35,
        width: 35,
    },
    middleContainer :{},
    activeButton :{
        width : 50,
        height : 50,
        backgroundColor : 'red'
    },
    sliderButton :{
        width : 50,
        height : 50,
        backgroundColor : 'blue'
    },
    bottomContainer :{
        padding : 30,
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems : 'flex-end'
    },
    leftBottom :{},
    yellowContainer: {
        flexDirection: 'row',
        alignItems : 'center'
    },
    yellow: {
        color :'#eba253',
        marginLeft : 10,
        marginTop : 10,
        fontSize : 12,
    },
    category :{
        marginTop : 10,
        fontSize : 12,
        color : '#A6A6A6'

    },
    RightBottom :{},
    SignUpButton :{
        paddingVertical : 10,
        paddingHorizontal : 30,
        borderBottomRightRadius :8,
        borderTopRightRadius :8,
        backgroundColor : '#000',
        flexDirection : 'row',
        alignItems : 'center',

    },
    SignupText :{
        color : '#fff',
        marginRight : 15
    },
})