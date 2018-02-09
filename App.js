import React from 'react';
import { StyleSheet, Text, View,FlatList, TextInput, Button, ScrollView } from 'react-native';
import ListItem from './src/components/ListItem'
import placeImage from './src/assets/houston-image.png'
import PlaceList from './src/components/PlaceList'
import PlaceDetail from './src/components/PlaceDetail'

export default class App extends React.Component {

  state = {
    placeName : '',
    image : placeImage,
    places : [],
    selectedPlace : null
  }

  // fired when the text input gets changed
  placeNameChanged = (value) => {

    this.setState({
      placeName : value // value represents the text in the textbox
    })

  }

  // event fired when you press the button
  addButtonPressed = () => {

    this.setState({
      ...this.state,
      places : this.state.places.concat(
        {
           key : Math.random(),
           name : this.state.placeName,
           image : this.state.image
        }
    )
    })

  }


  itemSelectedHandler = (key) => {

      const place = this.state.places.find(place => (
          place.key == key
      ))

      this.setState({
        ...this.state,
        selectedPlace : place
      })

  }

  placeDeletedHandler = () => {

  }

  modelClosedHandler = () => {
    this.setState({
      selectedPlace : null 
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TextInput placeholder = "Enter Place Name" style={styles.inputText} onChangeText={this.placeNameChanged} />
          <Button onPress={this.addButtonPressed} style={styles.addButton} title = "Add" />
        </View>

        <View style={styles.placeItemContainer} >
          <PlaceList places = {this.state.places} onItemSelected = {this.itemSelectedHandler} />

          <PlaceDetail onItemDeleted ={this.placeDeletedHandler} onModelClosed={this.modelClosedHandler} selectedPlace = {this.state.selectedPlace} />

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  placeItemContainer : {
      width: "100%"
  },

  inputText : {
      width : "70%",
      padding: 10

  },

  addButton :{
    width : "30%"
  },

  innerContainer : {
    width : "100%",
    flexDirection : "row",
    justifyContent: "space-between",
    alignItems : "center"

  }

});
