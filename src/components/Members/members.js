import React from 'react';


import AvatarImages from '../../assets/mawan.jpg';
import Images from '../Images/Images';

import  './members.css';


const MembersCard = (propsOrganizer) => {
    return(
        <div >
            <div className="CardMembers">
                <div > <Images src={AvatarImages} alt={AvatarImages} className="AvatarMembers"/></div>
                
                <div className="CardMembers2">
                <h2>Organizers</h2>
                <table>
               
                <tr>
                    <td>{propsOrganizer.name}</td>
                    <td></td>
                    <td>{propsOrganizer.sum}</td>
                </tr>
               
                </table>
               
               
                </div>
            </div>
        </div>
    )
}


export default MembersCard;