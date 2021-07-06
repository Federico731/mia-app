import Navbar from '../navbar/Navbar';
import { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../tabellone/tabellone.css'
import TableContainer from '../tabellone/tabella'; 
import TabFinale from '../components/TabFinale';


export default function Tabellone() { 
  const [isLoading, setIsLoading] = useState(false);
   // page loading 
   const loading = 1;
   // let isLoading = true;
    setTimeout(() => {
      setIsLoading(false);
    }, loading * 1000);
   const title = process.env.REACT_APP_REGOLA
  return (
    <div>
      <Navbar />
       {isLoading && <div className="loading"><CircularProgress /></div>}
      {!isLoading &&  
        <div >
          <h2>Tabellone fase finale Euro2020</h2>
          {/* <TableContainer></TableContainer>  */}
         <TabFinale></TabFinale>  
        </div> }
    </div>
  )
}
