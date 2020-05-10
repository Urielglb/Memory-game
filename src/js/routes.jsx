import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import LogIn from './login';
import Game from './game';
import passwords from './passwords';
import mixImgs from './mixImgs';
import islas from './imgs/islas';
import garciaLuna from './imgs/garcia-luna';
import garcia from './imgs/garcia';


/**
 * Routes of the app
 */

const Routes = ()=>{
return(
    <Switch>
        <Route path="/game/garcia">
            <Game imgs={mixImgs(garcia)}></Game>
        </Route>
        <Route path="/game/islas">
            <Game imgs={mixImgs(islas)}></Game>
        </Route>
        <Route path="/game/garcia-luna">
            <Game imgs={mixImgs(garciaLuna)}></Game>
        </Route>
        <Route path="/">
            <LogIn passwords={passwords}></LogIn>
        </Route>
    </Switch>

);
}
export default Routes;