import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { compose } from "redux";

const composeEnhancers = process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null
    || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware( thunk )));

export default store;