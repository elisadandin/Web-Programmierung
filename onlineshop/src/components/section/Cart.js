import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Cart.css'

export class Cart extends Component {
    static contextType = DataContext;

    render() {
        const {cart, increase, reduction} = this.context;
        return (
            <>
                {
                    cart.map(item =>(
                        <div className="CartItem" key={item._id}>
                            <img src={item.src} alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <div className="amount">
                                    <button className="count" onClick={() => reduction(item._id)}> - </button>
                                    <span>{item.count}</span>
                                    <button className="count" onClick={() => increase(item._id)}> + </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </>
                    
           
        )
    }
}

export default Cart