import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CropManagementScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>作物管理</Text>
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
});