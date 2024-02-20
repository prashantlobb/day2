import {View, Text, Button} from 'react-native';
import React from 'react';
import perf from '@react-native-firebase/perf';
const URL = 'https://pokeapi.co/api/v2/pokemon/ditto';
const App = () => {
  // custom tracing: how to measure the amount of time it would take to complete a specific task
  async function customTrace() {
    const trace = await perf().startTrace('custom_trace');
    //printing 1-100
    for (let i = 1; i < 100; i++) {
      console.log(i);
    }
    await trace.stop();
  }

  //illustrates you would measure the latency of a HTTP request
  async function getRequest(url) {
    const metric = await perf().newHttpMetric(url, 'GET');
    metric.putAttribute('user', 'abcd');
    await metric.start();
    // Perform a HTTP request and provide response information
    const response = await fetch(url);
    metric.setHttpResponseCode(response.status);
    metric.setResponseContentType(response.headers.get('Content-Type'));
    metric.setResponsePayloadSize(response.headers.get('Content-Length'));
    await metric.stop();
    return response.json();
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
      }}>
      <Text style={{color: '#000', fontWeight: 'bold', fontSize: 18}}>
        Performance Monitoring
      </Text>
      <Button onPress={customTrace} title="Custom Trace" color="blue" />
      <Text style={{marginVertical: 10, fontWeight: 'bold', color: '#000'}}>
        Api latency test
      </Text>
      <Button
        onPress={() => getRequest(URL)}
        title="Network Trace"
        color="#1098ad"
      />
    </View>
  );
};

export default App;
