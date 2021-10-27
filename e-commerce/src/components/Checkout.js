import React, { useContext } from 'react';

import CartContext from '../context/cart/CartContext'
import CurrencyFormat from 'react-currency-format';

import { Link } from 'react-router-dom';
function Checkout() {
  const { cartItems,emptyItem} =useContext(CartContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // console.log(name.current.value, shipingAddress.current.value,creditCardInfo.current.value);
  };

  
  const getcartItemsTotal = (cartItems ) =>
  cartItems ?.reduce((amount, item) => item.price + amount, 0);
  return (
    <div className="container" >
      <div className= "row">
        <div className="col-md-6">
      <h4>Review items and Total Price</h4>
      {cartItems.map((product) => {
              let productDiv = (
               
        < div key={product.id}>
           <img  width="200px" hight="200px"src={product.image} alt={product.title} />
          <div className=""> <sup>$</sup>{product.price}</div>
        </div>
      
      );
      return productDiv;
    })}

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
    </div>
   
    <div className="col-md-6">
  

    <form className="" width="600px" hight="200px">
  <div >
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div >
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div >
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div >
    <label for="inputAddress2" className="form-label">Credit Card Info</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Credit Card Info"/>
  </div>
  <div >
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div >
    <label for="inputState" className="form-label">State</label>
    <input type="text" className="form-control" id="inputState"/>
  </div>
  <div >
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div >
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div >
    <Link to ="/">
    <button type="submit"className= "btn btn-outline-dark ms-2" onClick={() => emptyItem()}>Check out</button>
    </Link>
  </div>
</form>
</div>
</div>



      
       </div>
   
   
   
  );
}

export default Checkout;