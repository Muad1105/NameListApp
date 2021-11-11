import React, { useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';
import { useGlobalContext } from './context';

const PopEdit = () => {
  const {
    isPopEditOpen,
    triggerPopup,
    changedValue,
    setChangedValue,
    alterValues,
  } = useGlobalContext();

  const handleChange = e => {
    const { name, value } = e.target;
    setChangedValue(prevValue => {
      if (name === 'name') {
        return { ...prevValue, name: value };
      }
      if (name === 'userName') {
        return { ...prevValue, userName: value };
      }
      if (name === 'email') {
        return { ...prevValue, email: value };
      }
    });
  };

  return isPopEditOpen ? (
    <div className={'edit-container show'}>
      <div className='head'>
        <div className='edit-logo'>
          <BiEditAlt />
          Edit{``}
        </div>
        <div>
          <IoCloseOutline
            className='head-close'
            onClick={() => triggerPopup(false)}
          />
        </div>
      </div>
      <div className='content'>
        <div className='entry'>
          <label htmlFor='name'>Name :</label>
          <input
            type='text'
            name='name'
            value={changedValue.name}
            onChange={handleChange}
          />
        </div>
        <div className='entry'>
          <label htmlFor='name'>Username :</label>
          <input
            type='text'
            name='userName'
            value={changedValue.userName}
            onChange={handleChange}
          />
        </div>
        <div className='entry'>
          <label htmlFor='name'>Email :</label>
          <input
            type='text'
            name='email'
            value={changedValue.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='footer'>
        <button
          type='button'
          className='head-close'
          onClick={() => triggerPopup(false)}>
          Cancel
        </button>
        <button type='button' onClick={alterValues}>
          Save
        </button>
      </div>
    </div>
  ) : (
    ''
  );
};

export default PopEdit;
