import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useGlobalContext } from './context';

const Header = props => {
  const { isPopEditOpen } = useGlobalContext();

  return (
    <div className='header-section'>
      <div className='logo'>
        <BsFillPersonLinesFill style={{ fontSize: '40px' }} />
        <span>Entries</span>
      </div>
      {isPopEditOpen ? (
        <div className='options'>
          <span
            style={{
              color: 'grey',
            }}>
            Options{' '}
          </span>
        </div>
      ) : (
        <div className='options'>
          <span>Options </span>
          <div className='dropdown-options'>
            <p>Name, Username</p>
            <p>Username, email</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
