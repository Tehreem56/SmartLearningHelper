import { View, Text, Image, TouchableOpacity ,StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
const WelcomeScreen = ({ navigation }) => {

  return (
    <SafeAreaView  style={styles.container}>
        <View >
            <Text 
               style={styles.title}>
                Let's Get Started!
            </Text>
            <View >
                <Image source={require("../assets/images/welcome.png")}
                    style={styles.img} />
            </View>
            <View style={styles.midPart} >
                <TouchableOpacity
                    onPress={()=> navigation.navigate('SelectRole')}
                  style={styles.btn}>
                        <Text 
                            style={styles.btntxt}
                        >
                            Sign Up
                        </Text>
                </TouchableOpacity>
                <View style={styles.bottonPart}>
                    <Text style={styles.txt}>Already have an account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <Text style={styles.linkbtn}>  Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: themeColors.bg
    },
    title: {
      color: 'white',
      fontSize: 29,
      alignSelf:"center",
      fontWeight: 'bold',
      marginTop:hp(1),
    
    },
    img:{
        width:wp(70)  ,
        height:hp(30),
        marginTop:hp(1),
    },
    btn:{
        backgroundColor:themeColors.bg2,
        borderRadius:5,
        
    },
    btntxt:{
        color:"dark-blue",
        alignSelf:"center",
        padding:12,
        fontSize:16,
        
    },
    midPart:{
        marginTop:hp(6.6),
    }
    ,txt:{
      color:"white",
      marginLeft:wp(7),
    },
    bottonPart:{
     marginTop:hp(1.1)
    },
    linkbtn:{
        color:themeColors.bg2,
        position:"absolute",
        marginTop:hp(-2.6),
        marginLeft:wp(49),
    }
  });
  
  export default WelcomeScreen;
  