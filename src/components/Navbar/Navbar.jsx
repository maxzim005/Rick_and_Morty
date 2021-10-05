import React from 'react';
import { NavLink } from 'react-router-dom';
//import s from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <div className='navbar bg-gradient-to-r from-green-300 to-blue-600 rounded-lg'>
                <NavLink className='link' activeClassName='activeLink'
                    to='/characters'>Characters</NavLink>
                <NavLink className='link' activeClassName='activeLink'
                    to='/episodes'>Episodes</NavLink>
                <NavLink className='link' activeClassName='activeLink'
                    to='/locations'>Locations</NavLink>
        </div>
    );
};

export default Navbar;