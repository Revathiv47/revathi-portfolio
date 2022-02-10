import React from 'react'
import Seperator from '../../Body/Seperator'
import './contact.css'
import Contact from '../../Body/contact/Contact'

export default function Contacts({data}) {
    return (
        <div className="contact">
           
            <label className="section-title">Contact</label>
            
                
                    <p>Want to get in touch? Contact me on any of the platform</p>
                    <Contact />
               
            </div>
            
        
    )
}
