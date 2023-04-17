import './navBar.styles.css'
import { NavLink, Link } from 'react-router-dom'

export default function NavBar() {
 const navLinkClassName = ({ isActive }) => isActive ? "active" : ""

 return (
  <header>
   <Link to='/' className='shopLogo' aria-label='shop logo'>Jewellerium</Link>
   <nav id='navBar'>
    <NavLink to='/shop'
     className={navLinkClassName}
    >Shop</NavLink>
    <NavLink to='/about'
     className={navLinkClassName}
    >About Us</NavLink>
    <NavLink to='/contact'
     className={navLinkClassName}
    >Contact</NavLink>
   </nav>
  </header>
 )
}