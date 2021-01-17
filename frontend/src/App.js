import React from "react";

import './App.css';
import Home from './pages/Home';
import Navbar_page from './components/Navbar_page.js';
import Footer_page from './components/Footer_page.js';


function App() {
  return (
    <React.Fragment>
      <Navbar_page />
      <Home />
      <Footer_page />
   </React.Fragment>

  );
}

export default App;
