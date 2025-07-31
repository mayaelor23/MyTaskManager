//import { useState } from 'react'
//import React from 'react'
import Header from './components/header/Header'
import Body from './components/Body/body';

import './App.css'

function App() {
 
  return (
    <div className="App">
      <div className='Header'>
         <Header></Header>
      </div>
      <div className='Body'>
        <Body></Body>
      </div>
    </div>
  );
}
export default App
