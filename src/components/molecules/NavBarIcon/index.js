import React from 'react'
import { View, Image, Text } from 'react-native'

export default ({title, img, active}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image style={{width:26, height: 26}} source={ img } />
      <Text style={{fontSize: 10, marginTop: 4, color: active ? '#43AB4A' : '#545454'}}>{title}</Text>
    </View>
  )
}