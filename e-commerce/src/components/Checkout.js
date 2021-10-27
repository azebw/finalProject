import React, { useContext, useRef } from 'react';

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
    <div className="row" style={{margin:"100px",justifyContent:"center",padding:"0px" }}>
      <div className style={{display:"flex"}}>
        <div className="card-body">
      <h3>Review items and Total Price</h3>
      {cartItems.map((item) => {
      let id = item.id;
      let title = item.title;
      let price = item.price;
         let productDiv = (
               
        <div
          key={id}
          className="col-md-6"
        >
           <div className="col-md-6">
             
           <div className="col-md-6"></div>
                <div className="col-md-6"> <sup>$</sup>{price}</div>
           </div>
        

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
   
    <div>
    <form className="col-md-12 card-body" >
  <div className="col-md-12">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-12">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-md-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-md-12">
    <label for="inputAddress2" className="form-label">Credit Card Info</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Credit Card Info"/>
  </div>
  <div className="col-md-12">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-12">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-12">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-md-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-md-12">
    <button type="submit"className= "btn btn-outline-dark ms-2" onClick={() => emptyItem()}>Sign in</button>
  </div>
</form>
</div>
</div>



      
       </div>
   
   
   
  );
}

export default Checkout;