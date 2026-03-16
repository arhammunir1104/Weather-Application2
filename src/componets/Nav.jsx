import React from "react";
import { NavLink } from "react-router-dom";


function Nav(){

    return(
        <>
        
        <div>
            <div>
            <NavLink to={"/"}>Weather App</NavLink>
        </div>

        <div>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
            <NavLink to={"/privacy-policy"}>Privacy Policy</NavLink>
        </div>
        </div>
        </>
    )

};


export default Nav;