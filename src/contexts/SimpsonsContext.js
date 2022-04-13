import React, {createContext, useContext, useState, useEffect} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {getSimpsons} from '../helpers/connections';
import {reOrderIdtoObjects, sortObjectsByOrderId} from '../helpers/funtions';

export const DataContext = createContext();

export const SimpsonsProvider = ({children}) => {
  const [simpsonsList, setSimpsonsList] = useState([]);
  useEffect(() => {
    getSimpsonsData();
  }, []);

  useEffect(() => {
    storeSimpsonsData(simpsonsList);
  }, [simpsonsList]);

  // COMMENT: storage'da data var mı kontrolü
  const getSimpsonsData = async () => {
    // await AsyncStorage.clear();
    const jsonValue = await AsyncStorage.getItem('simpsonsData');
    if (jsonValue != null) {
      console.log('localde data var');
      setSimpsonsList(JSON.parse(jsonValue));
    } else {
      console.log("localde data yok, api'a istek atılıyor...");
      setSimpsonsList(await getSimpsons());
    }
  };

  // COMMENT: simpsonsList state'i değiştiğinde store u güncelliyoruz, data persistant
  const storeSimpsonsData = async value => {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('simpsonsData', jsonValue);
  };

  const incrementItem = id => {
    // console.log(id);
    const newArray = [...simpsonsList];

    newArray.map((element, index) => {
      if (Number(element.id) === Number(id)) {
        if (index > 0) {
          newArray[index].orderId = newArray[index].orderId - 1;
          newArray[index - 1].orderId = newArray[index - 1].orderId + 1;
        }
      }
    });

    setSimpsonsList(sortObjectsByOrderId(newArray));
  };

  function decrementItem(id) {
    const newArray = [...simpsonsList];
    newArray.forEach((element, index) => {
      if (Number(element.id) === Number(id)) {
        if (newArray[index + 1]) {
          newArray[index].orderId = newArray[index].orderId + 1;
          newArray[index + 1].orderId = newArray[index + 1].orderId - 1;
        }
      }
    });
    setSimpsonsList(sortObjectsByOrderId(newArray));
  }

  const addItem = newItem => {
    // COMMENT: uuidv4'e çevirilebilir.
    newItem.id = Math.floor(Math.random() * 10000).toString();
    newItem.orderId = [...simpsonsList].length + 1;

    setSimpsonsList(prevState => [...prevState, newItem]);
  };

  const deleteItem = id => {
    let newArray = [...simpsonsList];

    newArray = newArray.filter(element => {
      return element.id !== id;
    });

    // TODO: reOrderIdtoObjects'dan direkt datayı alabiliriz, array destruction
    if (reOrderIdtoObjects(newArray)) {
      setSimpsonsList(sortObjectsByOrderId(newArray));
    }
  };

  const reloadData = () => {
    const getSimpsonsDataReload = async () => {
      setSimpsonsList(await getSimpsons());
    };

    getSimpsonsDataReload();
  };

  return (
    <DataContext.Provider
      value={{
        simpsonsList,
        incrementItem,
        decrementItem,
        addItem,
        deleteItem,
        reloadData,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export const useSimpsonsValue = () => useContext(DataContext);
