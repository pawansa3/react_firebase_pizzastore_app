import React from 'react';
import { Consumer } from './context';
import CartItems from './CartItems';

const Cart = (props) => {
    return (
        <React.Fragment>
            <p className="supreme">
                <img src="images/left-line.png" alt="" /> CART <img src="images/right-line.png" alt="" />
            </p>
            <Consumer>
                { context => (
                    <CartItems 
                        cartItems={context.cart} 
                        details={context.foodItems}
                        changeQty={context.actions.changeQty} 
                    />
                )}
            </Consumer>
        </React.Fragment>
    );
}

export default Cart;