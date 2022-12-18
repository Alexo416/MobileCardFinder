import { SectionList, StyleSheet, Text, View } from 'react-native';
import React from 'react'

export default function CustomListView() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'Possible Card Suggestions', data: ['Grand Abolisher', 'Black Lotus', 'Lightning Bolt', 'Snapcaster Mage', 'Atraxa, Praetors Voice', "Emrakul, the Aeons Torn", ]},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  sectionHeader: {
    width:460,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#5F4F66'
  },
  item: {
    fontSize: 18,
    backgroundColor: '#a881af',
  },
  container: {
    backgroundColor: '#fff',
    marginTop: -12.5
  },
})