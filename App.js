import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './app/screens/DetailsScreen';
import HomeScreen from './app/screens/HomeScreen';
import usePushNotification from './app/common/usePushNotification';

const RootStack = createNativeStackNavigator();

const linking = {
  prefixes: [
    'lobb://', 'https://lobb.com'
  ],
  config: {
    screens: {
      Home: '/home',
      Details: '/details',
    },
  },
};

const App = () => {
  const {
    requestUserPermission,
    getFCMToken,
    listenToBackgroundNotifications,
    listenToForegroundNotifications,
    onNotificationOpenedAppFromBackground,
    onNotificationOpenedAppFromQuit,
  } = usePushNotification();

  React.useEffect(() => {
    const listenToNotifications = () => {
      try {
        getFCMToken();
        requestUserPermission();
        onNotificationOpenedAppFromQuit();
        listenToBackgroundNotifications();
        listenToForegroundNotifications();
        onNotificationOpenedAppFromBackground();
      } catch (error) {
        console.log(error);
      }
    };
    listenToNotifications();
  }, []);

  return (
    <NavigationContainer linking={linking}>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Details" component={DetailsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;