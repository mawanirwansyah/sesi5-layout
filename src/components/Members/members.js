import React from 'react';


import AvatarImages from '../../assets/mawan.jpg';
import Images from '../Images/Images';

import {
    CardMembers,
    CardMembers2
} from './members.styles'


const MembersCard = (propsOrganizer) => {
    return(
        <div >
            <CardMembers>
                <div > <Images src={AvatarImages} alt={AvatarImages} className="AvatarMembers"/></div>
                
                <CardMembers2>
                <h2>Organizers</h2>
                <table>
               
                <tr>
                    <td>{propsOrganizer.name}</td>
                    <td></td>
                    <td>{propsOrganizer.sum}</td>
                </tr>
               
                </table>
               
               
                </CardMembers2>
            </CardMembers>
        </div>
    )
}


export default MembersCard;