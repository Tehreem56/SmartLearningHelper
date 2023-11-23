import React, { useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'

const TextInputComponent = (props) => {
  const { label, placeholder, secureTextEntry ,keyboardType} = props;
  const [value, setValue] = useState("");

  return (
    <View>
      <Text style={styles.Titlebox}>{label}</Text>
      <TextInput
        style={styles.Inputbox}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={"gray"}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  Titlebox: {
    marginTop: 5,
    color: "black",
  },
  Inputbox: {

    backgroundColor: "#D8D8D8",
    color: "black",
    borderRadius: 7,
    marginVertical: 2,
    paddingHorizontal: 12,
  },

});
export default TextInputComponent;
