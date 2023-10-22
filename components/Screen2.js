import {View,ScrollView,Button, Image, Text, StyleSheet,TextInput, TouchableOpacity,} from 'react-native'
import { FlatList } from 'react-native-web';
import { useState } from "react";

const data =[
    {
        imgTim: require('../assets/tim.png'),
        imgXe: require('../assets/xexanh.png'),
        name: 'Pinarello',
        price: '1800',
        type: 'mountain',
    
    },
    {
        imgTim: require('../assets/tim.png'),
        imgXe: require('../assets/xedo.png'),
        name: 'Pina Mountai',
        price: '1700',
        type: 'mountain',
    
    },
    {
        imgTim: require('../assets/tim.png'),
        imgXe: require('../assets/xetim.png'),
        name: 'Pina Bike',
        price: '1500',
        type: 'roadbike',
    
    },
    {
        imgTim: require('../assets/tim.png'),
        imgXe: require('../assets/xedodo.png'),
        name: 'Pinarello',
        price: '1900',
        type: 'roadbike',
    
    },
    {
        imgTim: require('../assets/tim.png'),
        imgXe: require('../assets/xetimtim.png'),
        name: 'Pinarello',
        price: '2700',
        type: 'roadbike',
    
    },
    {
        imgTim: require('../assets/tim.png'),
        imgXe: require('../assets/xedo.png'),
        name: 'Pinarello',
        price: '1350',
        type: 'mountain',
    
    },
  
]
const Item = ({name, imgXe, price, navigation}) => (
    <TouchableOpacity style={styles.productWrapper} onPress={() => {
   
        navigation.navigate('ProductDetail', {imgXe: imgXe, name: name, price: price})
        }}>
        <Image style={styles.imgXe} source={imgXe} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
    </TouchableOpacity>
)


function Screen2({navigation}){
    const [flag, setFlag] = useState(0)
    const [prdt, setPrdt] = useState([])

    
    return(
        <View style={styles.container}>
            <View style = {styles.top}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 25, fontWeight: 'bold', color: '#ea4b4b', flex: 1, padding: 20}}>The world’s Best Bike</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Screen1')}}>
                        <Image style={{width: '30px', height: '30px', marginTop: 25, marginRight: 30, borderWidth: 1, borderColor: 'black'}} source={require('../assets/back.png')}></Image>
                    </TouchableOpacity>
                   
                </View>
                
                <View style={{flex: 1,flexDirection: 'row', backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'space-around'}}>
                    <TouchableOpacity onPress={()=>{setFlag(0)}}>
                        <Text style={{color:`${flag==0 ? 'red' : '#ccc'}`}}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setFlag(1) 
                        setPrdt(data.filter((data)=>data.type === 'roadbike'))}}>
                        <Text style={{color: `${flag == 1 ? 'red' : '#ccc'}`}}>Roadbike</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setFlag(2)
                    setPrdt(data.filter((data) => data.type === 'mountain'))
                    }}>
                    <Text style={{color: `${flag == 2 ? 'red' : '#ccc'}`}}>Mountain</Text>
                    </TouchableOpacity>
                    
                  
                </View>
                
                
            </View>
            <ScrollView style={{flex: 4, }} >
                <FlatList data={flag == 0 ? data : prdt} keyExtractor={item => item.price} numColumns={2} renderItem={({item})=>{
                    return(
                        <View style={{backgroundColor: '#FFFFFF' , marginHorizontal: 20 }}>
                            <TouchableOpacity style={{flexDirection: 'row'}} onPress={()=>{navigation.navigate('Screen3')}}>
                                <Image source={item.imgTim} style={{width: '15px', height: '15px', }}></Image>
                                <Image source={item.imgXe} style={{width: '140px', height: '140px',}}></Image>
                                
                            </TouchableOpacity>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{color:'#8d8782',fontSize: 16,fontWeight: 'bold'}}>{item.name}</Text>
                                <Text style={{fontSize: 16, fontWeight: 'bold'}}>$({item.price})</Text>
                            </View>
                           
                            
                        </View>
                    )
                }}>

                </FlatList>
                
                
            </ScrollView>


            
        </View>
    )
  
            }
 export default Screen2;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    top:{
        flex:1,
    }

    
})



