import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({buttonText}) => {
    return(
        <div>
        <button type="button" className="Buttonjs button2">{buttonText}</button> 
        </div>
    );
}


Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
   
    

}

export default Button;