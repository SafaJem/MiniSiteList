import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducerList } from './reducers/listReducer';
const middleware = [thunk];

const store = createStore(
    reducerList,
  compose(
    applyMiddleware(...middleware)
  ,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;