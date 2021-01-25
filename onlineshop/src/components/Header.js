import React, { Component } from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import {Link} from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="menu">
                    <img src={Menu} alt="" width="20"/>
                </div>
                <div className="logo">
                    <h1><Link to ="/">MyFitnessplace</Link></h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Shop</Link></li>
                        <li className='close'>
                            <img src={Close} alt="" width="20"/>
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span>0</span>
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