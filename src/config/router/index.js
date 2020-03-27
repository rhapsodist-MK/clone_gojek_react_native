import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import {Home, NewsDetail } from '@pages'

const Router = createStackNavigator({
  Home: {
    screen: Home
  },
  NewsDetail: {
    screen: NewsDetail
  }
}, {
  headerMode: 'none',
  initialRouteName: 'Home'
}) 

export default createAppContainer(Router)