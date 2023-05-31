import '../App.css'
import React from "react";
import {Link, Outlet} from "react-router-dom";
// import Nested from './Nested';

class Disabled extends React.Component{
    render(){
        return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-parent">
        <div class="container-fluid nav-div" id="nav-div">
            <div className="collapse navbar-collapse" id="navbarNav" >
                <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" id="nav-cont" aria-current="page" to="/disabled/nested">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" id="nv-cont" to="/">Gifts</Link>
                      </li>
                      </ul>
            </div>
        </div>
   </nav>
    <Outlet/>
    </>
        )
    }
}

export default Disabled;