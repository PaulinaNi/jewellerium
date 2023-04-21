import './navBar.styles.css'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {

  //state to control opening and closing hamburger menu for mobile
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false)
  // function to handle state changing for hamburger menu
  const handleHamburgerMenu = () => {
    setIsHamburgerMenuOpen(prevStat => !prevStat)
  }

  //navigation link components 
  const NavLinks = (props) => {
    const { navID } = props
    const navLinkClassName = ({ isActive }) => isActive ? "active" : ""
    return (
      <nav id={navID}>
        <NavLink to='/shop'
          className={navLinkClassName}
        >Shop</NavLink>
        <NavLink to='/about'
          className={navLinkClassName}
        >About Us</NavLink>
        <NavLink to='/contact'
          className={navLinkClassName}
        >Contact</NavLink>
        <FontAwesomeIcon icon={faCartShopping} size='lg' style={{ color: "#507028", padding: '0 0.5rem' }} />
      </nav>
    )
  }

  return (
    <header>
      <div className='navigationHeading'>
        <Link to='/' className='shopLogo' aria-label='shop logo'>Jewellerium</Link>
        {/* hamburger menu svg */}
        <svg
          className={isHamburgerMenuOpen ? "hamburger hamburgerRotate active" : "hamburger hamburgerRotate"}
          viewBox="0 0 100 100"
          width="70"
          onClick={handleHamburgerMenu}
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
          <path
            className="line middle"
            d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
        </svg>

      </div>
      {isHamburgerMenuOpen && <NavLinks navID='navBar' />}
      {<NavLinks navID='desktopLinks' />}
    </header>
  )
}