import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'

export default ({title, img, active, onPress}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={onPress}>
        <Image style={{width:26, height: 26}} source={ img } />
        <Text style={{fontSize: 10, marginTop: 4, color: active ? '#43AB4A' : '#545454'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}