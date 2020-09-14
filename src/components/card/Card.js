import React from 'react';

import AvatarImages from  '../../assets/mawan.jpg'
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';

import {
    CardMeetup,
    CardMeetup2,
} from './Card.styles';

const Card = (PropsCard) => {
    return(
        <div >
            <CardMeetup>
                <div ><Avatar src={AvatarImages} alt={AvatarImages}/></div>
                
                <CardMeetup2>
                <h2>Hacktiv8 Meetup</h2>
                <table>
               
                <tr>
                    <td>Location</td>
                    <td></td>
                    <td>{PropsCard.location}</td>
                </tr>
                <tr>
                <td>Members</td>
                <td></td>
                 <td>{PropsCard.members}</td>
                </tr>
                <tr>
                <td>Organizers</td>
                <td></td>
                 <td>{PropsCard.organizer}</td>
                </tr>
                </table>
                <Button primary="primary" text="Join Us!"></Button>
                <Button text="Subscribe"></Button>
                </CardMeetup2>
           </CardMeetup>
        </div>
    )
}


export default Card;