import React, { Component } from 'react';
import { Consumer } from './context';
import Slogan from './Slogan';
import FoodItems from './FoodItems';

class PizzaStore extends Component {

    render() {
        return (
            <React.Fragment>
              <hr className="line" />
              {/* Header ends here */}
              <Slogan />
              <Consumer>
                  { context => (
                    <FoodItems details={context.foodItems} addToCart={context.actions.addToCart} />
                  )}
              </Consumer>
              <hr className="line" />  
              {/* food items ends here */}
            </React.Fragment>
        );
    }
}

export default PizzaStore;