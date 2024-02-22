/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async(remoteMsg)=>{
    console.log("killed State notification",remoteMsg)
})
AppRegistry.registerComponent(appName, () => App);
