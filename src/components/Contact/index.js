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
        <section class="page-section" id="contact">
            <h2>Contact Me</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
             <div class="form-row">
                    <div class="form-group col-md-6">
                        <label htmlFor="name">Name:</label>
                        <input type="text" class="form-control" defaultValue={name} onBlur={handleChange} name="name" />
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="email">Email:</label>
                        <input type="email" class="form-control" defaultValue={email} name="email" onBlur={handleChange} />
                    </div>
            </div>
                <div>
                    <div class="form-row">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="3" />
                    </div>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" class="btn contact-button">Submit</button>
            </form>
        </section>
    );
};

export default Contact;