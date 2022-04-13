import * as React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react-native';

import {SimpsonsProvider} from '../src/contexts/SimpsonsContext';
import {NavigationContainer} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import DetailScreen from '../src/views/detailScreen/DetailScreen';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
});
afterEach(cleanup);

describe('Testing Detail components', () => {
  const mockupData = {
    key: 'DetailScreen--FGeResAO8zkyJHtX9MIF',
    name: 'DetailScreen',
    params: {itemId: '555', name: 'Atakan Aksal'},
    path: undefined,
  };

  test('renders correctly', async () => {
    render(
      <NavigationContainer>
        <SimpsonsProvider>
          <DetailScreen route={mockupData} />
        </SimpsonsProvider>
      </NavigationContainer>,
    );
  });
});
