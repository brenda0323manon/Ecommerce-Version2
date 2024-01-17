import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className="Footer">
        <div className="subscribe">
            <h3 className="sub_head">Subscribe</h3>
            <p className="update">Join our mailing list for more updates</p>
            <input classname="email" id="email" type="email" placeholder="Email Address"/>
            <button className="signUp" type="submit" id="send">Sign up</button>
        </div>
        <div className="footer">
            <div className="Location">
                <p>Location</p>
                <p>123 Demo Street New York, NY 12345</p>
            </div>
            <div className="hours">
                <p>Hours</p>
                <p>Monday-Friday</p>
                <p>6:30am-11pm</p>
            </div>
            <div className="info">
                <p>Contact</p>
                <p>email@example.com</p>
                <p>(555)-123-4567</p>
            </div>
        </div>
    </div>    
  )
}
