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
    <p className="invitationText"><a href="https://docs.google.com/document/d/1ul_bNbM_iGVDNwm1dXy1_T2HUDDw7J07zEvp9NCkVTc/edit?usp=sharing" className="link" targe="_blank">sultry virgin ss22</a> OR <a href="https://www.shushutongstudio.com/collection/20ss/" className="link" targe="_blank">shushu/tong ss20</a><br></br>
      to best prep for this party, pick an outfit 
      from either collection and imitate it! </p>

    <a href="#section3"className="whatUThink">what do u think?</a>
    </div>
    </>
  )
}
