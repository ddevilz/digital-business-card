import React from "react"
import "./style.css"

export default function Main() {
    return (
        <div>
            <img src="../public/dev.jpeg" className="profile-img" />
            <div className='card-text'>
                <h1 className="name">Devashish Jadhav</h1>
                <h3 className="work">Frontend Developer</h3>
                <h4 className="website">dev.website</h4>
            </div>
            
            <div className='websites'>
                
            <a href="mailto:jadhavom24@gmail.com" className="email">
                <img src="../public/email-logo.png" />
                <p>Email</p>
            </a>
          
            <a href="https://www.linkedin.com/in/devashish-jadhav/" className="linkedin">
                <img src="../public/linkedin-logo.png" />
                <p>Linkedin</p>
            </a>
          </div>

        </div>
    )
}