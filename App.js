import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return ( //레이아웃만들기 //부모컴포넌트 기준이기에 매우 중요
    <View style={{ flex : 1 }}> 
      <View style = {{ flex: 1, backgroundColor: "tomato"}}></View>
      <View style = {{ flex: 1.5, backgroundColor: "teal"}}></View>
      <View style = {{ flex: 1, backgroundColor: "orange"}}></View> 
    </View>
  );
}
//view = flexbox
//웹이서는 display : flex; 쓰고 felx-direction
//웹에서는 Row
//모바일 column이 기본값


