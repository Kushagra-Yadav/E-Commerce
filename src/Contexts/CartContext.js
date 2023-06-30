import {createContext ,useContext, useState} from 'react'
const initialState={
    cart:[],
    cartItemCount:()=> 0,
    addToCart:()=>null,
    removeFromCart:()=>null,
    incrQuantity:()=>null,
    decrQuantity:()=>null
}
const dataContext=createContext(initialState);
const useCart=()=>useContext(dataContext);

const CartProvider=({children})=>{
 const[cart,setCart]=useState(initialState.cart);

 const cartItemCount=()=>{
    return cart.reduce((ct,item)=>ct+item.quantity,0)
 }

 const addToCart=(product)=>{
    const index=cart.findIndex((item)=>item.product.id===product.id);
    if(index==-1)
     setCart([...cart,{product,quantity:1}])
     else
     cart[index].quantity+=1;
 }

 const removeFromCart=(product)=>{
    setCart(cart.filter((item)=>item.product.id!=product.id));
 }

 const incrQuantity=(product)=>{
    const copy=cart.slice();
    const index=copy.findIndex((item)=>item.product.id===product.id);
    if(index!=-1)
    {
       copy[index].quantity+=1;
       setCart(copy);
    }
 }

 const decrQuantity=(product)=>{
    const copy=cart.slice();
    const index=copy.findIndex((item)=>item.product.id===product.id)
    if(index!=-1 && copy[index].quantity>1)
    {
        copy[index].quantity-=1;
        setCart(copy);
    }
 }

 return (
    <dataContext.Provider value={{cart,cartItemCount,addToCart,removeFromCart,incrQuantity,decrQuantity}}>
      {children}
    </dataContext.Provider>
 )
}
export{useCart,CartProvider};