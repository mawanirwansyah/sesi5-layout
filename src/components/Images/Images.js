import React from 'react';
import PropTypes from 'prop-types';

import{
    AvatarStyle
} from './Images.styles'

const Images = ({src, alt }) => {
    return (
       <AvatarStyle src={src} alt={alt}></AvatarStyle>

    );
}

Images.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    
}

export default Images;