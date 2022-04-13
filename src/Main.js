import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ListScreen from './views/listScreen/ListScreen';
import DetailScreen from './views/detailScreen/DetailScreen';
import NewScreen from './views/newScreen/NewScreen';

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <Stack.Navigator testID="navigator">
      <Stack.Screen
        name="ListScreen"
        component={ListScreen}
        options={{title: 'Simpsons', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        // options={({route}) => ({title: route.params.name})}
        options={{title: 'Details', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="NewScreen"
        component={NewScreen}
        options={{title: 'Add New Character', headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
}
