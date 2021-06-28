import React from 'react'
import './HeaderLinks.css'
import Button from '../UI/button'
import insta from '../../assets/works.png'
import {Link} from 'react-router-dom'

const headerLinks = () => {
    return (
        <header className='headerlinks'>
            <p className='alignleft anna'>anna bostick</p>
            <p className='alignright'>
                <div className="menu">
                    <ul>
                        <a> <Link className='link' to="/">Home</Link> </a>
                        <a> <Link className='link' to="/about">About</Link> </a>
                        <a> <Link className='link' to="/contact">Contact</Link> </a>
                        <a href="https://instagram.com/aebostick" target="_blank">
                            <img className='instabutton' 
                            src={insta}></img>
                        </a>
                    </ul>
                </div>
               
            </p>
        </header>
    )
}

export default headerLinks