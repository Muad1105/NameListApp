import React, { useState, useContext } from 'react';
import data from './data.js';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  let [listData, setListData] = useState(data);
  const [isPopEditOpen, setPopEditOpen] = useState(false);
  const [editItemId, setEditItemId] = useState('');

  // remove an item from the list

  const removeItem = i => {
    console.log(i);
    setListData(prevValue => {
      return prevValue.filter((e, index) => {
        console.log(i, index, e);
        if (i !== index) return e;
      });
    });
  };

  // show/hide popup
  const triggerPopup = boolean => {
    setPopEditOpen(boolean);
  };

  // get clicked data index from the listData to change

  const popTriggeredValue = i => {
    console.log(i);
    setEditItemId(i + 1);
  };

  // initializing value tobe changed while typing popUp

  const [changedValue, setChangedValue] = useState({
    id: '',
    name: '',
    userName: '',
    email: '',
  });

  // Change with the entered values
  const alterValues = () => {
    if (
      changedValue.name == '' ||
      changedValue.userName == '' ||
      changedValue.email == ''
    ) {
      alert('please fill the required values');
    } else {
      setListData(prevValue => {
        console.log(prevValue);
        return prevValue.map((item, i) => {
          if (item.id == editItemId) {
            console.log({ ...changedValue, id: editItemId });
            return { ...changedValue, id: editItemId };
          } else {
            console.log(item, editItemId);

            return item;
          }
        });
      });
      console.log(listData);
      setPopEditOpen(false);
      setChangedValue({
        id: '',
        name: '',
        userName: '',
        email: '',
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        removeItem,
        isPopEditOpen,
        listData,
        setListData,
        triggerPopup,
        popTriggeredValue,
        editItemId,
        changedValue,
        setChangedValue,
        alterValues,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
