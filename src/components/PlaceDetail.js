import React from 'react'
import {StyleSheet, Text, View, Image, Modal, Button} from 'react-native'

const placeDetail = props => {

  let modalContent = null

  if(props.selectedPlace) {
    modalContent = (
      <View>
        <Image style={{width:"100%", height: 300}} source = {props.selectedPlace.image} />
        <Text>{props.selectedPlace.name}</Text>
      </View>
    )
  }


return (

  <Modal visible={props.selectedPlace !== null} animationType="slide">
     <View style={styles.container}>
       {modalContent}
     </View>
     <View>
      <Button title="Delete" onPress={props.onItemDeleted} />
      <Button title="Close" onPress={props.onModelClosed} />
     </View>
   </Modal>
)

}

const styles = StyleSheet.create({

  container : {
    margin: 22
  },

  placeName : {
    fontWeight: "bold"
  }

})

export default placeDetail
