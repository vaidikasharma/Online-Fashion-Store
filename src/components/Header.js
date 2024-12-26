import React from "react"
import { NavLink } from "react-router-dom"
const Header =() =>{
    return(
        <>
        <ul> 

            <li><NavLink to ="/">Home</NavLink></li>
            <li><NavLink to ="/about">About</NavLink></li>
            <li><NavLink to ="/product">Product</NavLink></li>
            <li><NavLink to ="/contact">Contact</NavLink></li>
            <li><NavLink to ="/login">Login</NavLink></li>
            <li><NavLink to ="/register">Register</NavLink></li>
        </ul>
        </>
    )
}
export default Header