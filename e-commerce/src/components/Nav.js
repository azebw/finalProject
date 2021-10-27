import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import CartContext from '../context/cart/CartContext'

const Nav = () => {
  const {cartItems} =useContext(CartContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <NavLink className="navbar-brand fw-bold fs-4" to="/">ETIO COLLECTION</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        </ul>
      
     <div className="button">
       <NavLink to="/login" className="btn btn-outline-dark ms-2 "><i className="fa fa-sign-in me-1"></i>Login</NavLink>
       <NavLink to="/register" className="btn btn-outline-dark ms-2"><i className="fa fa-user-plus me-1"></i>Register</NavLink>
       <NavLink to="/cart" className="btn btn-outline-dark ms-2"><i className="fa fa-shopping-cart me-1"></i>Cart{cartItems.length > 0 && (
           <div classNameName='item__count'>
               <span>{cartItems.length}</span>
            </div>
        )}
</NavLink>

     </div>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Nav



        







// i

  
  //  function aa (){
  //   cartItems.filter(cartItem => cartItem.category === category);
  //  }
  // const ShowProduct =()=>{
  // return (
    
    // <nav classNameName='nav'>  
    //   <div classNameName='nav__left'><Link to="/">Home</Link></div>
    //   <div classNameName='nav__middle'>
    //     <div classNameName='input__wrapper'>
    //   <select
    //   classNameName='input'
    //     onChange={(e) => {
    //       e.preventDefault()
    //     }}
    //   >
    //    <option value="Search">Search</option>
    //     <option value="All">All</option>
    //     <option value="Men's Clothing">Men's Clothing</option>
    //     <option value="Women's Clothing">Women's Clothing</option>
    //     <option value="Jewlery">Jewlery</option>
    //     <option value="episode">Electronics</option>
    //   </select>
    //   <button type="submit" >Enter</button>
    //     </div>
    //   </div>
    //   <div classNameName='nav__right'>
    //   <Link to ='/Cart'>
    //     <div classNameName='cart__icon'>
    //       <i
    //         classNameName='fa fa-shopping-cart'
    //       />
    //       {cartItems.length > 0 && (
    //         <div classNameName='item__count'>
    //           <span>{cartItems.length}</span>
    //         </div>
    //       )}
    //     </div>
    //    </Link>
    //   </div>
    // </nav>
//   );
//           }
// };

// export default Nav;