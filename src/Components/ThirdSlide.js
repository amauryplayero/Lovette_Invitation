import React from 'react'
import {useState, useRef} from 'react'

import emailjs from '@emailjs/browser';
// import { SMTPClient } from 'emailjs';
import keys from './emailkey'
// import SERVICE_ID from './emailkey'


// const client = new SMTPClient({
// 	user: 'amaury',
// 	password: 'Musica989898',
// 	host: 'smtp.amaury.lopezdiaz@gmail.com',
// 	ssl: true,
// });

export default function ThirdSlide() {
  console.log(keys.TEMPLATE_ID)

  const [decision, setDecision] = useState()
  emailjs.init("xp8-EUgAIHSEng7hi");
  const form = useRef();

  let apiKey = "xp8-EUgAIHSEng7hi"

  let name
  let email
  

  const handleYes = (e) => {
    setDecision('yes')
    e.preventDefault(); // Prevents default refresh by the browser
console.log(e)
    console.log('hai')
 


  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(e.target[0].value)
    const name = e.target[0].value
      emailjs.sendForm(keys.SERVICE_ID, keys.TEMPLATE_ID, form.current, apiKey)
    .then((result) => {
      console.log(result)
    // alert("Message Sent, We will get back to you shortly", result.text);
    },
    (error) => {
    alert("An error occurred, Please try again", error.text);
  });
  }
  const handleNo = () => {
    alert('thanks!')


  }

  if(decision==='yes'){
  name = 
  <form ref={form} onSubmit={(e)=>handleSubmit(e)}id="nameContainer">
  <input placeholder="name" name="person" id="nameInputBox"></input>
  <input type='submit' id="submitBtn"></input>
  </form>
 
  

  
  }else{

  }

  return (
    <>
    <div className="everythingContainer">
    <img src="https://i.imgur.com/rpdn1W8.jpg" className="logoImg"></img>
   

    <p className="invitationText">will i see u?</p>
    <div id="yesNoContainer">
      <button id="yes" onClick={(e)=>handleYes(e)}>yes</button>
      <button id="no" onClick={()=>handleNo()}>no</button>
    </div>
    {name}
    </div>
    </>
  )
}
