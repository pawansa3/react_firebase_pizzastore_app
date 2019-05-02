import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';

class Food extends React.Component {
    render () {
        return (
            <Col md={4}>
                {/* {console.log(this.props.details.name)} */}
                <img src={this.props.details.image} alt="" className="img-responsive" />
                <ListGroup>
                    <ListGroup.Item className="supreme_title">Supreme</ListGroup.Item>
                    <ListGroup.Item className="pizza_name">
                        <b>{ this.props.details.name }</b>
                    </ListGroup.Item>
                    <ListGroup.Item className="pizza_desc">
                        {this.props.details.desc}
                    </ListGroup.Item>
                    <ListGroup.Item className="pizza_size">
                        <b>Crust: </b>{this.props.details.crust} | <b>Size: </b>{this.props.details.size}
                    </ListGroup.Item>
                    <ListGroup.Item className="pizza_price">
                        <b>{this.props.details.price} </b>
                        <button className="btn pizza_add" onClick={ () => this.props.addToCart(this.props.index) }> Add to cart</button>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        );
    }
}
export default Food;