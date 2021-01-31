import React, { Component } from 'react'
import Products from './section/Products'
import {Route} from "react-router-dom"
import Cart from './section/Cart'

export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/product" component={Products} exact />
                <Route path="/cart" component={Cart} />
            </section>
        )
    }
}

export default Section