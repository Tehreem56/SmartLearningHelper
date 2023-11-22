import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme';
import { widthPercentageToDP as wp ,heightPercentageToDP as hp} from 'react-native-responsive-screen';
const SelectRole=({navigation}) =>{
  return (
    <SafeAreaView  style={styles.container}>
    <View >
        <Text 
           style={styles.title}>
            Who Are You?
        </Text>
       
        <View style={styles.midPart} >
            <TouchableOpacity
                onPress={()=> navigation.navigate('')}
              style={styles.btn}>
                    <Text 
                        style={styles.btntxt}
                    >
                         Student
                    </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=> navigation.navigate('TeacherSignUp')}
              style={styles.btn}>
                    <Text 
                        style={styles.btntxt}
                    >
                         Teacher
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=> navigation.navigate('ParentSignUp')}
              style={styles.btn}>
                    <Text 
                        style={styles.btntxt}
                    >
                         Parent
                    </Text>
            </TouchableOpacity>
           
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

},

btn:{
    backgroundColor:themeColors.bg2,
    borderRadius:5,
    margin:10,
    
},
btntxt:{
    color:"#191D88",
    alignSelf:"center",
    padding:12,
    fontSize:16,
    
},
midPart:{
    marginTop:23,
}

});
export default SelectRole;