import React from 'react';



import Button from '../Button/Button';

import  './pastcard.css';

const PastCard = (props) => {
    return(
            <div className="PastCardcss">
               
                <div className="PastCardcss2">
                <b>{props.date}</b><br />
            <hr></hr>
            <b>{props.deskripsi}</b>
            <br></br>
            <p>{props.went} &nbsp;<text>went</text></p>
            <Button buttonText="View"/>
                </div>
            </div>
    );
}




export default PastCard;
