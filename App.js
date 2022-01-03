import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, ScrollView,Dimensions } from 'react-native';
import * as Location from 'expo-location';

const {width : SCREEN_WIDTH} = Dimensions.get('window');
const API_KEY = "80a78bf4f23a76ca39f67e66beda86e8";

console.log(SCREEN_WIDTH) //days를 중앙에 배치할수가있다.
//props를 보고 공부하면됩니다!

export default function App() {
  const [city, setCity] = useState('Loading...')
  const [days, setDays] = useState([]);
  const [ok,setOk] = useState(true);
  const getWeather = async ()=>{
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if(!granted){ //허가
      setOk(false);
    }
    //정보를 가져오는것
    const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy : 5})
    const location = await 
    Location.reverseGeocodeAsync(
      {latitude,longitude},
      {useGoogleMaps : false})
      setCity(location[0].city);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}`)
      const json = await response.json();
      console.log('제이슨~~~',json)
      setDays(json.daily)
    }
  useEffect(()=>{
    getWeather();
  },[])

  return ( //레이아웃만들기 //부모컴포넌트 기준이기에 매우 중요
    <View style={styles.container}> 
     <View style={styles.city}>
     <Text style={styles.cityName}>{city}</Text>
     </View>
     <ScrollView pagingEnabled 
                 horizontal 
                 showsHorizontalScrollIndicator={false}
                 contentContainerstyle={styles.weather}> 
         {!days.length ? <View style={styles.day}>
         <ActivityIndicator color = 'whilte' size = 'large'/>
       </View>:
         (days.map((day,index) => {
        <View key ={index} style={styles.day} >
          <Text style={styles.temp}>{day.temp.day}</Text>
          <Text style={styles. description}>{day.weather[0].main}</Text>
        </View>
      }))}

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
      // backgroundColor : 'blue'
    },
    day:{
      // flex:1,
      // justifyContent : 'center',
      width:  SCREEN_WIDTH,
      alignItems : 'center',
      // backgroundColor : 'powderblue'
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


