import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './ducks/cars';
import layoutReducer from './ducks/layout'
import cartReducer from './ducks/cart'


export default configureStore({ // Redux Thunk async calls
  reducer: {
    cars: carsReducer,
    layout: layoutReducer,
    cart: cartReducer
  }
})

/* const rootReducer = combineReducers({
  cars: carsReducer,
  layout: layoutReducer,
}) */

/* export default createStore(rootReducer); */