import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Cart.css'


//Klasse Cart erzeugen, die von der Klasse Component abgeleitet wird
export class Cart extends Component {
    static contextType = DataContext;

    //Gesamtsumme bestimmen und anzeigen lassen
    componentDidMount(){
        this.context.getTotal();
    }

    render() {
        const {cart, remove, total} = this.context;
        //if else Befehl, wenn Warenkorblänge = 0, dann anzeigen lassen 'Warenkorb ist leer'
        if(cart.lenght === 0){ 
            return <hr style={{textAlign:"center"}}>Warenkorb ist leer</hr>
        }else{
            return (
                <>
                    { //map() function creates array by calling a specific function "item"
                        cart.map(item =>(
                            //als Key 'item._id' wählen 
                            <div className="CartItem" key={item._id}>
                                <img src={item.src} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>${item.price}</span>
                                    </div>
                                    <p>{item.description}</p>
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
                        <h3>Gesamtsumme: ${total}</h3>
                    </div>
                </>
                
                )
            }
        }  
        
}
export default Cart