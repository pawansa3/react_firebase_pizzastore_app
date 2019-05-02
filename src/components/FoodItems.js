import React from 'react';
import { Row } from 'react-bootstrap';
import Food from './Food';

const FoodItems = (props) => {
    return (
      <Row>
        {Object.keys(props.details).map(key => 
          <Food 
            key={key}
            index={key}
            details={props.details[key]}
            addToCart={props.addToCart}
          />
         )}
      </Row>
    );
}

export default FoodItems;