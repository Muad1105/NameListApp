import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { useGlobalContext } from './context';

const NameList = () => {
  const {
    removeItem,
    isPopEditOpen,
    listData,
    triggerPopup,
    popTriggeredValue,
  } = useGlobalContext();

  const editValue = (i, boolean) => {
    triggerPopup(boolean);
    popTriggeredValue(i);
  };

  return (
    <>
      <div className='name-container'>
        <div className='description'>
          <div
            className='sl_no'
            style={{ fontWeight: 'bold', fontSize: '20px' }}>
            sl.no
          </div>
          <div
            className='name'
            style={{ fontWeight: 'bold', fontSize: '20px' }}>
            Name
          </div>
          <div
            className='userName'
            style={{ fontWeight: 'bold', fontSize: '20px' }}>
            UserName
          </div>
          <div
            className='email'
            style={{ fontWeight: 'bold', fontSize: '20px' }}>
            email
          </div>
          <div
            className='action'
            style={{ fontWeight: 'bold', fontSize: '20px' }}>
            Action
          </div>
        </div>

        {listData.map((e, i) => {
          const { name, userName, email } = e;
          return (
            <div key={i} className='description'>
              <div className='sl_no'>{i + 1}</div>
              <div className='name'>{name}</div>
              <div className='userName'>{userName}</div>
              <div className='email'>{email}</div>
              <div className='action'>
                {isPopEditOpen ? (
                  <>
                    <BiEdit
                      style={{
                        color: 'grey',
                        marginRight: '5px',
                      }}
                    />
                    <AiFillDelete style={{ color: 'grey' }} />
                  </>
                ) : (
                  <>
                    <BiEdit
                      style={{
                        color: 'blue',
                        cursor: 'pointer',
                        marginRight: '5px',
                      }}
                      onClick={() => editValue(i, true)}
                    />
                    <AiFillDelete
                      style={{ color: 'blue', cursor: 'pointer' }}
                      onClick={() => removeItem(i, listData)}
                    />
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NameList;
