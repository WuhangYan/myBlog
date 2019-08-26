import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

const initState = {
  article_num: 5
};

function reducer(state = initState, action) {
  switch (action.type) {
    
    default:
      return state;
  }
}

const middleware = applyMiddleware(thunkMiddleware, logger);

const store = createStore(reducer, middleware);

export default store;
