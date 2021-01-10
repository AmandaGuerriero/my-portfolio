import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message:''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.'); 
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <section className="page-section contact">
            <h3>Contact Me</h3>
            <form id="contact-form" onSubmit={handleSubmit}>
             <div className="form-group">
                    <label htmlFor="inputEmail">Name:</label>
                    <input type="text" className="form-control" defaultValue={name} onBlur={handleChange} name="name" />
            </div><br />
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" defaultValue={email} name="email" onBlur={handleChange} />
            </div><br /> 
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea name="message" className="form-control" defaultValue={message} onBlur={handleChange} rows="3" />
            </div><br/>
                
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <div clasName="button-div">
                    <button type="submit" className="btn contact-button">Submit</button>
                </div>
            </form>
        </section>
    );
};

export default Contact;