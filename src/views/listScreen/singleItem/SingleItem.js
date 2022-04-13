import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSimpsonsValue} from '../../../contexts/SimpsonsContext';
import upArrow from '../../../../assets/up-arrow.png';
import downArrow from '../../../../assets/down-arrow.png';
import trashIcon from '../../../../assets/trash.png';

const SingleItem = ({item}) => {
  const {incrementItem, decrementItem, deleteItem} = useSimpsonsValue();
  const nav = useNavigation();

  return (
    <TouchableOpacity
      testID="singleitem-pressable"
      style={styles.itemContainer}
      onPress={() => {
        nav.navigate('DetailScreen', {itemId: item.id, name: item.name});
      }}>
      <View style={styles.itemLeft}>
        <Text style={styles.orderID} testID="singleitem-orderid">
          {item.orderId}
        </Text>
        <Image
          style={styles.itemLeftImg}
          resizeMode="contain"
          source={{uri: item.avatar}}
        />
        <Text>{item.name}</Text>
      </View>
      <View style={styles.itemRight}>
        <TouchableOpacity
          testID="singleitem-up"
          onPress={() => {
            incrementItem(item.id);
          }}>
          <Image
            style={styles.itemRightImgs}
            resizeMode="contain"
            source={upArrow}
          />
        </TouchableOpacity>
        <TouchableOpacity
          testID="singleitem-down"
          onPress={() => {
            decrementItem(item.id);
          }}>
          <Image
            style={styles.itemRightImgs}
            resizeMode="contain"
            source={downArrow}
          />
        </TouchableOpacity>
        <TouchableOpacity
          testID="singleitem-delete"
          onPress={() => {
            deleteItem(item.id);
          }}>
          <Image
            style={styles.itemRightImgs}
            resizeMode="contain"
            source={trashIcon}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default SingleItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#FFF',
    marginLeft: 5,
    marginVertical: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderID: {fontWeight: '700'},

  itemLeft: {padding: 10, flexDirection: 'row', alignItems: 'center'},
  itemLeftImg: {height: 40, width: 40, marginHorizontal: 5},
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemRightImgs: {height: 30, width: 30, marginRight: 5, flex: 1},
});
