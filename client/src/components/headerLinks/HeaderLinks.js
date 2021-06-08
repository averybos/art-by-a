import React from 'react'
import './HeaderLinks.css'
import Button from '../UI/button'

const headerLinks = () => {
    return (
        <header className='headerlinks'>
            <p className='alignleft anna'>anna bostick</p>
            <p className='alignright'>
                <a href="/" target="_blank">
                    <Button name='about'/>
                </a>
                <a href="/" target="_blank">
                    <Button name='art'/>
                </a>
                <a href="/" target="_blank">
                    <Button name='contact'/>
                </a>
            </p>
        </header>
    )
}

export default headerLinks