import React from 'react';
import ReactDom from 'react-dom';
import HomePage from './component/HomePage';
import { Provider } from 'react-redux';
import store from './reducer';

ReactDom.render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.getElementById('app')
);
