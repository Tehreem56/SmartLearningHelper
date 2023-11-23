import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../../theme';

const ImagePickerComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });

      setSelectedImage({ uri: image.path });
    } catch (error) {
      console.log('Error picking image: ', error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => pickImage()} style={styles.imgContainer}>
        {selectedImage && <Image source={selectedImage} style={styles.img} />}
        {!selectedImage && (
          <Text style={styles.btn}>Pick Profile Picture</Text>
        )}
      </TouchableOpacity>
      {selectedImage && (
        <Text style={styles.txt}>Register Yourself!</Text>
      )}
    </View>
  );
};

export default ImagePickerComponent;

const styles = StyleSheet.create({
  imgContainer: {
    alignItems: 'center',
  },
  img: {
    width: wp(20),
    height: hp(10),
    borderRadius: 35,
    marginBottom: 6,
  },
  btn: {
    backgroundColor: themeColors.bg2,
    borderRadius: 6,
    padding: 15,
    paddingHorizontal:89,
    color:themeColors.bg3,
    fontWeight:"600",
  },
  txt: {
    color: themeColors.bg3,
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    marginLeft: 90,
    marginTop: 20,
  },
  buttonText: {
    color: themeColors.bg3,
    fontWeight: '600',
    fontSize: 17,
    alignSelf: 'center',
  },
  imgContainer:{
    alignSelf:"flex-start"
  }
});
