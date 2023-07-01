import { useCart } from "../../Contexts/CartContext"
import './Cart.css'
import { Product } from "../Product/Product";
import { Link } from "react-router-dom";
const Cart=()=>{
    const shipping_charges=25;
    const {cart,removeFromCart,incrQuantity,decrQuantity} = useCart();
     const total= cart.reduce((tot,item)=>(tot+item.product.price*item.quantity),0);
     const count=cart.reduce((t,item)=>t+item.quantity,0);

    return(
        <div className="complete">
            <div>
            {
                cart.map((item)=>{
                    return( 
                        <div  className="left">
                            <img src={item.product.image}/>
                            <div><Link to={`products/${item.product.id}`}>{item.product.title}</Link></div>
                            <div>
                            <div className="btns"><button onClick={()=>incrQuantity(item.product)}>+</button><span>{item.quantity}</span><button onClick={()=>decrQuantity(item.product)}>-</button></div>
                            <span>Price:${item.product.price}</span>
                            <button onClick={()=>removeFromCart(item.product)}>Remove</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <div className="cart-right">
                {cart.length>0?(<>
                <div>Product Details</div>
                <div><span>Shipping Charges</span> <span>${shipping_charges}</span></div>
                <div><span>Total quantity</span><span>{count}</span></div>
                <div className="pricings"><span>Total Price</span><span>${Math.round(total,2)+shipping_charges}</span></div>
           </>):(<>
            <div style={{fontFamily:"sans-serif"}}>Cart is Empty</div>
            <div style={{display:"flex",justifyContent:"center"}}>
            <span>Add something to cart </span><span style={{marginLeft:"5px" }}><Link to="/" style={{color:"blue"}}>Home</Link></span>
                </div></>)}
            </div>
        </div>
    )
}
export {Cart}