import React from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { Sidenav } from './components/Sidenav';

import './style/global.scss'


function App() {
  return (
    <div className='container-app'>
      <Header/>
      <Sidenav/>
      <Dashboard/>  
    </div>
  );
}

export default App;
