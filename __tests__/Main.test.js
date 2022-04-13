import * as React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import {SimpsonsProvider} from '../src/contexts/SimpsonsContext';
import {NavigationContainer} from '@react-navigation/native';

// import AsyncStorageMock from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import Main from '../src/Main';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
});

afterEach(cleanup);

describe('Testing render navigator', () => {
  test('renders correctly', () => {
    render(
      <NavigationContainer>
        <SimpsonsProvider>
          <Main />
        </SimpsonsProvider>
      </NavigationContainer>,
    );
  });
});
