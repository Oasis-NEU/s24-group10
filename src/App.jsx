import { useEffect, useState, useRef } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Link } from 'react-router-dom'
import { dormTable } from './types/Dorm'
import { supabase } from './utils/supabase';

function App() {
  const [dorms, setDorms] = useState([]);

  useEffect(() => {
    //async function run() {
    console.log("loading");
    readDorms();
    //}
  })

  async function readDorms() {
    const { data, error } = await supabase.from(dormTable).select();

    if (error) {
      alert(`ERROR ${error.code}:\n${error.message}`);
    } else {
      setDorms(data);
    }
  }


  const myRef = useRef(null)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <>
      <div class="topnav">
      <a href="#about">About</a>
      <a href="#Dorms">Dorms</a>
      <a href="#Walkthrough">Walkthrough</a>
      <a href="#home">Home</a>
      </div><title>Family</title><div className="directory">

      </div><div className="header">
        <h1>LiveNEU</h1>


      </div><div ref={myRef}></div><h1>Dorm List</h1><ul>
        {dorms.map((dorm) => (
          <li key={dorm.id}>{dorm.name}</li>
        ))}
      </ul></>
  )
}

export default App
