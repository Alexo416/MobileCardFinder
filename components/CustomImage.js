import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'


export default function CustomImage({text}) {

  return (
    <View style={{flex:10}}>
      <Image source={{uri: text }} style={styles.img}/>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img:{
      width:430,
      height: 585,
    }
  });