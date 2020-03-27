import React from 'react'
import { View, Image, Text } from 'react-native'

export default ({img, title}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image source={img} />
      <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>{title}</Text>
    </View>
  )
}