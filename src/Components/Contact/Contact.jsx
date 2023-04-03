import React from 'react'
import './Contact.css';
import { useContext } from 'react';
import {themeContext} from '../../Context';
// import emailjs from '@emailjs/browser';
// import { useRef } from 'react';
function Contact() {
    // const form = useRef();
    // const sendEmail = (e) =>{
    //     e.preventDefault();

    //     emailjs.sendForm("service_ui6d47l", "template_lt7s6ga", form.current, "" )
    //     .then(
    //         (result) => {
    //           console.log(result.text);
    //           setDone(true);
    //           form.reset();
    //         },
    //         (error) => {
    //           console.log(error.text);
    //         }
    //       );
    // }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div>
            <div className="contact-form" id="contact">
                <div className="w-left">
                    <div className="awesome">
                        <span style ={{color: darkMode ? 'white' : ''}}> Get in touch </span>
                        <span> Contact me </span>
                        <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}></div>
                    </div>
                </div>
            </div>
            <div className="c-right">
                {/* <form ref = {form} onSubmit={sendEmail}> */}
                <form>
                    <input type="text" name="user_name" className='user' placeholder='Enter your name' />
                    <input type="email" name="user_email" className='user' placeholder='Enter your email' />
                    <textarea name="message" className='user' placeholder='Write a message' />
                    <input type="submit" value="Send" className="button" />
                    {/* <span>{done && "Thanks for Contacting me"}</span> */}
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    )
}

export default Contact