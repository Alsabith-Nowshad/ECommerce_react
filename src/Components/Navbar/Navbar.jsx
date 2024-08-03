import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import Cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

  
  const [menu,setMenu] = useState("Shop")


  return (
    <div className='navbar'>

{/* logo */}

      <div className="nav-logo">
      <img src={logo} alt="" />
      <p>SHOPPER</p>
      </div>
      
{/* menu */}

    <ul className='nav-menu'>
      <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration : "none"}} to = '/'>Shop</Link> {menu === "Shop" ? <hr/> : <></>} </li>
      <li onClick={()=>{setMenu("Men")}}> <Link style={{textDecoration : "none"}} to = "/mens">Mens</Link> {menu === "Men" ? <hr/> : <></>}</li>
      <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration : "none"}} to = "/womens">Womens</Link> {menu === "Women" ? <hr/> : <></>}</li>
      <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration : "none"}} to = "/kids">Kids</Link> {menu === "Kids" ? <hr/> : <></>}</li>
    </ul>

    {/* login / cart */}

<div className="nav-login-cart">
  <Link to = "/Login"><button>Login</button></Link>
  <Link to = "/Cart"><img src={Cart_icon} alt="" /></Link>
  
  <div className="nav-cart-count">

  </div>
</div>

    </div>
  )
}

export default Navbar
