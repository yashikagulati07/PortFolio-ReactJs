import React from 'react'
import './Experience.css';
import { useContext } from 'react';
import {themeContext} from '../../Context';
function Experience() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='experience'>
            <div className="achievement">
                <div className="circle"> 8+ </div>
                <span>years</span>
                <span>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle"> 20+ </div>
                <span>completed</span>
                <span>projects</span>
            </div>
            <div className="achievement">
                <div className="circle"> 5+ </div>
                <span>companies</span>
                <span>Experience</span>
            </div>
        </div>
    )
}

export default Experience