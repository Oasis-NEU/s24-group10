import { useEffect, useState, useRef } from 'react'
import DormsPage from './DormsPage';
import './App.css'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Link, createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom'
import { dormTable } from './types/Dorm'
import { supabase } from './utils/supabase';
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [dorms, setDorms] = useState([]);

  useEffect(() => {
    console.log("loading");
    readDorms();
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
    <BrowserRouter>
      <div id="Home"></div>
      <div className="header">
        <h1>LiveNEU</h1>
        <img src="src/assets/LiveNEULogoWhite.png"></img>
      </div>

      <div className="topnav">
        <a href="#About" className="menu">About</a>

        <a href="#Walkthrough" className="menu">Walkthrough</a>
        <a href="#Dorms" className="menu">Dorms</a>
        <a href="#Home" className="menu">Home</a>
        <a href="#Home" className="logo">  LiveNEU <img src="src/assets/LiveNEULogoWhite.png" className='second' /> <img src="src/assets/LiveNEULogoWhite.png" className='first' />  </a>
        <a className="gap"></a>

      </div>

      <div className="directory"></div>

      <div ref={myRef}></div>

      <div className="section">

        <div id="Walkthrough"><h1>Walkthrough</h1></div>
        <h2> In order to keep roommate groups together, Northeastern offers students the opportunity to select housing as a group through Group Selection. Groups must fill every bed in their apartment (i.e. a 4-person group cannot apply for a 5-person apartment) <br></br><br></br>
          Students participating in Group Selection may be:
        </h2>
        <ul>
          <li>An individual filling a vacant 1-person apartment</li>
          <li>An individual filling an apartment that has 1 vacancy</li>
          <li>A multi-person group filling a vacant apartment of the same size as the group</li>

          <li>A multi-person group filling a larger apartment that has the number of vacancies of the group</li>
        </ul>
        <h3>How to Prepare:</h3>
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
        <h2> Login to Housing Online up to five days prior to your selection time to view vacancies on the Northeastern Vacancy Viewer. Plan to FILL all of the bed spaces in the apartment as it is required during the Group Selection  Students may need to expand/decrease their group size during the process in order to fill each space in their selected apartment. For example: If you are in a roommate pair, you would not be able to select spaces in a six person apartment unless you had four other people to select with; your only choices would be two person apartments.</h2>
        <h3>Timeline: </h3>

        <ul>
          <li>
            December 2023
            <ul>
              <li>Applications posted to your Housing Online.</li>
            </ul>
          </li>
          <li>
            January 19, 2024
            <ul>
              <li>Fall and Spring Applications Due. Required students who do not submit applications will receive higher (less desirable) selection numbers.</li>
            </ul>
          </li>
          <li>
            February 2, 2024
            <ul>
              <li>Selection numbers and information sent to your Northeastern Email.</li>
            </ul>
          </li>
        </ul>

        <h3>Email Example </h3>
        <h2>This is an example of the email you will receive containing your selection number.</h2><br /><br />

        <img className="exampleImage" src="src/assets/EmailExample.png" ></img>

        <h3>PAWS Placement:</h3>
        <h2>Placement Assistance with Staff is a part of Northeastern’s Housing Selection & Placement process.  You are guaranteed housing for Fall 2024  Because so many Northeastern students participate in study abroad or co-op opportunities outside of the Boston area, or secure off-campus housing, we can anticipate a number of cancellations and manage available space through PAWS. If you do not select a room during the first selection process, you will participate in the PAWS process.</h2>
        <ul>
          <li>We can anticipate a number of student cancellations and manage available space through PAWS.</li>
          <li>If you do not select a room during the first selection process, you will participate in the PAWS process.</li>
          <li>
            PAWS placement form
            <ul>
              <li>Placement Forms become available at the beginning of Selection.</li>
            </ul>
          </li>
          <li>Approximately 25% of students will be placed via PAWS, which is a routine part of Northeastern’s Housing Selection & Placement Process. You are still guaranteed university housing for Fall 2024.</li>
        </ul>

        <div id="About"><h1>About</h1></div>
        <h3>Our Mission:</h3>
        <h2>Our mission at LiveNEU is to simplify and enhance the dorm room and building selection process for upperclassmen at Northeastern University. We understand the importance of finding the perfect living space that meets individual preferences and needs. With our application, we aim to provide a user-friendly platform that offers comprehensive information about dorm rooms and buildings, helping students make informed decisions about their housing options. By streamlining the search process and offering easy access to essential details, such as room layouts, amenities, and location, we empower students to find the right dorm for themselves quickly and efficiently.</h2>

        <div id="Dorms"><h1>Dorms</h1></div>
        <table>
          <tr>
            <th>Dorm</th>
            <th>Address</th>
            <th>Lorem Ipsum</th>
            <th>AAAA</th>
          </tr>
          {dorms.map((dorm) => (
            <tr> <td> {dorm.name} </td> <td>*Addresses go here*</td> </tr>
          ))}
        </table>
        <br />
      </div>

      <div className="cardSection">
        <a href="#Dorms" className="card"  >  <img className="cardImage" src="src/assets/IV.jpeg" /> <h3> Dorms </h3> </a>
        <a href="https://housing.northeastern.edu/" target="_blank" className="card">  <img className="cardImage" src="src/assets/NEUHousing.webp" /> <h3> Northeastern Housing </h3> </a>
        <a href="https://mercury.neu.edu/RunFeature/RunFeature?ftl=Xbff75b7fe39b4d84878a96b942409c5d" target="_blank" className="card">  <img className="cardImage" src="src/assets/ISEC.jpg" /> <h3> Housing Online </h3> </a>
      </div>

    </BrowserRouter>
  )
}

export default App
