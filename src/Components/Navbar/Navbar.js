import React from 'react';
import { Link } from "react-router-dom";

import './Navbar.scss';

const Navbar = ()=>{
    return (
      <div className="navbar-container container mb-3">
        <div className="row">
          <div className="col-12">

            <Link to={`/home`}>
                <button className="btn btn-primary m-1">Home</button>
            </Link>
            
            <Link to={`/counter`}>
                <button className="btn btn-primary m-1">Counter</button>
            </Link>

            <Link to={`/todos`}>
                <button className="btn btn-primary m-1">Todos</button>
            </Link>

          </div>
        </div>
      </div>
    );
}

export default Navbar