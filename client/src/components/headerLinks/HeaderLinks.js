import React from 'react'
import './HeaderLinks.css'
import {Link} from 'react-router-dom'

const headerLinks = () => {
    return (
        <header className='headerlinks'>
            <p className='alignleft anna'>anna bostick</p>
            <p className='alignright'>
                <div className="menu">
                    <ul>
                        <Link className='link' to="/">home</Link>
                        <Link className='link' to="/about">about</Link>
                        <Link className='link' to="/contact">contact</Link>
                        <a className='link' href="https://instagram.com/aebostick" target="_blank">
                            insta
                        </a>
                    </ul>
                </div>
               
            </p>
        </header>
    )
}

export default headerLinks