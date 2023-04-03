import React from 'react'
import './Works.css';
import html from "../../img/html.png";
import css from "../../img/css.png";
import reactjs from "../../img/react.png";
import nodejs from "../../img/node.png";
import Java from "../../img/javaR.png";
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from "framer-motion";
import { Link } from "react-scroll";
function Works() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='works'>
            {/* left side  */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}> COMPETENCIES </span>
                <span> i.e SKILLS </span>
                <span style={{ fontSize: '90%' }}>  . I am proficient in <b>HTML</b> and <b>CSS</b> for creating responsive web pages.
                    <br /> <br />
                    . Additionally, I am skilled in <b>React JS</b> and <b>Node JS </b>for developing dynamic web applications
                    <br /> <br />
                    . I also have hands on practice on <b>JAVA</b> and <b> DSA </b>

                </span>


                <Link to="contact" spy={true} smooth={true}>
                    <button className="button s-button">Hire me !</button>
                </Link>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }} />
            </div>
            {/* right side */}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={css} alt=""></img>
                    </div>
                    <div className="w-secCircle">
                        <img src={html} alt=""></img>
                    </div>
                    <div className="w-secCircle">
                        <img src={Java} alt=""></img>
                    </div>
                    <div className="w-secCircle">
                        <img src={reactjs} alt=""></img>
                    </div>
                    <div className="w-secCircle">
                        <img src={nodejs} alt=""></img>
                    </div>
                </motion.div>
                {/* Background Circles  */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works