import * as React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitFor,
  act,
  waitForElement,
} from '@testing-library/react-native';

import SingleItem from '../src/views/listScreen/singleItem/SingleItem';
import {SimpsonsProvider} from '../src/contexts/SimpsonsContext';
import {NavigationContainer} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  // jest.spyOn(console, 'log').mockImplementation(() => {});
  //jest.spyOn(React, 'useEffect').mockImplementationOnce(cb => cb()());
  //jest.spyOn(React, 'useState').mockImplementationOnce(cb => cb()());
  //jest.spyOn(React, 'useContext').mockImplementationOnce(cb => cb()());
});
afterEach(cleanup);

describe('Testing list components', () => {
  const mockupData = {
    name: 'Homer Simpson',
    avatar:
      'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png/revision/latest/scale-to-width-down/300?cb=20201222215437',
    job: 'Nuclear Safety Inspector',
    description:
      "Homer Jay Simpson (born May 12, 1956) is the main protagonist and one of the five main characters of The Simpsons series (or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be ~240 pounds), lazy, and often ignorant to the world around him. Although Homer has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he doesn't. He also serves as the main protagonist of the The Simpsons Movie. He is 39 years old and was born in 1956.",
    id: '14',
    orderId: 1,
  };

  test('renders correctly', async () => {
    render(
      <NavigationContainer>
        <SimpsonsProvider>
          <SingleItem item={mockupData} />
        </SimpsonsProvider>
      </NavigationContainer>,
    );
  });
  test('renders data correctly', async () => {
    render(
      <NavigationContainer>
        <SimpsonsProvider>
          <SingleItem item={mockupData} />
        </SimpsonsProvider>
      </NavigationContainer>,
    );

    //TODO homer simpson testini oku
  });
  test('single item pressable render', async () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <SimpsonsProvider>
          <SingleItem item={mockupData} />
        </SimpsonsProvider>
      </NavigationContainer>,
    );

    const text = await waitFor(() => getByTestId('singleitem-pressable'));
    await waitFor(() => {
      expect(text).toBeTruthy();
    });
  });
  test('single item pressable up', async () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <SimpsonsProvider>
          <SingleItem item={mockupData} />
        </SimpsonsProvider>
      </NavigationContainer>,
    );

    // fireEvent.press(getByTestId('singleitem-up'));
    fireEvent.press(await waitFor(() => getByTestId('singleitem-up')));

    await waitFor(() => {
      expect(AsyncStorage.getItem).toBeCalledWith('simpsonsData');
    });
  });

  test('single item pressable down', async () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <SimpsonsProvider>
          <SingleItem item={mockupData} />
        </SimpsonsProvider>
      </NavigationContainer>,
    );

    // fireEvent.press(getByTestId('singleitem-down'));
    fireEvent.press(await waitFor(() => getByTestId('singleitem-down')));
    await waitFor(() => {
      expect(AsyncStorage.getItem).toBeCalledWith('simpsonsData');
    });
  });

  test('single item pressable delete', async () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <SimpsonsProvider>
          <SingleItem item={mockupData} />
        </SimpsonsProvider>
      </NavigationContainer>,
    );

    // fireEvent.press(getByTestId('singleitem-delete'));
    fireEvent.press(await waitFor(() => getByTestId('singleitem-delete')));
    await waitFor(() => {
      expect(AsyncStorage.getItem).toBeCalledWith('simpsonsData');
    });
  });
});
