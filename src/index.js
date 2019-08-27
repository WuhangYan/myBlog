import React from 'react';
import ReactDom from 'react-dom';
import HomePage from './component/HomePage';
import { Provider } from 'react-redux';
import store from './reducer';
import { AppContainer } from 'react-hot-loader';

if(module.hot) {
  module.hot.accept();
}

ReactDom.render(
  <AppContainer>
    <Provider store={store}>
      <HomePage />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);
