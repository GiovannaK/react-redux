import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Car from '../../components/Car';
import { addItem } from '../../store/ducks/cart';
import { getAllCars } from '../../store/fetchActions';


export default function List() {
  const cars = useSelector(state => state.cars)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars())
  }, [dispatch])

  const addItemCart = (car) => {
    dispatch(addItem(car))
  }

  return (
		<div className="container-fluid">
			<div className="row">{cars.map((car, index) => <Car key={index} car={car} addItemCart={addItemCart}/>)}</div>
		</div>
	);
}
