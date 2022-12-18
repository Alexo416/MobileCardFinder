import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default function CustomHeader({title}) {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
      </View>
    )
  
}

const styles = StyleSheet.create({
header:{
  alignContent: "center",
  backgroundColor: "#2B253A",
  width: 413,
  paddingTop: 40
},
text:{
  fontSize: 23,
  color: "white",
  textAlign:"center"
}
})