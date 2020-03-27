import React from 'react'
import { View, Image, Text } from 'react-native'

export default ({title, img}) => {
  return (
    <View style={{ width: `${100/4}%` , alignItems: 'center', marginTop: 18}}>
      <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={img} />
      </View>
      <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>{title}</Text>
    </View>
  )
}