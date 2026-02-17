import React, {useState, useEffect } from 'react';
import './Contact.css';

function Contact({type}) {
    return ( 
        <ul className={'social-links--' + type}>
          <li><a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' target='_blank' className = 'fa fa-linkedin'/></li>
          <li><a href='https://github.com/dellaetta' target='_blank' className = 'fa fa-github'/></li>
          <li><a href='https://www.instagram.com/chloeblue107/' target='_blank' className = 'fa fa-instagram'/></li>
        </ul>
    );
}
export default Contact;