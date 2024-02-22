import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable
} from 'react-native';
import CustomSkeleton from '../common/CustomSkeleton';


const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        setData(res);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const renderList = ({ item }) => {
    return (
      <Pressable
        onPress={() =>navigation.navigate('Details')}
        style={{ paddingHorizontal: 10 }}
      >
        <Text style={{ fontSize: 24, color: '#000' }}>{item.name}</Text>
      </Pressable>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <CustomSkeleton/>
      ) : (
        <>
          <FlatList
            data={data}
            contentContainerStyle={{
              paddingVertical: 20
            }}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={()=> <View
                style={{
                  borderBottomColor: '#d3d3d3',
                  borderBottomWidth: 1,
                  marginTop: 10,
                  marginBottom: 10
                }}
              />}
            renderItem={renderList}
          />
        </>
      )}
    </View>
  );
};

export default HomeScreen;