import { useEffect, useState, useRef } from 'react';
import { Form } from "react-router-dom";
import { addressTable, dormTable } from './types/Dorm';
import { supabase } from './utils/supabase';
import "./Dorms.css"
function Dorms() {
  const [dorms, setDorms] = useState([]);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    async function run() {
      console.log("loading");
      await readAddress();
      await readDorms();
    }
    //run()
  }, [])

  async function readDorms() {
    const { data, error } = await supabase.from(dormTable).select();

    if (error) {
      alert(`ERROR ${error.code}:\n${error.message}`);
    } else {
      setDorms(data);
    }
  }

  async function readAddress() {
    const { data, error } = await supabase.from(addressTable).select();

    if (error) {
      alert(`ERROR ${error.code}:\n${error.message}`);
    } else {
      setAddresses(data);
    }
  }

  function getAddresses(addr, id) {
    //if addresses
  }
    return (
        <>

      <div id="Home"></div>
      <div className="header">
        <h1>LiveNEU</h1>
        <img src="/images/LiveNEULogoWhite.png"></img>
      </div>

      <div className="topnav">
        <a href="/#About" className="menu">About</a>

        <a href="/#Walkthrough" className="menu">Walkthrough</a>
        <a href="/#Home" className="menu">Home</a>
        <a href="/#Home" className="logo">  LiveNEU <img src="/images/LiveNEULogoWhite.png" className='second' /> <img src="/images/LiveNEULogoRed.png" className='first' />  </a>
        <a className="gap"></a>

      </div>

        <div className='section'>
        <h1>Dorms</h1>
        <table>
          <tr>
            <th>Dorm</th>
            <th>Address</th>
          </tr>
          {dorms.map((dorm) => (
            <tr key={dorm.id}> <td> {dorm.name} </td> <td key={dorm.address}> <address style={{ whiteSpace: "pre-line" }} > {
              addresses.find((addr => addr.id == dorm.address)).street +
              "\n" +
              addresses.find((addr => addr.id == dorm.address)).city +
              ", " +
              addresses.find((addr => addr.id == dorm.address)).state +
              " " +
              addresses.find((addr => addr.id == dorm.address)).zipcode
            } </address> </td> </tr>
          ))}
        </table>
        </div>
        </>


    );
}

export default Dorms
