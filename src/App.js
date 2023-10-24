import React from 'react';
import './App.css';
import { Styles } from './Styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Data from './Data';

function App() {
  return (
    <>

    <BrowserRouter>

    <Routes>
      <Route path='/' element={ <Styles/>  }/>
      <Route path='/:id' element={ <Data/>  }/>
    </Routes>
    </BrowserRouter>
    
    
    
    </>
  );
}

export default App;
