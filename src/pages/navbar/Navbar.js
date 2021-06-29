import './Navbar.css';
import {Link} from 'react-router-dom';
import Clock from '../time/Time';

function Lista() {
    return (
        <div className="Navbar">
            <div  className="logo"><img src="./logo.png" height="50px"></img>  </div>
            <h1>Essential Fantafootball League</h1>
            <Clock />
            <ul className="Elenco">
               <Link to="/">
                   <li>Home</li>
               </Link> 
               <Link to="/lista">
                 <li>Squadre</li>
               </Link>
               <Link to="/classifica">
                 <li>Classifica</li>
               </Link>
               <Link to="/regolamento">
                 <li>Regolamento</li>
              </Link>  
            </ul>
        </div>
    )
}

export default Lista;