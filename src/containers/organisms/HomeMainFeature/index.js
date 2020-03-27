import React, { Component } from 'react'
import { View } from 'react-native'
import MainFeature from '@molecules/MainFeature'

export default class NavBar extends Component {
  render() {
    return (
      <View style={{flexDirection: "row", flexWrap: 'wrap', marginTop: 18, flexWrap: 'wrap'}}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18}}>
          <MainFeature title="GO-RIDE" img={require('@assets/icon/go-ride.png')} />
          <MainFeature title="GO-CAR" img={require('@assets/icon/go-car.png')} />
          <MainFeature title="GO-BLUEBIRD" img={require('@assets/icon/go-bluebird.png')} />
          <MainFeature title="GO-SEND" img={require('@assets/icon/go-send.png')} />
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}>
          <MainFeature title="GO-DEALS" img={require('@assets/icon/go-deals.png')} />
          <MainFeature title="GO-PULSA" img={require('@assets/icon/go-pulsa.png')} />
          <MainFeature title="GO-FOOD" img={require('@assets/icon/go-food.png')} />
          <MainFeature title="GO-MORE" img={require('@assets/icon/go-more.png')} />
        </View>
      </View>
    )
  }
}