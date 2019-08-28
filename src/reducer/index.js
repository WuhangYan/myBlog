import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

const initState = {
  article_num: 5,
  article: {
    "key_react": {
      "title": "react",
      "time": "2019-10-10",
      "content": "reactreactreactreactreactreactreactreactreactreactreactreactreactreact"
    },
    "key_webpack": {
      "title": "webpack",
      "time": "2009-1-1",
      "content": "webpackwebpackwebpackwebpackwebpackwebpackwebpackwebpackwebpackwebpackwebpack"
    }
  }
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
