import React from 'react'
import "./Footer.css"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube"; 

function Footer() {
    return (
    <div className="footer_outer_container">
        <div className="footer_icons">
        <FacebookIcon />
        <InstagramIcon />
        <YouTubeIcon />
        </div>
        <div className="footer_data">
        <div>
            <ul>
            <li>Audio Description</li>
            <li>investor Relations</li>
            <li>Privacy</li>
            <li>Contact Us</li>
            </ul>
        </div>
        <div>
            <ul>
            <li>Help center</li>
            <li>Jobs</li>
            <li>Legal Notices</li>
            <li>Do Not Sell or Share My Personal Infornmation</li>
            </ul>
        </div>
        <div>
            <ul>
            <li>Gift Cards</li>
            <li>Netflix Shop</li>
            <li>Cookie Preferrence</li>
            <li>Ad Choices</li>
            </ul>
        </div>
        <div>
            <ul>
            <li>Media Center</li>
            <li>Terms of Use</li>
            <li>Coporate information</li>
            </ul>
        </div>
        <div>
            <ul>
            <li>Audio Description</li>
            <li>investor Relations</li>
            <li>Privacy</li>
            <li>Contact Us</li>
            </ul>
        </div>
        </div>
        <div className="service_code">
        <p>Service Code</p>
        </div>
        <div className="copy-write">&copy; 1997-2024 Netflix, inc.</div>
    </div>
    );
}

export default Footer