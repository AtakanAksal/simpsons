import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSimpsonsValue} from '../../contexts/SimpsonsContext';

export default function DetailScreen({route}) {
  const [singleData, setSingleData] = useState([]);

  const {itemId} = route.params;
  const {simpsonsList} = useSimpsonsValue();

  useEffect(() => {
    const data = simpsonsList.filter(el => Number(el.id) === Number(itemId));
    // console.log(data);
    if (data.length === 1) {
      setSingleData(data);
    }
  }, [itemId, simpsonsList]);

  if (singleData.length !== 1) {
    return (
      <View style={styles.container}>
        <Text>Hatalı ID</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        resizeMode="contain"
        source={{uri: singleData[0].avatar}}
      />
      <Text style={styles.name}>{singleData[0].name}</Text>
      <Text style={styles.job}>{singleData[0].job}</Text>
      <Text style={styles.description}>{singleData[0].description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#e0e0e0'},
  avatar: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height / 2.8,
    margin: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    marginHorizontal: 5,
  },
  job: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    marginHorizontal: 5,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: '300',
    margin: 10,
    textAlign: 'center',
  },
});
