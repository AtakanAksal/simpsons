import React from 'react';
import {NavigationContainer as Router} from '@react-navigation/native';

import {SimpsonsProvider} from './src/contexts/SimpsonsContext';
import Main from './src/Main';

const App = () => {
  return (
    <Router>
      <SimpsonsProvider>
        <Main />
      </SimpsonsProvider>
    </Router>
  );
};

export default App;
