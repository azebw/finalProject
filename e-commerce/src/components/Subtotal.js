import React, { useContext } from 'react';

import CurrencyFormat from 'react-currency-format';
import CartContext from '../context/cart/CartContext'
import { useHistory } from 'react-router-dom';
function Subtotal() {
  const { cartItems } = useContext(CartContext);
console.log(cartItems);
  const history = useHistory();
  const getcartItemsTotal = (cartItems ) =>
  cartItems ?.reduce((amount, item) => item.price + amount, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({cartItems .length} items): <strong>{value}</strong>
            </p>
                     </div>
        )}
        decimalScale={2}
        value={getcartItemsTotal(cartItems)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button onClick={(e) => history.push('/checkout')}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;