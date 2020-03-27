import React, { Component } from 'react'
import { View, SafeAreaView, ScrollView} from 'react-native'

import SearchFeature from '@molecules/SearchFeature'
import GoNews from '@molecules/GoNews'
import GoInfo from '@molecules/GoInfo'
import GoBanner from '@molecules/GoBanner'

import HomeGoPay from '@organisms/HomeGoPay'
import ScrollableProducts from '@organisms/ScrollableProducts'
import HomeMainFeature from '@organisms/HomeMainFeature'
import NavBar from '@organisms/NavBar'

export default class Home extends Component {
  render() { 
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          <SearchFeature />
          <HomeGoPay />
          <HomeMainFeature />
          <View style={{height: 17, backgroundColor: '#f2f2f4', marginTop: 20}}></View>
          <GoNews />
          <GoInfo />
          <GoBanner />
          <ScrollableProducts />
        </ScrollView>
        <NavBar />
      </SafeAreaView>
    )
  }
}