import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ItemCart } from '../../components/ItemCart';
import { removeItem } from '../../store/ducks/cart';

export default function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  const removeItemCart = (id) => {
    dispatch(removeItem(id))
  }

	return(
    <div className="container-fluid">
      <div className="row">
        {cart.length === 0 ?
          <p className="col-sm-12 mt-5 text-warning text-center">Sem produtos no Carrinho...</p>
          :
          <>
            {cart.map(item => (
              <ItemCart item={item} key={item._id} removeItemCart={removeItemCart}/>
            ))}
          </>
        }
      </div>
    </div>

  )
}
