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
      <div id="Home"></div>
      <div className="header">
        <h1>LiveNEU</h1>
        <img src="src/assets/LiveNEU Logo.png"></img>
      </div>



      <div class="topnav">
        <a href="#About" class="menu">About</a>
        <a href="#Dorms" class="menu">Dorms</a>
        <a href="#Walkthrough" class="menu">Walkthrough</a>
        <a href="#Home" class="menu">Home</a>
        <a href="#Home" class="logo">LiveNEU</a>

      </div>

      <div className="directory"></div>

      <div ref={myRef}></div>

      <div className="section">

        <div id="Walkthrough"><h1>Walkthrough</h1></div>
        <p1> In order to keep roommate groups together, Northeastern offers students the opportunity to select housing as a group through Group Selection. Groups must fill every bed in their apartment (i.e. a 4-person group cannot apply for a 5-person apartment) <br></br><br></br>
          Students participating in Group Selection may be:
        </p1>
        <ul>
          <li>An individual filling a vacant 1-person apartment</li>
          <li>An individual filling an apartment that has 1 vacancy</li>
          <li>A multi-person group filling a vacant apartment of the same size as the group</li>

          <li>A multi-person group filling a larger apartment that has the number of vacancies of the group</li>
        </ul>
        <p2>How to Prepare:</p2>
        <ol>
          <li> Pick your top 3 apartment choices, keeping in mind buildings, room type, and group size scenarios.Remember to keep an open mind and consider different amenities and arrangements. Talk with your group about things you would be willing to compromise to find the best choice for you.</li>
          <li>Assemble the selection information for all students in the group:</li>
          <ul>
            <li>Selection Number</li>
            <li>Scheduled Selection Time</li>
            <li>Roommate NUID</li>

            <li>Roommate Group PIN</li>
          </ul>
          <li>Figure out who has the best selection number and selection time. Whoever has the best selection number (lowest number- closest to 1) will be the person selecting for the group. Make sure this person knows how the group wants to be placed!</li>
        </ol>
        <p1> Login to Housing Online up to five days prior to your selection time to view vacancies on the Northeastern Vacancy Viewer. Plan to FILL all of the bed spaces in the apartment as it is required during the Group Selection  Students may need to expand/decrease their group size during the process in order to fill each space in their selected apartment. For example: If you are in a roommate pair, you would not be able to select spaces in a six person apartment unless you had four other people to select with; your only choices would be two person apartments.</p1>
        <div id="About"><h1>About</h1></div>
        <p1>this is some text</p1>

      </div>

      <ul>
        {dorms.map((dorm) => (
          <li key={dorm.id}>{dorm.name}</li>
        ))}
      </ul>


    </>
  )
}

export default App
