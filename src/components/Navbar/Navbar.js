import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = ({onSearch,cartItemCount}) => {
    const[searchQuery,setSearchQuery]=useState("");
    const submitHandler=()=>{
        if(searchQuery.trim().length)
        onSearch(searchQuery.trim());
        setSearchQuery("");

    }
  return (
    <div className="nav">
      <span>E-commerce</span>
      <div className="search-bar">
        <input type="text" onChange={(e)=>{
            setSearchQuery(e.target.value);
        }} placeholder='Explore products'/>
        <button onClick={submitHandler}>Search</button>
      </div>
      <div className='cart-bar'>
        {cartItemCount>0 && <div>{cartItemCount<=9?cartItemCount:"9+"}</div>}
      <Link to="/cart" className='linking'>
      <svg
        style={{ color: 'white' }} // Corrected the way style attribute is used
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-cart" // Used className instead of class
        viewBox="0 0 16 16"
      >
        <path
          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          fill="white"
        ></path>
      </svg>
      </Link>
      </div>
    </div>
  );
};

export { Navbar };
