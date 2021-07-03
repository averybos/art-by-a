import React from 'react'
import '../ScrollingDiv/ScrollingDiv.css'

const ShowDescription = (props) => {
    return (
        <p>
            <span className={props.pressed ? 'description-visible' : 'description-hidden'} >{props.description}</span>
            {console.log(props.pressed)} 
        </p>
    )
}

export default ShowDescription