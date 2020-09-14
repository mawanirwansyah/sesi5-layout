import React from 'react';

import {
    Btn
} 
from './Button.styles';

const Button = (props) => {
    return (
    <Btn primary={props.primary}>{props.text}</Btn>
        // <button className="button">{param.text}</button>
    );
}

export default Button;