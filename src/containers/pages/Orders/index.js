import React, { Component } from 'react'
import { View, Text, Button} from 'react-native'

import NavBar from '@organisms/NavBar'

export default class Orders extends Component {
  render() { 
    const { navigation } = this.props
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Text>Order</Text>
          <Button 
            title="Go to detail"
            onPress={() => navigation.navigate('OrderDetail')}
          />
        </View>
        <NavBar />
      </View>
    )
  }
}