import React from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export default function FirstSlide() {

   
    const navigate = useNavigate()

    const goToSecondSlide=()=>{
        window.location.href="http://localhost:3002/SecondSlide"
    }

    var i = 0;
    var txt = `i want u with me celebrating my 22nd year around the sun.
   it’s happening june 25, 2022 @ 9pm. this party is invite-only
  and byob. let me know if you'd like to take anyone along.`
    var speed = 50;
    let textInElement = ""
    
    

  return (
      <>
    {/* <div>FirstSlide</div> */}
    <div className="everythingContainer">
    <img src="https://i.imgur.com/rpdn1W8.jpg" className="logoImg"></img>
        <div className="typewriter">
             <p className="invitationText">i want u with me celebrating my 22nd year around the sun.it’s happening june 25, 2022 @ 9pm. this party is invite-only
            and byob. let me know if you'd like to take anyone along.
            </p>
        </div>

        <div className="typewriter">
             <p className="invitationText">around the sun.it’s happening june 25, 2022 @ 9pm. 
        </p>
        </div>

        <div className="typewriter">
             <p className="invitationText">this party is invite-only
            and byob. let me know if you'd like to take anyone along.
        </p>
        </div>

    <button onClick={()=>goToSecondSlide()} className="whatUThink">tap me to learn more abt the theme.</button>
    </div>
    </>
  )
}