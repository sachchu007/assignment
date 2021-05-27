import React from 'react';
import './Navbar.css';
import Loading from './Loading';
const Navbar = (props) => {
  return (
    <nav>
      <ul className='nav-list'>
        <li className='branding'>
          <i className='fas fa-blog'></i>
        </li>
        <li className='branding'>
          <h3>Users Finder</h3>
        </li>
        <li className='get-button'>
          <button onClick={props.buttonEvent}>Get Users</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
