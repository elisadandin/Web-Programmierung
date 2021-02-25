import React, { Component } from 'react'
import CartIcon from './svg/shopping-cart-solid.svg'
import HeartIcon from './svg/heart.svg'
import {Link} from 'react-router-dom'
import './css/Header.css'
import {DataContext} from './Context'


export class Header extends Component {
    static contextType = DataContext;


    render() {
        const {cart} = this.context;
        return (
            <header>
                <div className="logo">
                    <h1><Link to ="/">MyFitnessplace <img src={HeartIcon} alt="" width="40"/></Link></h1> 
                </div>
                <nav>
                    <ul>
                        <li><Link to="/product">Produkte</Link></li>
                    </ul>
                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <img src={CartIcon} alt="" width="20"/>
                        </Link>
                    </div>
                </nav>

            </header>
        )
    }
}

export default Header