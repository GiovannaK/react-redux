import { createAction, createReducer } from "@reduxjs/toolkit";

const INTIAL_STATE = []

export const addCar = createAction('ADD_CAR')

export default createReducer(INTIAL_STATE, {
  [addCar.type]: (state, action) => [...state, action.payload]
})

