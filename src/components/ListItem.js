
import React from 'react'
import {StyleSheet, Text, View,Image, TouchableWithoutFeedback,TouchableOpacity, TouchableHighlight} from 'react-native'

const listItem = (props) => (
  <TouchableOpacity onPress={props.onItemSelected}>
    <View style={styles.listItem}>
      <Image style={styles.imageItem} source={props.place.image}></Image>
      <Text>{props.place.name}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({

  listItem : {
    width: "100%",
    padding: 10,
    backgroundColor : "#eee",
    margin : 5,
    flexDirection : "row"

  },

  imageItem : {
    width: 50,
    height: 50,
    marginRight: 10
  }

})

export default listItem
