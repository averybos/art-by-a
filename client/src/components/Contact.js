import React from 'react';
import HeaderLinks from './headerLinks/HeaderLinks'
import './Contact.css'

const Contact = () => (
  <div>
    <HeaderLinks/>
    <div className='contact-header'>Let's talk.</div>
    <form className='contact-form'>
      <label className= 'contact-label'>Name</label>
      <input className='contact-input' type='text'></input>
    </form>
  </div>
);

export default Contact;