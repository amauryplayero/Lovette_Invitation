import React from 'react'
import { useNavigate } from "react-router-dom";



export default function SecondSlide() {
  const navigate = useNavigate()


console.log(typeof(window.location.href))
  const goToThirdSlide = () =>{
    let plainUrl = window.location.href.replace("SecondSlide", "")
    console.log(plainUrl)
    window.location.href=`${plainUrl}ThirdSlide`

  }
  return (
      <>
    <div className="everythingContainer" id="section2">
    <img src="https://i.imgur.com/rpdn1W8.jpg" className="logoImg"></img>
    <p className="invitationText">
    The theme for this picnic at the park is fairytale wonderland. 
    Dress in any cottage core femme clothes you have. 
    If you don’t have any no big deal! Wear some white or pastels  </p>

    <a href="#section3"className="whatUThink">what do u think?</a>
    </div>
    </>
  )
}
