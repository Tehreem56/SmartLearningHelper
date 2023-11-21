import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('SecondScreen')}>
        <Text style={styles.tag}>Smart Learning Helper</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
  },
  tag: {
    color: '#0D2E80',
    fontSize: 29,
    marginTop:-190,
    fontWeight: 'bold',
  
  },
});

export default FirstScreen;
