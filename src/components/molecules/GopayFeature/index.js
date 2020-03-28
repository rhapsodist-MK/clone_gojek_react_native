import React from 'react'
import { View, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default ({img, title, onPress}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity onPress={onPress} styles>
        <Image source={img} />
        <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15, textAlign: 'center'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}