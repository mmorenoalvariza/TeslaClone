import React from 'react';
import { ImageBackground, Pressable, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' style={styles.background} source={require('../assets/images/Model3.jpeg')} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Model 3</Text>
        <Text style={styles.subtitle}>Starting at $69,000</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity activeOpacity={0.7} style={styles.buttonContainer} onPress={() => navigation.navigate('TabTwo')}><Text style={styles.button}>Order now</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Modal')}><Text style={styles.button}>View details</Text></TouchableOpacity>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'transparent',
    top: '15%'
  },
  background: { width: '100%', height: '100%', position: 'absolute' },
  actions: {
    height: '13%',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    marginHorizontal: '10%',
    width: '100%',
    position: 'absolute',
    bottom: 50
  },
  buttonContainer: {
    // flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10
  },
  button: {
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  container: {
    flex: 1,
    alignItems: 'center',

  },
  title: {
    color: '#000000',
    fontSize: 40,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#000000',
    fontSize: 16,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
