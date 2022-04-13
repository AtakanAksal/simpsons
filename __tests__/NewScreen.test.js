import * as React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react-native';

import {SimpsonsProvider} from '../src/contexts/SimpsonsContext';
import {NavigationContainer} from '@react-navigation/native';
import NewScreen from '../src/views/newScreen/NewScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
});
afterEach(cleanup);

describe('Testing new components', () => {
  test('renders correctly', async () => {
    render(
      <NavigationContainer>
        <SimpsonsProvider>
          <NewScreen />
        </SimpsonsProvider>
      </NavigationContainer>,
    );
  });

  test('test add button render', () => {
    const {getByText} = render(
      <NavigationContainer>
        <SimpsonsProvider>
          <NewScreen />
        </SimpsonsProvider>
      </NavigationContainer>,
    );

    expect(getByText('Add Character')).toBeTruthy();
  });

  test('test add button', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <SimpsonsProvider>
          <NewScreen />
        </SimpsonsProvider>
      </NavigationContainer>,
    );

    fireEvent.press(getByTestId('add-btn'));
    expect(AsyncStorage.getItem).toBeCalledWith('simpsonsData');
  });
});
