import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import girl from '../../img/girl.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import { Link } from "react-scroll";
import Resume from './resume.pdf';
function Intro() {

    const transition = { duration: 2, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}> Hey ! I am  </span>
                    <span> Yashika </span>
                    <span style={{ fontSize: '100%' }}> Passionate job seeker with strong organizational skills . Ready to help team achieve company goals. To
                        seek and maintain full-time position that offers professional challenges utilizing interpersonal skills,
                        excellent time management and problem-solving skills.</span>
                </div>
                {/* <button className="button i-button">
                    Hire me !
                </button> */}

                <a href={Resume} target='_blank'>
                    <button className="button s-button"> RESUME </button>
                </a>
                <Link to="contact" spy={true} smooth={true}>
                    <button className="button n-button">Contact me</button>
                </Link>
                <div className="i-icons">
                    <a href='https://github.com/yashikagulati07' target="_blank">
                        <img src={Github} alt=" " ></img>
                    </a>
                    <a href='https://www.linkedin.com/in/yashika-gulati-8a29631ba/' target="_blank">
                        <img src={LinkedIn} alt=" "></img>
                    </a>
                    <a href='https://www.instagram.com/yxshikaa/' target="_blank">
                        <img src={Instagram} alt=" "></img>
                    </a>


                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt=" "></img>
                <img src={Vector2} alt=" "></img>
                <img src={girl} alt=" "></img>
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}
                    src={glassesimoji} alt='' >
                </motion.img>
                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                    style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv image={Crown} txt1='Passionate' txt2='Hardworking' />
                </motion.div>
                <motion.div
                    initial={{ left: '9rem', top: '18rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transition}
                    style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv image={thumbup} txt1='Organized and ' txt2='Punctual' />
                </motion.div>
                {/* blur div */}
                <div className='blur' style={{ background: "rgb(238 210 255" }}></div>
                <div className='blur' style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
            </div>
        </div>
    )
}

export default Intro