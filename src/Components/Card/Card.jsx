import React from 'react'
import './Card.css';
function Card({emoji,heading,detail, percentage}) {
  return (
    <div className='card'>
        <img src={emoji} alt=""/>
        <span> {heading} </span>
        <span> {detail} </span>
        <span> {percentage} </span>
    </div>
  )
}

export default Card