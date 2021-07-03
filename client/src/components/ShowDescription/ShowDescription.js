import React from 'react'
import '../ScrollingDiv/ScrollingDiv.css'

const ShowDescription = (props) => {
    return (
        <div className={props.p_styling}>
            <span className={props.styling} >{props.description}</span>
            {console.log(props.pressed)} 
        </div>
    )
}

export default ShowDescription