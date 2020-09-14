import React from 'react';
import PropTypes from 'prop-types';

import {
    ImagesStyle
} from './Avatar.styles'

const Avatar = ({src, alt }) => {
    return (
       <ImagesStyle src={src} alt={alt}></ImagesStyle> 

    );
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    
}

export default Avatar;