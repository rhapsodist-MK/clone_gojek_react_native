import React, { Component } from 'react'
import { View, SafeAreaView, ScrollView} from 'react-native'

import SearchFeature from './src/components/molecules/SearchFeature'
import GoNews from './src/components/molecules/GoNews'
import GoInfo from './src/components/molecules/GoInfo'
import GoBanner from './src/components/molecules/GoBanner'

import HomeGoPay from '@organisms/HomeGoPay'
import ScrollableProducts from '@organisms/ScrollableProducts'
import HomeMainFeature from '@organisms/HomeMainFeature'
import NavBar from '@organisms/NavBar'


export default class App extends Component {
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