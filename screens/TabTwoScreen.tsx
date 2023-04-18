import { useState } from 'react';
import { Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useFormik } from 'formik';


export default function TabTwoScreen() {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: { name: '' },
    onSubmit: values => {
      console.log('value', values);
      alert(`Email: ${values.name}`)
    }
  });
  return (
    <View style={styles.container}>
      <View style={styles.textInput} >
        <TextInput underlineColorAndroid={'transparent'} onChangeText={handleChange('name')} placeholder='Enter name' keyboardType='visible-password' secureTextEntry />
      </View>
      <TouchableOpacity
        style={{
          borderRadius: 8,
          height: 50,
          width: 245,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e94832'
        }}
        activeOpacity={0.7} onPress={() => handleSubmit()} ><Text
          style={{ fontSize: 18, color: 'white', textTransform: 'uppercase' }}
        >Login</Text></TouchableOpacity>

    </View>
  );
}
const validationColor = '#223e4b';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderRadius: 8,
    borderColor: validationColor,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 8
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
