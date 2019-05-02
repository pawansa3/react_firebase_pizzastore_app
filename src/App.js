import React, { Component } from 'react';
import './App.css';
import { Provider } from './components/context';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavHeader from './components/NavHeader';
import PizzaStore from './components/PizzaStore';
import Cart from './components/Cart';
import Account from './components/Account';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import base from './base';


class App extends Component {

  state = {
    foodItems: {},
    cart: {}
  };

  componentDidMount() {
    this.foodItemsRef = base.syncState('FoodItems', {
      context: this,
      state: "foodItems"
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.foodItemsRef);
  }
  
  addToCart = (key) => {
    // console.log(key);
    //taking copy of previous cart
    const cart = {...this.state.cart};
    //updating old cart or adding new cart item to state
    cart[key] = cart[key] + 1 || 1;
    //setting the state
    this.setState({cart});
  }
  changeQty = (key, i) => {
    // console.log(key + " " + i);
    const cart = {...this.state.cart};
    cart[key] = cart[key] + i;
    if(cart[key] <= 0) {
      delete cart[key];
    }
    this.setState({cart});
  }

  render() {
    return (
      <Provider value={{
        foodItems: this.state.foodItems,
        cart: this.state.cart,
        actions: {
          addToCart: this.addToCart,
          changeQty: this.changeQty
        }
      }}>
      <BrowserRouter>
        <Container>
          <NavHeader />

          <Switch>
            <Route exact path="/" component={PizzaStore} />
            <Route path="/cart" component={Cart} />
            <Route path="/contact" component={Contact} />
            <Route path="/checkout" component={Account} />
            <Route component={NotFound} />
          </Switch>
          
        </Container>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
