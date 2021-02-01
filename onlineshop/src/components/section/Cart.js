import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Cart.css'

export class Cart extends Component {
    static contextType = DataContext;

    render() {
        const {cart} = this.context;
        return (
            <>
                {
                    cart.map(item =>(
                        <div className="products" key={item._id}>
                            <img src={item.src} alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <Link to="cart" className="cart">
                                    Add to Cart
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </>
                    
           
        )
    }
}

export default Cart