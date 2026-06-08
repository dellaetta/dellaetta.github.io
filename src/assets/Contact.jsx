import React, {useState, useEffect } from 'react';
import './Contact.css';

function Contact({type}) {
    return ( 
        <ul className={'social-links--' + type}>
          <li><a href='https://www.linkedin.com/in/chloe-velez-10559b35a' target='_blank' className = 'fa fa-linkedin'/></li>
          <li><a href='https://github.com/dellaetta' target='_blank' className = 'fa fa-github'/></li>
          <li><a href='https://www.instagram.com/chloeblue107/' target='_blank' className = 'fa fa-instagram'/></li>
        </ul>
    );
}
export default Contact;