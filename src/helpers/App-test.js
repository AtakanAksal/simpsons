import 'react-native';
import React from 'react';
import App from '../App';
import {NavigationContainer as Router} from '@react-navigation/native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { SimpsonsProvider} from '../src/contexts/SimpsonsContext';

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
});
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

it('renders correctly', () => {
  renderer.create(<App />);
});
