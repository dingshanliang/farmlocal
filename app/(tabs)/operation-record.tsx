import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function OperationRecordScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>农事记录</Text>
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