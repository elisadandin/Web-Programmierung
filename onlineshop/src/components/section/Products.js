import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Products.css'

export class Products extends Component {

    static contextType = DataContext;

    render() {
        //create a context for products
        const {products} = this.context;
        return (
            <div id="product">
                {
                    //map() function creates array by calling a specific function "products"
                    products.map(product =>(
                        <div className="shoppingcard" key={product._id}>
                                <img src={product.src} alt=""/>
                            <div className="content">
                                <h3>{product.title}</h3>
                                <span>${product.price}</span>
                                <p>{product.description}</p>
                                <button onClick={()=> this.context.addCart(product._id)}>in den Einkaufswagen</button>

                            </div>
                        
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Products