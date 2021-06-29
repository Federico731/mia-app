import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import Clock from '../time/Time';


function Home() {
  const title = process.env.REACT_APP_TITLE
  const title2 = process.env.REACT_APP_CLASSE
  const title3 = process.env.REACT_APP_REGOLA
  return (
    <div className="App">
      <div  className="logo"><img src="./logo.png" width="350px" height="250px"></img></div>
      <h1>Essential Fantafootball League</h1>
      <Link to="/lista">
         <button className="homeBtn">{title}</button>
     </Link>
     <Link to="/classifica">
         <button className="homeBtn">{title2}</button>
     </Link>
     <Link to="/regolamento">
         <button className="homeBtn">{title3}</button>
     </Link>
     <Clock />
    </div>
  )
}

export default Home;