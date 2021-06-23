import React from 'react'
import './HeaderLinks.css'
import Button from '../UI/button'
import insta from '../../assets/works.png'

const headerLinks = () => {
    return (
        <header className='headerlinks'>
            <p className='alignleft anna'>anna bostick</p>
            <p className='alignright'>
                <a href="/" target="_blank">
                    <Button name='home'/>
                </a>
                <a href="/" target="_blank">
                    <Button name='about'/>
                </a>
                <a href="/" target="_blank">
                    <Button name='contact'/>
                </a>
                <a href="https://instagram.com/aebostick" target="_blank">
                    <img className='instabutton' 
                        src={insta}></img>
                </a>
            </p>
        </header>
    )
}

export default headerLinks