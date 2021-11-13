import React from 'react';
// import logo from './images/logo.svg';
import { GiSecretBook } from 'react-icons/gi';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = e => {
    const page = e.target.textContent;
    console.log(page);
    const tempBtn = e.target.getBoundingClientRect();
    console.log(tempBtn);
    const position = (tempBtn.left + tempBtn.right) / 2;
    openSubmenu(page, position);
  };

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <div className='nav-logo'>
            <GiSecretBook className='nav-logo-icon' />
            <h3 className='logo-text'>Name List</h3>
          </div>
        </div>
      </div>
      <div className='nav-links'>
        <div className='link-btn'>All</div>
        <div className='link-btn'>About</div>
        <div className='link-btn'>contact</div>
      </div>
      <button className='btn signin-btn'>Sign in</button>
    </nav>
  );
};

export default Navbar;
