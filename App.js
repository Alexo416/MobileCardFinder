import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import CardSubmit from './components/CardSubmit';
import CustomHeader from './components/CustomHeader';
import CustomListView from './components/CustomListView';
import React, { useState } from 'react';
import CustomImage from './components/CustomImage';

export default function App() {
  const [content, setContent] = useState('null');

  async function getCard(text)
  {
    try {
      if(!text){
        Alert.alert("Error", "Please Enter A Card Name")
      }
      else{
        let url = 'https://api.scryfall.com/cards/named?fuzzy=' + text
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json)
        setContent(json.image_uris.large);
      }
    } catch (error) { console.error(error); }   
  }

  async function randomCard()
  {
    try {
        let url = 'https://api.scryfall.com/cards/random'
        const response = await fetch(url);
        const json = await response.json();
        //console.log(json)
        setContent(json.image_uris.large);
    } catch (error) { console.error(error); }   
  }


  return (
    <View style={styles.container}>
      <CustomHeader style={{flex:1}} title="Magic The Gathering Card Finder"/>

      <CustomImage text={content} />

      <View>
      <CardSubmit addText={getCard}/>
      </View>

      <View style={{flex:1}}>
      <TouchableOpacity style={styles.btn} onPress={() => randomCard()}>
      <Text style={styles.btnText}>Get Random Card</Text>
      </TouchableOpacity>
      </View>
     <View style={{flex:1}}>
      <CustomListView />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "space-between"
  },
  img:{
    width:430,
    height: 585,
  },
btn:{
    width:415,
    backgroundColor: "#2B253A",
    fontSize: 20,
    padding:10,
    borderColor: 'black'

},
btnText: {
    color: "white",
    fontSize: 20,
    textAlign: 'center'
}
});
