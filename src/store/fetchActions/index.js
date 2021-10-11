import api from '../../services/api';
import { addCar, addCars } from '../ducks/cars';

export const getAllCars = () => {
  return async dispatch => {
    try {
      const result = await api.get('/cars')
      dispatch(addCars(result.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const addCarFetch = car => {
  return async dispatch => {
    try {
      const result = await api.post('/cars', car)
      dispatch(addCar(result.data))
    } catch (error) {
      console.log(error)
    }
  }
}

/* export const getAllCars = () => {
	return (dispatch) => {
		api
			.get('/cars')
			.then((res) => {
				dispatch(addCars(res.data));
			})
			.catch(console.log);
	};
}; */