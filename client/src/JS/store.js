import {createStore,compose,applyMiddleware}from 'redux'
import { rootreducer } from './reducers';
import  thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store=createStore(rootreducer,composeEnhancers(
    applyMiddleware( thunk)
  ))