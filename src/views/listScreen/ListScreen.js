import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {useSimpsonsValue} from '../../contexts/SimpsonsContext';
import SingleItem from './singleItem/SingleItem';

export default function ListScreen() {
  const {simpsonsList, reloadData} = useSimpsonsValue();
  const nav = useNavigation();

  // COMMENT: ilk açılışta kayıt yok uyarısı vermemesi için SplashScreen kullanılabilir.
  if ([...simpsonsList].length === 0) {
    return (
      <View style={styles.container}>
        <TouchableOpacity testID="flatlist" onPress={() => reloadData()}>
          <Text style={styles.noData}>
            Kayıtlı veri bulunmamaktatır. Api'dan tekrar yüklemek için
            tıklayınız
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={simpsonsList}
        testID="flatlist"
        renderItem={({item}) => <SingleItem item={item} />}
      />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => nav.navigate('NewScreen')}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#e0e0e0'},

  fab: {
    position: 'absolute',
    left: Dimensions.get('window').width / 2 - 25,
    bottom: 0,
    backgroundColor: '#008cff',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  plus: {lineHeight: 50, fontSize: 44, color: '#FFF'},

  noData: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
});
