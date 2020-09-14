import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './core/Home';
import CreateProduct from './product/CreateProduct';
import Cart from './cart/Cart';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/create/product' component={CreateProduct} />
                <Route path='/cart' component={Cart} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;