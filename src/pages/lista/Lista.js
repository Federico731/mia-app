import Navbar from '../navbar/Navbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import '../lista/lista.css';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../action/index';
import { decrement } from '../action/index';

function Lista() {
    const counter = useSelector(state => state);
    const dispatch = useDispatch(); 
    const squadra = []
    const [isLoading, setIsLoading] = useState(true);
    const [squadre, setSquadre] = useState([]);
    // page loading   
    const loading = 1;
    // let isLoading = true;
    setTimeout(() => {
        setIsLoading(false);
    }, loading * 1000);
    function incrementSquadre() {
        setSquadre([...squadre, 0])
    }
    function decrementSquadre() {
        const temp = [...squadre];
        temp.pop()
        setSquadre(temp)
    }
    const title = process.env.REACT_APP_TITLE
    return (
        <div>
            <Navbar />
            { isLoading && <div className="loading"><CircularProgress /></div>}
            { !isLoading && <div>
                <h3>{title}</h3>
                <div className="cerchi">
                    {squadre.map((squadra, counter) => <Avatar className="Avatar" value={counter} src="./logo.png" />)}
                </div> <br></br>
                <div className="text">
                    <TextField id="filled-basic" label="Nome Squadra" variant="filled" />
                    <TextField id="filled-basic" label="Nome Presidente" variant="filled" /> <nobr></nobr>
                    <Button variant="contained" color="primary" onClick={() => {
                        incrementSquadre()
                    }}>
                        Salva
                       </Button> <br></br>
                    <h4> Il numero delle squadre partecipanti è: {squadre.length} </h4>
                    <TextField id="filled-basic" label="Nome Squadra" variant="filled" /> <nobr></nobr>
                    <Button variant="contained" color="primary" onClick={() => {
                        decrementSquadre()
                    }}>
                        Elimina
                       </Button> <br></br>
                </div>
            </div>}
        </div>
    )
}

export default Lista;