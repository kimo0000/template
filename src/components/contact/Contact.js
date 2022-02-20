import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div  className="contact">
        <h1 className="contact-title"><span>Drop</span> Me A Line</h1>
        <form>
          <div className="form-group">
            <input type='text' placeholder='Your Name' />
            <input type='text' placeholder='Your Email' />
          </div>
          <input className="form-sub" type='text' placeholder='Your Subject' />
          <textarea className="form-text" placeholder="Your Message"></textarea>
          <button type='submit'>SHOOT MESSAGE</button>
        </form>
    </div>
  )
}

export default Contact;