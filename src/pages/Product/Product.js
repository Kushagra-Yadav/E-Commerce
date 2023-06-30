import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../../Contexts/CartContext";
import { FakeStoreApi } from "../../service/FakeStoreApi";
import './Product.css'
const Product=()=>{
    const{addToCart}=useCart();
    const[loading,setLoading]=useState(true);
    const[product,setProduct]=useState();
    const { productId }=useParams();
    useEffect(()=>{
       const Fetchprod=async()=>{
        setLoading(true);
        const prod=await FakeStoreApi.FetchProductById(productId);
         setProduct(prod);
         setLoading(false);
         console.log(prod);

       } 
       Fetchprod().catch(console.error);
    },[productId])
    if(!loading && product.statusCode===400)
     {return <div style={{fontSize:"40px"}}>No such exist.Please visit {" "} <Link to="/" style={{color:"blue"}}>Home </Link> {" "}to see available products</div> }

     return (loading?(<div>Loading</div>):( <div className="single-product-wrapper">
     <img src={product.image}/>
     <div className="right">
        <span>{product.title}</span>
        <span>{product.description}</span>
        <div className="pricing">
         <span>${product.price}</span>
         <div onClick={()=>{addToCart(product)}}>
         <svg 
             style={{ color: 'white', height:'2.5rem',width:'2.5rem' }} // Corrected the way style attribute is used
             xmlns="http://www.w3.org/2000/svg"
             width="16"
             height="16"
             fill="currentColor"
             className="bi bi-cart" // Used className instead of class
             viewBox="0 0 16 16"
         >
             <path
             d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
             fill="blue"
             ></path>
         </svg>
         </div>
        </div>
     </div>
     </div>)
       

     )
}
export {Product}