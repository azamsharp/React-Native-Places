import React from 'react'
import {StyleSheet, Text,FlatList, View,Image, TouchableWithoutFeedback,TouchableOpacity, TouchableHighlight} from 'react-native'
import ListItem from './ListItem'

const placeList = (props) => (

  <FlatList data={props.places}
  renderItem={(info) => (
    <ListItem place = {info.item} onItemSelected = {() => props.onItemSelected(info.item.key)}  />
  )}
   />

)


export default placeList
