import React, {useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css';

function ContactForm() {
    const [state, handleSubmit] = useForm("xgooryle");
    const [error, setError] = useState(false);
    
    useEffect(() => {
        if (state.submitting && !state.succeeded) {
            setError(true);
        }
    }, [state.submitting, state.succeeded]);

    if (state.succeeded) {
        return <p>Thank you for reaching out! I will get back to you as soon as possible!</p>;
    }

    return ( 
        <form onSubmit = {handleSubmit}>
            <div className = 'input-container'>
                <div className = 'input-id'>
                    <input id = 'name' type = 'text'  name = 'name' placeholder = 'Name' required/>
                    <ValidationError prefix = 'Name' field = 'name' errors = {state.errors}/>

                    <input id = 'email' type = 'email'  name = 'email' placeholder = 'Email' required/>
                    <ValidationError prefix = 'Email' field = 'email' errors = {state.errors}/>
                </div>

                <input id = 'subject' type = 'text'  name = 'subject' placeholder = 'Subject' required/>
                <ValidationError prefix = 'Subject' field = 'subject' errors = {state.errors}/>

                <textarea id = 'message' name = 'message' placeholder = 'Message' required/>
                <ValidationError prefix = 'Message' field = 'message' errors = {state.errors}/>

                <div className = 'checkbox-container'>
                    <input type="checkbox" className="checkbox" required/> 
                    <p>I have read and accept the privacy policy</p>
                </div>
            </div>

            <button type = 'submit' disabled = {state.submitting}>
                {state.submitting ? "Sending..." : "Send Message"}
            </button>
            
            <p>{error&&!state.submitting ? "Error sending message. Please try again or use a different method to contact me." : ''}</p>

        </form>
    );
}
export default ContactForm;