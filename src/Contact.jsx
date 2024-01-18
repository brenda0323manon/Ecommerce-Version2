import React from 'react';
import validator from 'validator';
import Oil from './Components/Assets/oil.jpeg';
import './pages/Contact.css';



export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('email_contact').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value
    const isValidEmail = validator.isEmail(email);
  
    if (isValidEmail || name.trim() === "" || message.trim() === "") {
    
      alert("All fields are required.");
    } 
    validateEmail(email);
    validateName(name);
  };

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailRegex.test(email)
  }

  ///Function to validate name
  function validateName(){
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementById('name').value;
    if(!regName.test(name)){
        alert('Please enter your full name (first & last name).');
        document.getElementById('name').focus();
     } 
}


  return (
    <div>
      <main>
        <aside className="contact-us error" id="form">
          <div className="contact">
            <h2 className="contact-heading">Contact Us</h2>
            <p>
              Got a question? We'd love to hear from you. Send us a message, and
              we'll respond as soon as possible.
            </p>
          </div>
          <div className="form">
            <form id="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
              className="name input"
              id="name"
              type="text"
              placeholder="Enter Name"
              />
              <label htmlFor="email">Email Address:</label>
              <input
                className="email input"
                id="email_contact"
                type="email"
                placeholder="example@gmail.com"
              />
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write Message"
                defaultValue={""}
              />
              <button className="send" type="submit" id="send">
              Send Message
              </button>
            </form>
          </div>
        </aside>
        <div>
          <img className="oil" src={Oil} alt="Oil bottles"/>
        </div>
      </main>
    </div>
  )
}    






