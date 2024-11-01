import CartWidget from "../CarWidget/CartWidget"
import "./navBar.css"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="nav-bar">
        <Link to={"/"} >
          <h1>Ecomerce</h1>
        </Link>
        
        <div className="nav-category" >
          <NavLink to={"/categoria/camperas"} className = {({isActive})=> isActive ? 'activeOption' : 'option'}>camperas</NavLink>
          <NavLink to={"/categoria/pantalones"} className = {({isActive})=> isActive ? 'activeOption' : 'option'}>pantalones </NavLink>
          <NavLink to={"/categoria/remeras"} className = {({isActive})=> isActive ? 'activeOption' : 'option'}>remeras</NavLink>
        </div>

       
        <CartWidget/>
        
       
        
    </nav>
  )
}

export default NavBar