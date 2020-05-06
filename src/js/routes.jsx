import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import LogIn from './login';
import Game from './game';
import passwords from './passwords';
import garcia from './imgs/garcia';
import mixImgs from './mixImgs';

/**
 * Routes of the app
 */

const Routes = ()=>{
return(
    <Switch>
        <Route path="/game/garcia">
            <Game imgs={mixImgs(garcia)}></Game>
        </Route>
        <Route path="/">
            <LogIn passwords={passwords}></LogIn>
        </Route>
    </Switch>

);
}
export default Routes;