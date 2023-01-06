import React from 'react'
import NavBar from './component/NavBar/NavBar.js'
import {action,original} from './urls'
import './App.css'
import Banner from './component/Banner/Banner'
import RowPost from './component/RowPost/RowPost';
function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={original}title="Netflix Originals"/>  
      <RowPost url={action}title="Action Movies" isSmall/>
    </div>
  )
}

export default App;
