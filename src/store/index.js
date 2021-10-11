import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './ducks/cars';
import layoutReducer from './ducks/layout'


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