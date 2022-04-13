import * as React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import '@react-native-async-storage/async-storage';

// import AsyncStorageMock from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import App from '../App';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
// jest.mock('react-native/Libraries/AsyncStore');

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
});
afterEach(cleanup);

describe('Testing react navigation', () => {
  test('renders correctly', () => {
    render(<App />);
  });

  // test('renders page with data', async () => {
  //   const component = <App />;

  //   const {getByTestId} = render(component);

  //   const text = await getByTestId('flatlist');
  //   expect(text).toBeTruthy();
  // });
});
