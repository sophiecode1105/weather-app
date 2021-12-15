import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <view style = {{width:100,heightL100,backgroundcolor : "tomato" }}></view>
      <view style = {{width:100,heightL100,backgroundcolor : "teal" }}></view>
      <view style = {{width:100,heightL100,backgroundcolor : "orange" }}></view> 
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
  text : {
    fontSize :28,
    color : red
  }
});
