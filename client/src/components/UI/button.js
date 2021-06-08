import React from 'react'
import './button.css'

const button = (props) => {
    return ( 
        <button className='button' onClick={props.clicked}>
            {props.name}
        </button>
    )
}

export default button