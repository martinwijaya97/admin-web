import React from 'react';
import { Provider } from 'react-redux';
import Store from './redux/store';
import Router from './routes/routes';

const App = () => (
  <Provider store={Store}>
    <Router />
  </Provider>
);

export default App;
