import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView } from 'react-native';
import { themeColors } from '../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TeacherSignUp = ({ navigation }) => {

  return (
    <ScrollView style={{ backgroundColor: themeColors.bg, flex: 1 }}>
      <SafeAreaView style={styles.container1}>
        <View style={styles.upperPart}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SelectRole')}
            style={styles.arrow}
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.imgview}>
          <Text style={{ color: themeColors.bg2, alignSelf: "center", fontSize: 20, fontWeight: "600" }}>Teacher Sign Up</Text>
          <Image source={require('../assets/images/signup.png')}
            style={styles.img} />
        </View>
      </SafeAreaView>
      <View style={styles.container2}>
        <ScrollView>
          <View style={styles.formview}>
            <Text style={styles.Titlebox}>Full Name</Text>
            <TextInput
              style={styles.Inputbox}
              placeholder='Enter Name'
            />
           
           <Text  style={styles.Titlebox}>Email Address</Text>
            <TextInput
             style={styles.Inputbox}
                
               
                placeholder='Enter Your Email'
            /><Text  style={styles.Titlebox}>Password</Text>
            <TextInput
             style={styles.Inputbox}
                
              secureTextEntry
                placeholder='Enter Password'
            />
            <Text  style={styles.Titlebox}>Years of Experience</Text>
            <TextInput
             style={styles.Inputbox}
                
              secureTextEntry
                placeholder='Enter Your Years of Experience'
            />
            <Text  style={styles.Titlebox}>Contact No.</Text>
            <TextInput
             style={styles.Inputbox}
                
              secureTextEntry
                placeholder='Enter Your Phone Number'
            />
            <Text  style={styles.Titlebox}>Major Subject</Text>
            <TextInput
             style={styles.Inputbox}
                
            
                placeholder='Enter Major Subject'
            />
            <Text  style={styles.Titlebox}>Qualification</Text>
            <TextInput
             style={styles.Inputbox}
                
              
                placeholder='Enter Qualification'
            />
            <TouchableOpacity
              style={styles.btn}
            >
              <Text style={styles.btntxt}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Text style={styles.txt}>Or</Text>
        <View style={styles.iconView}>
          <TouchableOpacity >
            <Image source={require('../assets/icons/google.png')}
              style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.bottonPart}>
          <Text style={styles.bottomtxt}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linkbtn}> Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    iconView:{
        //className="flex-row justify-center space-x-12"
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
        height:hp(17),
        marginBottom:5,
    },
     
    upperPart:{
        flexDirection:"row",
        justifyContent:"flex-start"
    },
    
    imgview:{
    marginTop:90
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
        flex:0.9,
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
    marginTop:15,
    
    
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
    marginTop:2
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

export default TeacherSignUp;
