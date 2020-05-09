import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import '../styles/log-in.scss';

/**
 * React Component that will recieve the password the user gives and check if it´s in the saved passwords, if it is, it will render
 * a Link component with a ref to the game associated with the password
 * @param {The props of the button} props 
 */
const Button = (props)=>{
    if (props.passwords[props.password]) {
        return(
            <Link to={props.passwords[props.password]} className="button">Ingresar</Link>
        );
    }
    return("");
}

/**
 * React Componet that will ask the user for a password and check if it´s valid, if it is it will show a button with a link to
 * the game associated with the password
 * @param {Th props of the log in} props 
 */
const LogIn = (props)=>{
    const [password,setPassword] = useState(null);
    return(
        <div className="log-in">
            <h1>Bienvenidas</h1>
            <input type="text" placeholder="Ingrese su contraseña" 
            onChange={(e)=>{setPassword(e.target.value)}}
            ></input>
            <br></br>
            <Button password={password} passwords={props.passwords}></Button>
        </div>
    );
}

export default LogIn;