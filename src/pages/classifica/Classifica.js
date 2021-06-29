import Navbar from '../navbar/Navbar';
import TableContainer from '../classifica/tabella';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useState } from 'react';
import '../classifica/classifica.css';

function Classifica() {
    const [isLoading, setIsLoading] = useState(true);
    // page loading 
    const loading = 1;
    // let isLoading = true;
    setTimeout(() => {
        setIsLoading(false);
    }, loading * 1000);
    const title = process.env.REACT_APP_CLASSE
    return (
        <div>
           <Navbar />
           { isLoading && <div className="loading"><CircularProgress /></div>}
            { !isLoading && <div>
           <h3>{title}</h3>
           <TableContainer />
           </div>}
        </div>
    )
}

export default Classifica; 