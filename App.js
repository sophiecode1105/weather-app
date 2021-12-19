import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView,Dimensions } from 'react-native';

const {width : SCREEN_WIDTH} = Dimensions.get('window');

console.log(SCREEN_WIDTH)


export default function App() {
  return ( //레이아웃만들기 //부모컴포넌트 기준이기에 매우 중요
    <View style={styles.container}> 
     <View style={styles.city}>
     <Text style={styles.cityName}>Seoul</Text>
     </View>
     <ScrollView horizontal contentContainerstyle={styles.weather}> 
       <View style={styles.day}>
        <Text style = {styles.temp}>27</Text>
        <Text style = {styles.description}>Sunny</Text>
       </View>
       <View style={styles.day}>
        <Text style = {styles.temp}>27</Text>
        <Text style = {styles.description}>Sunny</Text>
       </View>
       <View style={styles.day}>
        <Text style = {styles.temp}>27</Text>
        <Text style = {styles.description}>Sunny</Text>
       </View>
       <View style={styles.day}>
        <Text style = {styles.temp}>27</Text>
        <Text style = {styles.description}>Sunny</Text>
       </View>
     </ScrollView>
    </View>
  );
}
  const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor : 'pink'
    },
    city: {
      flex: 1.2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    cityName:{
      fontSize : 68,
      fontWeight : '500'
    },
    weather: {
      // flex:3, 없애줘야한다. 이유 : 스크롤뷰가 스크린보다 커져야지 효과가 자연스럽게 보여짐
      backgroundColor : 'blue'
    },
    day:{
      // flex:1,
      // justifyContent : 'center',
      width:  SCREEN_WIDTH,
      alignItems : 'center',
      backgroundColor : 'powderblue'
    },
    temp:{
      marginTop: 40,
      fontSize : 170,
    },
    description:{
      marginTop: 10,
      fontSize :60 
    }
  })
//view = flexbox
//웹이서는 display : flex; 쓰고 felx-direction
//웹에서는 Row
//모바일 column이 기본값
//scrollview. 사이즈가 조금 이상해짐을 관찰할 수있다.style이 아닌 contentstyle


