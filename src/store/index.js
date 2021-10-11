import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, createStore } from 'redux';
import carsReducer from './cars';
import layoutReducer from './layout'


export default configureStore({ // Redux Thunk async calls
  reducer: {
    cars: carsReducer,
    layout: layoutReducer
  }
})

/* const rootReducer = combineReducers({
  cars: carsReducer,
  layout: layoutReducer,
}) */

/* export default createStore(rootReducer); */