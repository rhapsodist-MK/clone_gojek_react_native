import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from '@pages/Home'

const Router = createStackNavigator({
  Home: {
    screen: Home
  }
}, {
  headerMode: 'none'
}) 

export default createAppContainer(Router)