import React from 'react';
import Home from './pages/home/Home';
import Lista from './pages/lista/Lista';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Classifica from './pages/classifica/Classifica';
import Regolamento from './pages/regolamento/Regolamento';
import Tabellone from './pages/tabellone/tabellone'

function Prima() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/lista" component={Lista}/>
          <Route exact path="/classifica" component={Classifica}/>
          <Route exact path="/regolamento" component={Regolamento}/>  
          <Route exact path="/tabellone" component={Tabellone}/>   
        </Switch>
      </div>
    </Router>
  )
}

export default Prima;