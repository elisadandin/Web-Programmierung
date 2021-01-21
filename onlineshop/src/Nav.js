import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'; //um in der Navigationsleiste auf die Seiten zuzugreifen

function Nav() {

    const navStyle = {
        color: 'white' //Objekt erstellen, um Farbe der Schrift der Navigationsleiste zu ändern
    } 
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links"> 
                <Link style={navStyle} to= "/about">
                    <li>About</li>
                </Link>
                <Link style={navStyle} to="/shop">
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;