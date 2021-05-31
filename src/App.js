import React, { useState } from 'react'

import './App.scss';
import Accessory from './Components/Accessory/Accessory';
import { Decoration } from './Components/Decoration/Decoration';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav'
import SendGift  from './Components/SendGift/SendGift';
import Share from './Components/Share/Share';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  const [changeTheme, setChangeTheme] = useState(false);

  return (
    <div className="App">
    <Router>
      <Nav changeTheme={changeTheme} setChangeTheme={setChangeTheme}/>
      <Home/>
      <Share/>
      <Decoration/>
      <Accessory/>
      <SendGift/>
      <Footer changeTheme={changeTheme}/>
    </Router>
    </div>
  );
}

export default App;
