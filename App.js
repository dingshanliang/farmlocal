import { NavigationContainer } from '@react-navigation/native';
import { Slot } from 'expo-router';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

console.log('App.js is being loaded');

export default function App() {
  console.log('Rendering App component');
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Slot />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}