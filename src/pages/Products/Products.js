import { useEffect, useState } from "react"
import {FakeStoreApi} from '../../service/FakeStoreApi'
import { useSearchParams } from "react-router-dom";
import { useCart } from "../../Contexts/CartContext";
import { Items } from "../../components/Items";
import './Products.css'
const Products=()=>{
  const {addToCart}=useCart();
  const[loading,setLoading]=useState(true);
  const[products,setProducts]=useState([]);
  const[query,setQuery]=useSearchParams();
    const searchQuery=query.get('q');

    useEffect(()=>{
      const fetchProducts=async()=>{
                             setLoading(true);
        const product=searchQuery?await FakeStoreApi.fetchProductByQuery(searchQuery):
                             await FakeStoreApi.fetchAllProducts();
                             setProducts(product);
                             setLoading(false);
                             console.log("he");
      }  
      fetchProducts().catch(console.error);
    },[searchQuery])
  if(searchQuery && !loading && !products.length)
  return <div>No such item found</div>
  return (
    <div className="wrap">
      <div>
     {
      loading?(<div>Loading</div>):(
        products.map((Product)=>(<Items key={Product.id} data={Product} />))
      )
     }
     </div>
    </div>
  )

  
}
export {Products}