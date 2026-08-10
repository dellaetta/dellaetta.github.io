import React from 'react';
import './App.css';
import './Privacy.css';
import Contact from './assets/Contact';
import { Link } from 'react-router-dom';

function Privacy() {
   return( 
    <div className = 'privacy-container'>
        <div className = 'text'>
            <h1>Privacy Policy</h1>
            <h2>Your privacy</h2>
            <p>Included below is my policy on how I handle any information I receive from you. 
                You are not required to provide me with information in order to use this website. 
                If you do not want me accessing and/or using your personal information as described 
                herein, please do not provide me with any.
            </p>

            <h2>Changes in my policy</h2>
            <p>I reserve the right to change this Privacy Policy at my discretion. If I decide to 
                change the Privacy Policy I will post those changes here. I encourage you to visit 
                this area frequently to stay informed. If you continue to visit this website and use 
                the services made available to you after such changes have been made, you hereby 
                provide your consent to the changes.
            </p>
            
            <h2>Copyright</h2>
            <p>© Chloe Velez 2026. All rights reserved. </p>
            <p>
                All content on this website, including text, graphics, images, and design, is the 
                property of [Your Name] unless otherwise stated and is protected by United States 
                copyright laws. No content may be reproduced, distributed, modified, or used without 
                prior written permission.
            </p>
            
            <h2>Digital Millennium Copyright Act (“DMCA”) Notice</h2>
            <p>I own, protect and enforce copyright in her own creative materials and respect the 
                copyright properties of others. My site contains material of third parties and links to 
                third party sites, portals and directories. As a result, materials of third parties, 
                not owned or controlled by me, are included in or linked to my site. To the best of my 
                knowledge, these materials do not infringe the copyrights of others. Upon receipt of 
                notice of claimed infringement, I will respond expeditiously to follow the procedures 
                specified in the DMCA to resolve the claim between the notifying party and the alleged 
                infringer who provided the materials in issue, including, where applicable, removing or 
                disabling access to materials claimed to be infringing or by removing or disabling access 
                to links to such material. It is the policy of Chloe Velez to terminate its relationships 
                with third parties who infringe the copyrights of others where such parties are known to 
                me to be repeat infringers. Please address such notice to:
            </p>
            <p>cqx56791@gmail.com</p>

            <h2>Restrictions on Use</h2>
            <p>You agree not to use this website in any way that could damage, disable, overburden, or impair 
                the site or interfere with any other party’s use of the site. You may not attempt to gain 
                unauthorized access to any portion of the site, its servers, or systems.
                
                You may not use this website to send unsolicited messages (spam) or for any unlawful purpose.

                All content on this website, including text, images, and design, is the property of Chloe Velez 
                unless otherwise stated. You may not reproduce, distribute, or create derivative works from any 
                content without prior written permission.

                Links to third-party websites are provided for convenience only. I do not endorse or assume 
                responsibility for the content, products, or services of any linked sites.
            </p>

            <h2>Information Collection</h2>
            <p>I collect and save personally identifiable information (such as your name and email address 
                (collectively, “Personal Information”)) that you provide through the contact form on this 
                website. I use your Personal Information only to communicate with people interested in me. I may 
                share your Personal Information with third-party service providers that help operate this website, 
                including Formspree (which processes contact form submissions) and GitHub (which hosts this website). 
                These providers process information only as necessary to provide their services. If you would like to 
                request deletion of your personal information, please email me at cqx56791@gmail.com with the subject line: Opt-out. 
                Or contact me through the other forms of contact listed on my website, WEBSITE.
            </p>

            <h2>Google Fonts</h2>
            <p>This website uses Google Fonts to enhance visual presentation. Google Fonts is provided by Google 
                and may collect technical information such as your IP address when the fonts are loaded. For more 
                information about how Google handles data, please review Google’s Privacy Policy.
            </p>

            <h2>Cookies</h2>
            <p>Cookies are small data files stored on your device when you visit a website. I do not use cookies directly to 
                collect personal information or track users. However, third-party service providers that support this website, 
                including Formspree (contact form processing), GitHub (website hosting), and Google (Google Fonts), may use 
                cookies or similar technologies as part of their services. I do not control these cookies. You can manage or 
                disable cookies through your browser settings. Please note that disabling cookies may affect the functionality 
                of certain websites.
            </p>
            
            <h2>Security</h2>
            <p>I take reasonable measures to protect the Personal Information you submit through this website. Contact form 
                submissions are processed by Formspree and transmitted using industry-standard security measures. However, no 
                method of transmission over the Internet or electronic storage is completely secure. While I strive to protect 
                your Personal Information, I cannot guarantee its absolute security. By using this website, you acknowledge 
                and accept this risk.
            </p>

            <h2>Use</h2>
            <p>I use email addresses that people enter through the contact form to contact users about their inquiries submitted 
                through the contact form. 
            </p>

            <h2>Opt-Out of Mailing Address</h2>
            <p>If you do not want to receive email and/or mailings from us in the future, please let me know by sending an email 
                to me at the contact address below in the paragraph “How to Contact Us”, requesting to be removed from our 
                email/mailing list. Please note that there might be a brief delay between when you submit your request to opt-out 
                and when it is processed and reflected in my systems; accordingly you might continue to receive communications from 
                me for a limited time after you unsubscribe.
            </p>

            <h2>Links to Other Websites</h2>
            <p>This website may contain links to other websites. Please be aware that I am not responsible for the privacy practices 
                of other websites. I encourage you to be aware when you access any such third party links and to read the privacy 
                policies of each website that you access. This Privacy Policy only applies to information collected by me.
            </p>

            <h2>Protection for Children</h2>
            <p>I have no intention of collecting personally identifiable information from children under the age of 13 without parental 
                consent. If a child under the age of 13 has provided me with personally identifiable information, that child’s parent 
                or legal guardian should contact us (see below) if they would like the information submitted by the child deleted from 
                the website. I will delete such personally identifiable information from our database as soon as possible following our 
                receipt of any such notice. If you are age 13 or younger, you are not authorized to submit any content or information 
                to this website without the explicit consent of your parent or legal guardian.
            </p>

            <h2>Your Consent to this Privacy Policy</h2>
            <p>By using this site, you signify your assent to the Chloe Velez Privacy Policy. If you do not agree with any term in this 
                Privacy Policy, please do not use this site or submit any Personal Information.
            </p>

            <h2>How to Contact Us</h2>
            <p>Should you have any questions or concerns about this Privacy Policy or the collection and of information, please contact us:</p>
            <p>cqx56791@gmail.com</p>
            
            <h2>International Users and Data Transfers</h2>
            <p>I am located in the State of New York in the United States. If you access this website from outside the United States or 
                submit information through the contact form, please be aware that your information may be transferred to, stored, and processed 
                in the United States. This website is hosted by GitHub and uses Formspree to process contact form submissions. In addition, this 
                website uses Google Fonts provided by Google. These service providers may operate servers in the United States and in other countries.
                By using this website or submitting your information, you acknowledge and consent to the transfer and processing of your information
                in the United States and potentially other jurisdictions where these service providers operate. All matters relating to the use of 
                this website are governed by the laws of the State of New York, without regard to its conflict of law principles. 
            </p>
        </div>

        <div className = 'footer-container'>
            <p>Copyright © Chloe Velez 2026</p>
            <Contact type = 'footer'/>
            <Link to="/privacy" className="privacy" onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Link>
        </div>
    </div>
);
}
export default Privacy;