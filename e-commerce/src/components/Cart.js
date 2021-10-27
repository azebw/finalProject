

import React, { useContext } from 'react';

import CartContext from '../context/cart/CartContext'
import Subtotal from './Subtotal';

function Cart() {
  const { cartItems,removeItem,addToCart} =useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="container">
      <div className="row">
  {cartItems.length === 0?(<h4>Cart is Empty</h4>):(
            <ul >
              <div >
              {cartItems.map((item) => {
          let id = item.id;
          let title = item.title;
          let img = item.image;
          let price = item.price;
          let description = item.description;
          let category = item.category;
          let productDiv = (
                   
            <div
              key={id}
             
            >
              <div>
              
                <div  className="col-md-4"><img  src={img} alt=''height="200px" width ="180px" /> 
                </div>
               
               
                <div className="col-md-4">{title}</div>
                <div className="col-md-4">{category}</div>
                    <div className="lead fw-bold"> <sup>$</sup>{price}</div>
                   <p className="lead fw-bold">
                  
                </p> 
           

        
        </div>
           
            </div>
          
          );
          return productDiv;
        })}
        </div>
          <div className="col-md-4">
           <Subtotal />
         </div> 
            </ul>
         
          )}
         

      </div>
 </div>
  );
}

export default Cart;
