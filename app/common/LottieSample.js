import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const LottieSample = () => {
  return (
    <LottieView
    source={require('../assets/LottieLego.json')}
    style={{width: "100%", height: "50%"}}
    autoPlay
    loop
  />
  )
}

export default LottieSample