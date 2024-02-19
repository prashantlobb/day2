import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import remoteConfig from '@react-native-firebase/remote-config';

const App = () => {
  const [remoteData,setRemoteData] = useState('Remote Config')
  useEffect(() => {
    remoteConfig()
      .setDefaults({
        is_tested: false,
      })
      .then(() => remoteConfig().fetchAndActivate())
      .then(() => {});
      const isTested = remoteConfig().getValue('is_tested');
      setRemoteData(isTested?'Remote Config tested successfully':'Yet to test')
  }, []);
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'green'}}>
      <Text style={{color:'#000',fontWeight:'800'}}>Remote Config Test: {remoteData}</Text>
    </View>
  )
}

export default App