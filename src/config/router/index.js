import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import {Home, NewsDetail, Orders, OrderDetail } from '@pages'

const HomeStack = createStackNavigator({
  Home,
  NewsDetail
}, {
  headerMode: 'none',
  initialRouteName: 'Home'
})

const OrderStack = createStackNavigator({
  Orders,
  OrderDetail
}, {
  headerMode: 'none',
  initialRouteName: 'Orders'
})


const Router = createSwitchNavigator({
  HomeStack,
  OrderStack
}, {
  headerMode: 'none',
  initialRouteName: 'HomeStack'
})

export default createAppContainer(Router)