import React from 'react'
import { useNavigate } from "react-router-dom";



export default function SecondSlide() {
  const navigate = useNavigate()



  const goToThirdSlide = () =>{

    window.location.href="https://62acf8abc297460009e79cf3--peppy-bombolone-bc61b0.netlify.app/ThirdSlide"

  }
  return (
      <>
    <div className="everythingContainer">
    <img src="https://i.imgur.com/rpdn1W8.jpg" className="logoImg"></img>
    <p className="invitationText"><a href="https://docs.google.com/document/d/1ul_bNbM_iGVDNwm1dXy1_T2HUDDw7J07zEvp9NCkVTc/edit?usp=sharing" className="link">sultry virgin ss22</a> OR <a href="https://www.shushutongstudio.com/collection/20ss/" className="link">shushu/tong ss20</a><br></br>
      to best prep for this party, pick an outfit 
      from either collection and imitate it! </p>

    <button className="whatUThink" onClick={()=>goToThirdSlide()}>what do u think?</button>
    </div>
    </>
  )
}
