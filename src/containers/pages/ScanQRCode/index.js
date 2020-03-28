import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RNCamera } from 'react-native-camera'

const IconWithText = ({title}) => {
  return (
    <View>
      <View style={{width: 60, height: 60, backgroundColor: 'green', borderRadius: 60}}/>
      <Text style={{maxWidth: 50, textAlign: 'center', marginTop: 10}}>{title}</Text>
    </View>
  )
}

const IconAction = () => {
  return (
    <View style={{width: 35, height: 35, borderRadius: 35, backgroundColor: '#fff'}}>
    </View>
  )
}

export default class ScanQRCode extends Component {
  state = {
    barcode: 'More Options'
  }
  render() {
    const { barcode } = this.state
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'gray'}}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={{
              width: '100%',
              height: '100%',
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center'
            }}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onBarCodeRead={({ barcode }) => {
              console.log(barcode);
              this.setState({barcode: barcode.data})
            }}
          />
          <View style={{flexDirection: 'row', paddingHorizontal: 16, justifyContent: 'space-between', position: 'absolute', top: 0, left: 0, width: '100%', marginTop: 18}}>
            <IconAction />
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 80}}>
              <IconAction />
              <IconAction />
            </View>
          </View>
        </View>

        <View style={{ height: 200, paddingHorizontal: 16}}>
          <View style={{alignItems: 'center', marginTop: 8, marginBottom: 18}}>
            <View style={{ width: 50, height: 3, backgroundColor: '#e0e0e0', marginVertical: 1}}/>
            <View style={{ width: 50, height: 3, backgroundColor: '#e0e0e0', marginVertical: 1}}/>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight:'bold', color: 'black'}}>{barcode}</Text>
            <Text style={{fontSize: 14, color: '#61a756', fontWeight:'bold'}}>SHORTCUT</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: 14, width: '100%'}}>
            <View style={{flexDirection: 'row', alignItems: 'flex-start', width: 160, justifyContent: 'space-between', paddingRight: 12}}>
              <IconWithText title="Phone number"/>
              <IconWithText title="GoPay code"/>
            </View>
            <View style={{width: 1, height: 60, backgroundColor: 'gray'}}/>
            <View style={{flex: 1, paddingLeft: 12}}>
              <Text>Your recent GoPay receivers will show here. No admin fees!</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}