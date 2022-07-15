import React from 'react'
import {useState, useRef} from 'react'

import emailjs from '@emailjs/browser';

import keys from './emailkey'

export default function ThirdSlide() {
  // console.log(keys.TEMPLATE_ID)

  const [decision, setDecision] = useState()

  emailjs.init("xp8-EUgAIHSEng7hi");
  const form = useRef();
  
  let apiKey = "xp8-EUgAIHSEng7hi"
  
  let name
  let email
  let noDecision
  

  const handleYes = (e) => {
    setDecision('yes')
    e.preventDefault(); // Prevents default refresh by the browser
    console.log(e)
    console.log('hai')
 


  }
  const handleNameSubmit = (e) =>{
    e.preventDefault()
    console.log(e.target[0].value)
    let nameInput = e.target[0].value
      emailjs.sendForm(keys.SERVICE_ID, keys.TEMPLATE_ID, form.current, apiKey)
    .then((result) => {
    
    name = <p>thanks!</p>
    alert("thanks! see u there")
    //
    },
    (error) => {
    alert("An error occurred, Please try again", error.text);
  });
  }
  const handleNo = (e) => {
    setDecision("no")
    // e.preventDefault()
    alert('thanks!')


  }

  if(decision==='yes'){
  name = 
  <form ref={form} onSubmit={(e)=>handleNameSubmit(e)}id="nameContainer">
    <input placeholder="name" name="person" id="nameInputBox"></input>
    <input type='submit' id="submitBtn"></input> 
  </form>
 
  

  
  }else if(decision==="no"){

    

  }else {}

  return (
    <>
    <div className="everythingContainer" id="section3">
    <img src="https://i.imgur.com/rpdn1W8.jpg" className="logoImg"></img>
   

    <p className="invitationText">will i see u?</p>
    <div id="yesNoContainer">
      <button id="yes" onClick={(e)=>handleYes(e)}>yes</button>
      <button id="no" onClick={(e)=>handleNo(e)}>no</button>
    </div>
    {name}
    </div>
    <div>
      {noDecision}
    </div>
    </>
  )
}
