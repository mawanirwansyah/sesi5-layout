import React from 'react';
import PropTypes from 'prop-types';



import './Images.css';


const Images = ({src, alt }) => {
    return (
        <img src={src} alt={alt} className="Images"/>

    );
}

Images.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    
    

}

export default Images;