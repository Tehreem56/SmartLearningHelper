import { View, Text, TouchableOpacity, Image, TextInput ,StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TextInputComponent from './components/TextInputComponent';

const  LoginScreen=({navigation})=> {
  return (
<ScrollView style={{backgroundColor:themeColors.bg , flex:1}}>
        
        <SafeAreaView style={styles.container1}>
          <View style={styles.upperPart}>
              <TouchableOpacity 
                  onPress={()=> navigation.goBack()}
                 
                  style={styles.arrow}
              >
                  <ArrowLeftIcon size="20" color="black" />
              </TouchableOpacity>
             
          </View>
         <View style={styles.imgview}>
         <Text  style={{color:themeColors.bg2, alignSelf:"center",fontSize:20,fontWeight:"600", marginBottom:12}}>Log In</Text>
              <Image source={require('../assets/images/login.png')} 
                  style={styles.img} />
          </View>
        </SafeAreaView>
  
  
  
  
       
        <View 
          style={styles.container2}
        >
          <View style={styles.formview}>
  
                <TextInputComponent label="Email Address" placeholder="john23@gmail.com" secureTextEntry={false} keyboardType="default"/>
              <TextInputComponent label="Password" placeholder="123@john.smith" secureTextEntry={true} keyboardType="default"/>
            
              <TouchableOpacity onPress={()=> navigation.navigate('')}>
                          <Text style={styles.forgetpass}>Forget Password?</Text>
                      </TouchableOpacity>
             
              <TouchableOpacity
                 style={styles.btn}
              >
                  <Text style={styles.btntxt}>
                      Log In
                  </Text>
              </TouchableOpacity>
          </View>
      
          <View style={styles.bottonPart}>
                      <Text style={styles.bottomtxt}>Already have no account?</Text>
                      <TouchableOpacity onPress={()=> navigation.navigate('SelectRole')}>
                          <Text style={styles.linkbtn}>Sign In</Text>
                      </TouchableOpacity>
                  </View>
        </View>
      
      </ScrollView>
    )
  }
  
  const styles = StyleSheet.create({
    forgetpass:{
      color:themeColors.bg3,
      marginLeft:5,
      marginTop:3,
      fontSize:11,
    },
      iconView:{
          flexDirection:"row",
          justifyContent:"center",
         
         
      },
      icon:{
      height:hp(5),
       width:wp(10)
      },
      txt:{
  
         
          fontWeight:"bold",
          alignSelf:"center",
          marginBottom:10,
          marginTop:-10,
      },
      formview:{
          margin:30,
      }
      ,
      container1: {
        flex: 0.5,
      
        alignItems: 'center',
        backgroundColor: themeColors.bg
      },
    
      img:{
          width:wp(50)  ,
          height:hp(22),
          marginBottom:5,
          marginTop:9,
      },
       
      upperPart:{
          flexDirection:"row",
          justifyContent:"flex-start"
      },
      
      imgview:{
      marginTop:120
      },
      arrow:{
          position:"absolute",
          marginTop:20,
          marginLeft:-160,
          backgroundColor:themeColors.bg2,
          padding:8,
          borderTopEndRadius:12,
          borderBottomStartRadius:12,
      },
      container2: {
          flex:0.4,
          borderTopLeftRadius: 50,
           borderTopRightRadius: 50,
          
          backgroundColor: "white"
        },
        Titlebox:{
         marginTop:5,
         color:"gray",
        },
        Inputbox:{
          
          backgroundColor:"#D8D8D8",
          color:"gray",
          borderRadius:7,
          marginVertical:2,
          paddingHorizontal:12,
        },
      
  btn:{
      backgroundColor:themeColors.bg2,
      borderRadius:7,
      marginTop:13,
      
      
  },
  btntxt:{
      color:"#191D88",
      alignSelf:"center",
      paddingVertical:12,
      fontSize:16,
      paddingHorizontal:45,
      fontWeight:"500"
      
  },
  bottonPart:{
    
      marginBottom:180,
     
     },
     linkbtn:{
         color:themeColors.bg3,
         position:"absolute",
         marginTop:-19,
         marginLeft:245,
     },bottomtxt:{
     alignSelf:"center",
     marginLeft:-30,
     }
    });
export default LoginScreen;