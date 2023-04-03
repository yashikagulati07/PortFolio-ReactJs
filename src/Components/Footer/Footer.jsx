import React from 'react'
import './Footer.css';
import Wave from '../../img/wave.png';
// import Insta from '@iconscout/react-unicons/icons/uil-instagram';
// import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
// import Github from '@iconscout/react-unicons/icons/uil-github';

import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: '100%' }} />
      <div className="f-content">
        <span> yashika0797.be20@chitkara.edu.in </span>
        <div className="f-icons">
          <a href='https://github.com/yashikagulati07'>
            <img src={Github} alt=" "></img>
          </a>
          <a href='https://www.linkedin.com/in/yashika-gulati-8a29631ba/'>
            <img src={LinkedIn} alt=" "></img>
          </a>
          <a href='https://www.instagram.com/yxshikaa/'>
            <img src={Instagram} alt=" "></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer