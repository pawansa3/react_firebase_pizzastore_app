import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Slogan = () => {
    return (
        <Row>
            <Col md={12}>
                <p className="supreme">
                <img src="images/left-line.png" alt="" /> SUPREME <img src="images/right-line.png" alt="" />
                </p>
                <p className="slogan">THINK PIZZA. THINK PIZZA HUT.</p>
            </Col>
        </Row>
    );
}

export default Slogan;