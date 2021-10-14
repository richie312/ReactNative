import { StatusBar } from 'expo-status-bar';
import React from 'react';
import  { useState } from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [outputtext, setoutputtext] = useState("Type here to change the text.")
  return (
    
    <View style={styles.container}>
      <Text>jhjhjh</Text>
      <Button title="Change Text"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
