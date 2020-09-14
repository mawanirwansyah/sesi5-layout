import React from 'react';
import Button from '../Button/Button';

import {
    PastCardcss,
    PastCardcss2,
} from './pastcard.styles';

const PastCard = (props) => {
    return(
            <PastCardcss>
                <PastCardcss2>
                <b>{props.date}</b><br />
            <hr></hr>
            <b>{props.deskripsi}</b>
            <br></br>
            <p>{props.went} &nbsp;<text>went</text></p>
            <Button primary="primary" text="View!"></Button>
                </PastCardcss2>
            </PastCardcss>
    );
}

export default PastCard;
