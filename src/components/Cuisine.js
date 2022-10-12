import React from 'react'

export default function Cuisine(props) {
  return (
    <div>
        <h3>{props.title}</h3>
        <img src={props.image} alt="cuisine"/>
    </div>
  )
}
