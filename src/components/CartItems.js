import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

class CartItems extends React.Component {
    
  renderCart = key => {
    const food = this.props.details[key];
    const count = this.props.cartItems[key];
    if(!food) return null;
    else {
      return (
        <tr key={key}>
          <td>
              <h4>{food.name}<strong id="mark-non-veg">&nbsp;&nbsp;</strong></h4>
              <img src={food.image} alt="" style={{ height: "50px", }} className="text-center img-responsive" />
          </td>
          <td className="pizza_size"><b>Crust: </b>{food.crust} | <b>Size: </b>{food.size}</td>
          <td> <div className="counter">
            <button className="counter-action decrement" onClick={() => this.props.changeQty(key, -1)}><FontAwesomeIcon icon="minus" /></button>
					  <span className="counter-score">{ count }</span>
					  <button className="counter-action increment" onClick={() => this.props.changeQty(key, 1)}><FontAwesomeIcon icon="plus" /></button>
            </div>
          </td>
          <td className="pizza_price">Rs. {food.price}</td>
        </tr>
      );
    } 
  }

  render() {
    const cartIds = Object.keys(this.props.cartItems);
    const total = cartIds.reduce((prevTotal, key) => {
      const food = this.props.details[key];
      const count = this.props.cartItems[key];
      return prevTotal + count * food.price;
    }, 0);

    return (
      <React.Fragment>
      <Table responsive hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Customize</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          { cartIds.map(this.renderCart) }
        </tbody>
      </Table>
      <hr className="line"/>
      <Row>
          <Col md={{ span: 3, offset: 9 }}>
              <h4 className="order_total">Order Total: Rs. {total}</h4> 
              <Link to="/checkout" className="btn checkout">Checkout</Link>
          </Col>
      </Row>
      </React.Fragment>
    );
    }
}

export default CartItems;