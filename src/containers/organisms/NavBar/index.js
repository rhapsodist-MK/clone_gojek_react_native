import React, { Component } from 'react'
import { View } from 'react-native'
import NavBarIcon from '../../../components/molecules/NavBarIcon'
import { withNavigation } from 'react-navigation'

class NavBar extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
        <NavBarIcon onPress={() => navigation.navigate('Home') } title="Home" img={require('@assets/icon/home-active.png')} active />
        <NavBarIcon onPress={() => navigation.navigate('Orders') } title="Orders" img={require('@assets/icon/order.png')}/>
        <NavBarIcon onPress={() => navigation.navigate() } title="Help" img={require('@assets/icon/help.png')}/>
        <NavBarIcon onPress={() => navigation.navigate() } title="Inbox" img={require('@assets/icon/inbox.png')}/>
        <NavBarIcon onPress={() => navigation.navigate() } title="InAccountbox" img={require('@assets/icon/account.png')}/>
      </View> 
    )
  }
}

export default withNavigation(NavBar)