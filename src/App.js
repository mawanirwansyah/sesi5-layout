import React from 'react';

import './App.css';

import Card from './components/card/Card';
import Navbar from './components/Navbar/Navbar';
import NextCardd from './components/NextCard/nextcard';
import Memberss from './components/Members/members';
import PastCardd from './components/PastCard/pastcard';

function App() {
  return (
    <div className="App">
    
    < Navbar/>
   <div className="margin">
    < Card location="Jakarta, Indonesia" members="1,078" organizer="Adhy Wiranata" />
    
    <h2>Next Meetup</h2>

    < NextCardd title="Awesome Meetup and event"/>

    <h2>About Meetup</h2>
        <p> 
          Come and meet other developers interested in the JavaScript and its library in the Greater Jakarta area<br /><br />
          Twitter: @JakartaJS and we user the hashtag #jakartajs
        </p>
        <br />

        <div>
          <h2>Members</h2> 
        </div>

    < Memberss name="Adhy Wijaya" sum="1,041" />

    <h2>Past Meetup</h2> 

  <div className="flex-container">
  <div> <PastCardd date="27 November 2017" deskripsi="#39 JakartaJS April Meetup with Kumparan" went="139"/></div>
  <div> <PastCardd date="27 November 2017" deskripsi="#38 JakartaJS April Meetup with Blibli  and other" went="113"/></div>
  <div> <PastCardd date="27 November 2017" deskripsi="#37 JakartaJS April Meetup with Hacktiv8" went="110"/></div>  
  </div> 
</div>
  
  

    

    <hr></hr>
        <br />
        <center><text className="copyright">Copyright &copy; Hacktiv8 2020 </text></center>
        <br />
    </div>

    
    
  );
}

export default App;
