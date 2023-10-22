import {View,Button,Image,TextInput, Text, StyleSheet, TouchableOpacity} from 'react-native'




function Screen1({navigation}){
    return(
        <View style = {styles.container}>
            
            <View style = {styles.top}>
               <Text style={{fontWeight: 'bold', fontSize:20, fontFamily: 'Segoe Script', }}>A premium online store for</Text>
               <Text style={{fontWeight: 'bold', fontSize:20, fontFamily: 'Segoe Script', }}>sporter and their stylish choice</Text>
            </View>
            <View style = {styles.center}>
                <View style = {styles.center1}>
                    <Image style={{width: '80%', height: '80%', borderRadius: '20px', borderWidth: 1, borderColor: 'black',}} source={require('../assets/xexanh.png')}></Image>
                </View>
                <View style = {styles.center2}>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>POWER BIKE SHOP</Text>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>SHOP</Text>
                </View>
                
            </View>
           
           
            
            <View style = {styles.bottom}>        
                <Button onPress={()=> {navigation.navigate('Screen2')}} title='Get Started' color ='#e94141' style={{flex: 1, }}/>             
            </View>
        </View>

    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f9f7f6'
    },
    top:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    center:{
        flex: 3,
      
       
    },
    center1:{
        flex: 4.2,
        borderColor: '#f7e5e4',
        borderRadius: 40,
        borderWidth: 1,
        backgroundColor: '#f7e5e4',
        alignItems: 'center', 
        justifyContent: 'center',
        marginHorizontal: 10
    },
    center2:{
        flex: 0.5,
        alignItems: 'center', 
        justifyContent: 'center',
        paddingTop: 15
    },
    bottom:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
        borderRadius: 20,
        overflow: 'hidden'
       
        

       
    },
    
    
})


export default Screen1;