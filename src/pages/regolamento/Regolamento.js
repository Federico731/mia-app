import Navbar from '../navbar/Navbar';
import { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/CircularProgress';
import ImgMediaCard from '../regolamento/file';
import '../regolamento/regolamento.css';

function Regolamento() {

    const [isLoading, setIsLoading] = useState(true);
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
            { isLoading && <div className="loading"><CircularProgress /></div>}
            { !isLoading &&
                <div>
                    <h3>{title} Lega</h3>
                    <div className="regole">
                    <ImgMediaCard />
                    </div>
                </div>}
        </div>
    )
}

export default Regolamento;