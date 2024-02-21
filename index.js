/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async(remoteMessage)=>{
//for handling in killed state
console.log('killed state notification',remoteMessage)
})

AppRegistry.registerComponent(appName, () => App);
