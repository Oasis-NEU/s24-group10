import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import { createClient } from '@supabase/supabase-js'

//const supabaseUrl = 'https://zcpsievhvzshzdtfxzka.supabase.co'
//const supabaseKey = process.env.SUPABASE_KEY
//const supabase = createClient(supabaseUrl, supabaseKey)
function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);};
  return (
    
    
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to edit.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
    <html>
      

    <title>Family</title>

    <div class="header">

     <h1>LiveNEU</h1>
     <button class="hamburger"     
      onClick={handleClick}> <div class = "buttonOption"> 
      ☰
      </div>  
      
      </button> 


      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Walk Through</MenuItem>
        <MenuItem onClick={handleClose}>Dorms</MenuItem>
        <MenuItem onClick={handleClose}>About</MenuItem>

      </Menu> 
     
     </div>
     
    
    </html>
  );
}

export default App;
