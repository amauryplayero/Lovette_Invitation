import React from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export default function FirstSlide() {

   
    const navigate = useNavigate()

    
    console.log(window.location.href)
    const goToSecondSlide=()=>{
        console.log(window.location.href)
  
        let url = window.location.href
        window.location.href= `${window.location.href}SecondSlide`
    }

    var i = 0;
    var txt = `i want u with me celebrating my 22nd year around the sun.
   it’s happening june 25, 2022 @ 9pm. this party is invite-only
  and byob. let me know if you'd like to take anyone along.`
    var speed = 50;
    let textInElement = ""

    let componentShown = <FirstSlide />
    
    

  return (
      <>
    {/* <div>FirstSlide</div> */}
    <div className="everythingContainer">
    <img src="https://i.imgur.com/rpdn1W8.jpg" className="logoImg"></img>
        <div>
             <p className="invitationText">Hi! You’re invited to join me July 18th at Prospect park to celebrate my 20th bday❤ 
            </p>
        </div>
    <a href="#section1.5" className="whatUThink">Where???</a>
    </div>

   
    </>
  )
}
