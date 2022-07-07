import React, {useState} from 'react';
import Navbarİtems from '../Navbarİtems/Navbarİtems';
import './navbar.css'
const Navbar = () => {
   const [navbar, setNavbar] = useState([
      {id: 1, name: "Bütün sifarişlər", href: "/"},
      {id: 2, name: "Yeni sifariş əlavə elə", href: "/add"}
   ])
   return (
      <nav className='navbar'>
         <i style={{"fontSize": "80px"}} className="fas fa-pizza-slice"></i> 
         <span style={{"fontSize": "30px", marginLeft: "30px", fontWeight: "800"}}>Murad's restourant</span>
         <ul className='navbar__list'>
            {
               navbar.map(nav => {
                  return <Navbarİtems nav={nav} key={nav.id}/>
               })
            }
         </ul>
      </nav>
   );
};

export default Navbar;