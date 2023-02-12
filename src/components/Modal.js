import React from 'react';
import image from "../images/vday.jpg"

export default function Modal() {

  return(
    <div className="modal">
      <div className='modal-main'>
        <h1 style={{fontFamily: 'Apple Chancery'}}>💘 Happy Valentine's Day! 💘</h1>
        <img style={{width: "40%", height: "40%"}} src={image} alt="Heart"></img>
        <div className='firework'></div>
      </div>
      
    </div>
  )
}
