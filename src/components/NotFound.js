import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NotFound = () => {
    return (
        
        <h1 className="error">
            <FontAwesomeIcon icon="exclamation-triangle" size="5x" />
            <br /> <br />  
            <p>404 Error <FontAwesomeIcon icon="exclamation" /> Page Not Found.</p>
        </h1>
    );
}

export default NotFound;