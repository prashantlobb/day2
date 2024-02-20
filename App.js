import {View, Text} from 'react-native';
import React from 'react';
import ErrorReport from './app/ErrorReport';
import OptOut from './app/OptOut';
import CrashAttributes from './app/CrashAttributes';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        paddingTop: 20,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          color: '#000',
        }}>
        Crashlytics
      </Text>
      {/* reporting error through Crashlytics using the recordError method */}
      <Text style={{marginTop: 10, color: '#e03131'}}>Error Report</Text>
      <ErrorReport />
      {/*  users may want to opt-out of the crash reporting.=>through setCrashlyticsCollectionEnabled can be achieved */}
      <Text style={{marginTop: 10, color: '#e03131'}}>
        Enabling/Disabling Crashlytics
      </Text>
      <OptOut />
      <Text style={{marginTop: 10, color: '#e03131'}}>Crash Attributes</Text>

      <CrashAttributes />
    </View>
  );
};

export default App;
