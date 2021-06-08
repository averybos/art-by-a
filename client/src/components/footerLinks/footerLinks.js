import React from 'react'
import Button from '../UI/button'
import './FooterLinks.css'
import '../UI/button.css'

const footerLinks = () => {
    return (
        <footer className='footerlinks'>
            <a href="https://instagram.com/aebostick" target="_blank">
                <button className='instabutton'></button>
            </a>
        </footer>
    )
}

export default footerLinks