import React from 'react';
import App from '../App';
import Cart from './Cart';
import Account from './Account';
import Contact from './Contact';
import NotFound from './NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class Router extends React.Component {
    render() {
    return (
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/cart" component={Cart} />
                <Route path="/contact" component={Contact} />
                <Route path="/checkout" component={Account} />
                <Route component={NotFound} />
            </Switch>
    );
    }
}

export default Router;