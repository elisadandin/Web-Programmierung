import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Cart.css'

export class Cart extends Component {
    static contextType = DataContext;

    render() {
        const {cart, increase, reduction, remove} = this.context;
        if(cart.lenght === 0){
            return <h2 style={{textAlign:"center"}}>Warenkorb ist leer</h2>
        }else{
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
                                </div>
                                <button className="delete" onClick={() => remove(item._id)}>Löschen</button>
                            </div>
                        ))
                    }
                    <div className="total">
                        <Link to="/payment"> 
                        Bezahlen 
                        </Link>
                        <br/>
                        <h3>Gesamtsumme: 0</h3>
    
                    </div>
                </>
                )
            }
        }  
        
    }
export default Cart