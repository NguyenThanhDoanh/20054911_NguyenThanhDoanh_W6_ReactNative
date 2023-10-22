import {View,Button, Image, Text, StyleSheet,TextInput, TouchableOpacity,} from 'react-native'
import { FlatList } from 'react-native-web';


function Screen3({navigation, route}){

    const pathImg = route.params

    console.log(pathImg);
    

    const DATA =[
        {
           
            imgXe: require('../assets/xexanh.png'),
            name: 'Pinarello',
            discount: '15% OFF | 350$',
            moneyDiscount: '499$',
            description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
        
        },
        {
         
            imgXe: require('../assets/xedo.png'),
            name: 'Pina Mountai',
            discount: '15% OFF | 350$',
            moneyDiscount: '499$',
            description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
        
        },
        {
            
            imgXe: require('../assets/xetim.png'),
            name: 'Pina Bike',
            discount: '15% OFF | 350$',
            moneyDiscount: '499$',
            description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
        
        },
        {

            imgXe: require('../assets/xedodo.png'),
            name: 'Pinarello',
            discount: '15% OFF | 350$',
            moneyDiscount: '499$',
            description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
        
        },
        {
           
            imgXe: require('../assets/xetimtim.png'),
            name: 'Pinarello',
            discount: '15% OFF | 350$',
            moneyDiscount: '499$',
            description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
        
        },
        {
           
            imgXe: require('../assets/xedo.png'),
            name: 'Pinarello',
            discount: '15% OFF | 350$',
            moneyDiscount: '499$',
            description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
        
        },
      
    ]
    const DATA1 =[
        {
           
            imgXe: require('../assets/xexanh.png'),
            name: 'Pinarello',
            discount: '15% OFF | 350$',
            moneyDiscount: '499$',
            description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
        
        },
        
      
    ]

    return(

        <View style={styles.container}>
          
            
            <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#fdecec', borderColor: 'black', borderRadius: 30, borderWidth: 1, marginHorizontal: 10, }}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Screen2')}}>
                    <Image style={{width: '30px', height: '30px', marginTop: 25, marginRight: 30, borderWidth: 1, borderColor: 'black'}} source={require('../assets/back.png')}></Image>
                </TouchableOpacity>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width:'200px', height:'200px', borderRadius:20, }} source={pathImg == undefined ? require('../assets/xexanh.png'): pathImg.pathImg}></Image>
                </View>
                
                
            </View>
           
           <View style={{flex: 1,alignItems: 'flex-start', justifyContent: 'flex-start', padding: 30}}>
                <Text style={{fontSize: 24, fontWeight: 'bold', }}>Pina Mountain</Text>
                <View style={{flex: 0.1}}></View>
                <View style={{flexDirection: 'row',}}>
                    <Text style={{color: '#C4C4C4', fontSize: 20, paddingRight: 30}}>15% OFF I 350$</Text>
                    <Text style={{color: '#C4C4C4',fontSize: 20}}><del>499S</del></Text>
                </View>
                <View style={{flex: 0.2}}></View>
                <Text style={{fontSize: 20, color: 'black'}}>Description</Text>
                <View style={{flex: 0.2}}></View>
                <Text style={{color: '#C4C4C4',fontSize: 17}}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
           </View>
           

               
    
            
           
                    

             
     
           <View style={{flex: 0.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                <Image style={{width:'40px', height:'40px' }} source={require('../assets/tim.png')}></Image>
                
                <Button onPress={()=>{navigation.navigate('Screen1')}} title={'Add to card'} color ='#e94141' style={{flex: 1}} ></Button>
           </View>
          
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    top:{
        flex: 1
    }
})

export default Screen3;

