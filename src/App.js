import React from 'react';
import './App.css';
import NameList from './NameList';
import PopEdit from './PopEdit';
import Header from './Header';

function App() {
  return (
    <div className='section'>
      <div className='structure'>
        <Header />
        <NameList />
      </div>
      <PopEdit className='pop-edit' />{' '}
    </div>
  );
}

export default App;
