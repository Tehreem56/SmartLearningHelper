
import { View, Text, StyleSheet,  SafeAreaView, ScrollView } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const SecondScreen = ({ navigation }) => {
  
  const welcomeNames = [
    'Tehreem Mumtaz',
    'Uzma Qadeer',
    'Muzzamil Rani',
    'Nimra Allah Yar',
  ];

  
  const renderWelcomeNames = () => {
    return welcomeNames.map((name, index) => {
      return (
        <View key={index} style={styles.bulletContainer}>
          <Text style={styles.bullet}>{'\u2022'}</Text>
          <Text style={styles.welcomeName}>{name}</Text>
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
        
          <View style={{ height: hp(19), justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#0D2E80', fontSize: 30, fontWeight: 'bold' }}>Group Members</Text>
          </View>

          <View style={{ marginTop: 0, paddingHorizontal: wp(9) }}>
            {renderWelcomeNames()}
          </View>

    
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({


  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(1),
  },
  bullet: {
    fontSize: hp(2),
    marginRight: wp(2),
    color: '#0D2E80',
  },
  welcomeName: {
    fontSize: hp(2),
    color: '#0D2E80',
  },
});

export default SecondScreen;
