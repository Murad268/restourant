import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbarİtems = ({nav}) => {
   return (
      <NavLink to={nav.href} className='navbar__item'>
         {nav.name}
      </NavLink>
   );
};

export default Navbarİtems;