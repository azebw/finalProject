import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from "react-router-dom";
import Skelton from "react-loading-skeleton";
import CartContext from '../context/cart/CartContext'

function ProductDetail() {
  const [product,setProduct]= useState([]);
  const [loading,setLoading]=useState(false);
  const { id} = useParams();
  const {addToCart} =useContext(CartContext);

useEffect(()=>{

  const getProduct = async () =>{
    
    setLoading(true);
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    setProduct(await response.json());
    setLoading(false);
  }
   getProduct()
  
},[])

const Loading =()=>{
  return(
  <>
  <div className="col-md-6">
  <Skelton  height={400}/>
  </div>
  <div className="col-md-6" style= {{lineHeight:2}}>
  <Skelton  height={50} width ={300}/>
  <Skelton  height={75} />
  <Skelton  height={25} width ={150}/>
  <Skelton  height={50}/>
  <Skelton  height={150}/>
  <Skelton  height={50} width ={100}/>
  <Skelton  height={50} width ={100} style ={{marginLeft:6}}/>
  </div>
 
  </>
  )

}

const ShowProduct=()=>{
  return(
  <>
  <div className="col-md-6">
<img src={product.image} alt={product.title} height="400px" width="400px"/>
  </div>
  <div className="col-md-6">
    <h4 className="text-uppercase text-black-50">
      {product.category}
    </h4>
    <h2 className="display-5">{product.title}</h2>
    <p className="lead fw-bolder">
      Rating {product.rating && product.rating.rate}
      <i className="fa fa-star"></i>
    </p>
    <h3 className="display-6 fw-bold my-4">
${product.price}
    </h3>
    <p className="lead">{product.description}</p>
    <button className="btn btn-outline-dark px-4 py-2"onClick={() => addToCart(product)}> Add to Cart</button>
    <NavLink to ="/cart" className="btn btn-outline-dark ms-2 px-3"> Go to Cart</NavLink>
  </div>
  </>
  )

}
  return (
    <div>
      <div className="container by-5">
        <div className="row by-4">
          {loading? <Loading/>: <ShowProduct/>}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail








// import React, { useContext, useEffect, useState } from 'react'

// import styles from './Product.module.css'
//  import CartContext from '../context/cart/CartContext'
//  import { useParams } from "react-router-dom";

// const ProductDetail = () => {
//   const {addToCart} =useContext(CartContext);

// const [product,setProduct]= useState([]);
// const [loading,setLoading]=useState(false);
// const { id} = useParams();
// useEffect(()=>{

//   const getProduct = async () =>{
    
//     setLoading(true);
//     const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//     setProduct(await response.json());
//     setLoading(false);
//   }
//    getProduct()
  
// },[])
// console.log(product);
// const Loading =()=>{
//   return(
//     <>
// Loading......
//     </>
//   )
// }

// const ShowProduct =()=>{
//   return (
//   <>    
//                 <div className={styles.product__detail}>
//                 <div className={styles.productCard__img}>
//                     <img src={product.image} alt=''/>
//                   </div>
                  
//                   <div className={styles.product__brief}>
//                   <div>{product.category}</div>
//                   <div className={styles.productCard__title} >{product.title}</div>
//                   <div >{product.description}</div>
//                   <div className={styles.productCard__price}><sup>$</sup>{product.price}</div>
//                   <button
//       className={styles.ProductCard__button} style={{background:"#cd9042", marginTop:'20px'}}
//        onClick={() => addToCart(product)}
//     >    Add to Cart
//     </button>
//                   </div>
      
//                   </div> 
         
//   </>
//     )

// }
//   return (
//     <div className =''>
//       {loading?<Loading/> : <ShowProduct/>}
//     </div>
//   )
// }

// export default ProductDetail







// import React, { Component } from "react";
// import styles from './Product.module.css'
// import CartContext from '../context/cart/CartContext'
// class ProductDetail extends Component {
//   static contextType = CartContext
//   constructor(props) {
//     super();
//     this.state = {
//       products: [],
//       productID: props.match.params.pid,
//     };
//   }

//   componentDidMount() {
//     fetch("/products.json")
//       .then((res) => res.json())
//       .then((products) => {
//         const productList = products.products;
//         const singleProduct = productList.filter(
//           (x) =>x.id == this.state.productID
//         );
//         this.setState((state) => {
//           return {
//             products: singleProduct,
            
//           };
//         });
//       });
     
//   }
    
//   render() {
//     const {addToCart } = this.context
//      console.log(this.state.products);
//     return (
//       <div>
//         <section >
//           <div >
//             {this.state.products.map((product) => {
//               let id = product.id;
//               let title = product.title;
//               let img = product.image;
//               let price=product.price;
//               let category = product.category;
//               let description = product.description;
//               let productDetail = "/Product/" + id;
              

//               let productDiv = (
//                 <div key={id} >

//                 </div>
//               );
//               return productDiv;
//             })}
//           </div>
//         </section>
//       </div>
//     );
//   }
// }
// export default ProductDetail;


// import React, { Component } from "react";
// import styles from './Product.module.css'
// import CartContext from '../context/cart/CartContext'
// class ProductDetail extends Component {
//   static contextType = CartContext
//   constructor(props) {
//     super();
//     this.state = {
//       products: [],
//       productID: props.match.params.pid,
//     };
//   }

//   componentDidMount() {
//     fetch("/products.json")
//       .then((res) => res.json())
//       .then((products) => {
//         const productList = products.products;
//         const singleProduct = productList.filter(
//           (x) =>x.id == this.state.productID
//         );
//         this.setState((state) => {
//           return {
//             products: singleProduct,
            
//           };
//         });
//       });
     
//   }
    
//   render() {
//     const {addToCart } = this.context
//      console.log(this.state.products);
//     return (
//       <div>
//         <section >
//           <div >
//             {this.state.products.map((product) => {
//               let id = product.id;
//               let title = product.title;
//               let img = product.image;
//               let price=product.price;
//               let category = product.category;
//               let description = product.description;
//               let productDetail = "/Product/" + id;
              

//               let productDiv = (
//                 <div key={id} >
//                   <div  >
                
//                     <div className={styles.product__detail}>
//                     <div className={styles.productCard__img}>
//                         <img src={img} alt=''/>
//                       </div>
                      
//                       <div className={styles.product__brief}>
//                       <div>{category}</div>
//                       <div className={styles.productCard__title} >{title}</div>
//                       <div >{description}</div>
//                       <div className={styles.productCard__price}><sup>$</sup>{price}</div>
//                       <button
//           className={styles.ProductCard__button} style={{background:"#cd9042", marginTop:'20px'}}
//            onClick={() => addToCart(product)}
//         >    Add to Cart
//         </button>
//                       </div>
          
//                       </div> 
             
//                   </div>
//                 </div>
//               );
//               return productDiv;
//             })}
//           </div>
//         </section>
//       </div>
//     );
//   }
// }
// export default ProductDetail;