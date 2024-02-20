import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

export default function OptOut() {
  const [enabled, setEnabled] = useState(
    crashlytics().isCrashlyticsCollectionEnabled,
  );

  async function toggleCrashlytics() {
    await crashlytics()
      .setCrashlyticsCollectionEnabled(!enabled)
      .then(() => setEnabled(crashlytics().isCrashlyticsCollectionEnabled));
  }

  return (
    <View>
      <View style={{flexDirection: 'row', gap: 10, marginTop: 10}}>
        <Button title="Toggle Crashlytics" onPress={toggleCrashlytics} />
        <Button title="Crash" onPress={() => crashlytics().crash()} />
      </View>
      <Text style={{marginTop: 10, color: '#0ca678'}}>
        Crashlytics is currently {enabled ? 'enabled' : 'disabled'}
      </Text>
    </View>
  );
}
