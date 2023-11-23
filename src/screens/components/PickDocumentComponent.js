import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { themeColors } from '../../theme';
import DocumentPicker from 'react-native-document-picker';

const PickDocumentComponent = () => {
  const [selectedDocument, setSelectedDocument] = useState([]);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    return () => {
      // Cleanup: Set isMounted to false when the component is unmounted
      setIsMounted(false);
    };
  }, []);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      if (isMounted) {
        setSelectedDocument(result);
      }

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Document picking canceled.');
      } else {
        console.log('Error picking document:', err);
      }
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={pickDocument}>
        <Text style={styles.btntxt}>Upload Your Resume/CV</Text>
      </TouchableOpacity>
      {selectedDocument.map((document, index) => (
        <Text style={styles.txt} key={index}>{document.name}</Text>
      ))}
    </View>
  );
};

export default PickDocumentComponent;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: themeColors.bg,
    borderRadius: 6,
    paddingVertical: 10,
    marginTop: 6,
  },
  btntxt: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
    alignSelf: 'center',
  },
  txt:{
    color:"black",
    margin:2,
    fontSize:11
  }
});
