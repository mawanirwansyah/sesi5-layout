import React from 'react';

import  './nextcard.css';

const NextCard = (PropsNextCard) => {
    return(
        <div >
            <div className="NextCardMeetup">
               
                <div className="NextCardMeetup2">
                <b>{PropsNextCard.title}</b><br />
            <p>25 January 2019</p>
            <br></br>
            <p>
               Hello, Javascript & Node.js Ninjas!<br></br>
               Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!<br></br>
               The meetup format will contain some sort of stories and technical talks.<br></br>
               If you have short announcement you'd like to share with the audience, you may do so during open mice announcements.
               <br></br>
               Remember to bring photo ID to get through building security.
               <br></br>.....<br></br>
               See you there!<br></br>
               Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers.
               
            </p>
                </div>
            </div>
        </div>
    )
}


export default NextCard;