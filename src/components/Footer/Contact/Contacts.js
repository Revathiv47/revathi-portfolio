import React from 'react'
import Seperator from '../../Body/Seperator'
import './contact.css'
import Contact from '../../Body/contact/Contact'

export default function Contacts({data}) {
    return (
        <div className="contact">
           
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to get in touch? Contact me on any of the platform</p>
                    <Contact />
                </div>
                <div className="download">
                                       
                    <a href="https://github.com/Revathiv47/resume/blob/main/Revathi_Resume..pdf" target="_blank">
                    <i class="fi-rr-cloud-download download-icon" />
                    Resume
                    </a>
                </div>
            </div>
            
        </div>
    )
}
