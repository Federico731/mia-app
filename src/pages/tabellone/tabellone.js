import Navbar from '../navbar/Navbar';
import { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../tabellone/tabellone.css'
import { Bracket } from 'react-tournament-bracket';
import { render } from 'react-dom';
import { Side } from 'react-tournament-bracket/lib/components/model';
import * as JSOG from 'jsog';
import DATA from './demo-data'; 
import * as _ from 'underscore';
import * as React from 'react';

  export default function Tabellone() { 
    const [isLoading, setIsLoading] = useState(false);
    // page loading 
    const loading = 1;
    // let isLoading = true;
     setTimeout(() => {
       setIsLoading(false);
     }, loading * 1000);
    const title = process.env.REACT_APP_REGOLA
    const GAMES = JSOG.decode(DATA);
    const ROOT = _.findWhere(GAMES, { id: '35b0745d-ef13-4255-8c40-c9daa95e4cc4' }); 

   
   const state = {
    homeOnTopState: true,
    hoveredTeamId: null
  };

  
  return (  
    <div>
      <Navbar />
       {isLoading && <div className="loading"><CircularProgress /></div>}
      {!isLoading &&  
        <div > 
          <h2>Tabellone fase finale Euro2020</h2>
          <Bracket game={ROOT} />   
        </div> }
    </div>
  )
}
