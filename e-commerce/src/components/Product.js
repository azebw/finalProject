import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Skelton from "react-loading-skeleton";

function Products() {
  const [data, setData] = useState([]);
const [filter,setFilter]= useState(data);
const [loading,setLoading]=useState(false);
let componentMounted =true;

  useEffect(()=>{

    const getProducts = async () =>{
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if(componentMounted){
       setData(await response.clone().json());
       setFilter(await response.json())
       setLoading(false);
        
      }
     return ()=>{
      componentMounted=false;
    
     }
    }
     getProducts();
    
  },[])
  console.log(filter);
  const Loading =()=>{
    return(
      <>
      <div className='col-md-3'>
 <Skelton height={350}/>
      </div>
      <div className='col-md-3'>
      <Skelton height={350}/>
           </div>
      <div className='col-md-3'>
      <Skelton height={350}/>
           </div>
      <div className='col-md-3'>
      <Skelton height={350}/>
           </div>

</>
    )
  }

 

const filterProduct =(cat)=>{
  const updatedList= data.filter((x)=>x.category===cat)
  setFilter (updatedList)
  
}

  const ShowProducts=()=>{
    return(
    <>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
      <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
      <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
      <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("women's clothing")} >Women's Clothing</button>
      <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("jewelery")} >Jewlery</button>
      <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("electronics")} >Electronic</button>
    </div>
    {filter.map((product)=>{
       return (
       <>
       <div className="col-md-3 mb-4">
       <div className="card h-100 text-center" key ={product.id}>
  <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
  <div className="card-body">
    <h5 className="card-title mb-0">{product.title.substring(0,12)}</h5>
    <p className="card-text lead fw-bold">${product.price}</p>
    <NavLink to={`/product/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
  </div>
</div>
       </div>
       </>
       )
    })}
    </>
    )
  }
   return( <div className="row justify-content-center">
  {loading ? <Loading/> :<ShowProducts/>}
     </div>)
 
}

export default Products;