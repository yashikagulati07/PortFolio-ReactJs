import React from 'react'
import './Services.css';
import Chitkara from '../../img/chitkara.png';
import aps from '../../img/aps.png';
import Card from '../Card/Card';
// import Resume from './resume.pdf';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { color, motion } from 'framer-motion';
function Services() {
    const transition = { duration: 1, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div>
            <div className="services">
                {/* left side  */}
                <div className="awesome">
                    <span style={{ color: darkMode ? 'white' : '' }}> My </span>
                    <span> Education </span>
                    <span style={{fontSize:'90%'}}> . Currently pursuing a <b>BTECH in Computer Science</b> from <b>Chitkara University</b>, <br/>
                        a renowned institution known for its excellence in technical education
                        <br/>
                        <br />
                        . I completed my 12th and 10th grade education from Army Public School, Ambala Cantt.
                        <br />
                        <br />
                    </span>
                    {/* <a href={Resume} >
                        <button className="button s-button">Download CV</button>
                    </a> */}
                    <div className="blur s-blur1" style={{ background: "#ABF1FF94" }} />

                </div>
                {/* right side  */}
                <div className="cards">
                    <motion.div
                        whileInView={{ left: '14rem' }}
                        initial={{ left: '25%' }}
                        transition={transition}
                        style={{ left: '14rem' }}>
                        <Card
                            emoji={Chitkara}
                            heading={'BE CSE '}
                            detail={'CHITKARA UNIVERSITY'}
                            percentage={'CGPA - 9.89'}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ left: "-11rem", top: "12rem" }}
                        whileInView={{ left: "-4rem" }}
                        transition={transition}
                        style={{ top: '12rem', left: '-4rem' }}>
                        <Card
                            emoji={aps}
                            heading={'CLASS 12TH'}
                            detail={'ARMY PUBLIC SCHOOL'}
                            percentage={'Percentage - 96.4%'}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ top: "19rem", left: "25rem" }}
                        whileInView={{ left: "12rem" }}
                        transition={transition}
                        style={{ top: '19rem', left: '12rem' }}>
                        <Card
                            emoji={aps}
                            heading={'CLASS 10TH'}
                            detail={"ARMY PUBLIC SCHOOL"}
                            percentage={'Percentage - 94.5%'}
                        />

                    </motion.div>
                    <div
                        className="blur s-blur2"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default Services