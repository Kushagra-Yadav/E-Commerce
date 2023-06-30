import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Products } from './pages/Products';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
import {NotFound} from './pages/NotFound'
import { useNavigate } from 'react-router-dom';
import {createSearchParams} from 'react-router-dom';
import { useCart } from './Contexts/CartContext';
function App() {
  const navigate=useNavigate();
  const { cartItemCount }=useCart();
  const onSearch=(searchQuery)=>{
    navigate(`/?${createSearchParams({q:searchQuery})}`);
  }
  return (
    <>
    <Navbar onSearch={onSearch} cartItemCount={cartItemCount()}/>
    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/products/:productId' element={<Product/>}/>
      <Route path='cart/products/:productId' element={<Product/>}/>
      <Route path="/cart" element={<Cart/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </>
  );
}

export default App;
