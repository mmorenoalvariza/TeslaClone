import { StatusBar } from 'expo-status-bar';
import { useBattery, useBatteryLevel } from '@use-expo/battery';
import { useEffect, useState } from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import * as Battery from 'expo-battery';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import * as LocalAuthentication from 'expo-local-authentication';
LocalAuthentication.AuthenticationType.FINGERPRINT;
export default function ModalScreen() {
  const [level, callback] = useBatteryLevel();
  const handleAuth = async () => {
    const auth = await LocalAuthentication.authenticateAsync();
    console.warn(auth);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />
      <Text>Battery: {level}</Text>
      <TouchableOpacity style={{ width: 100 }} onPress={handleAuth}><Text>Autenticate</Text></TouchableOpacity>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
