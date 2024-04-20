import React from 'react'
import "./Footer.css"
import img1 from '../../Images/logo.png'
import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiYoutube } from "react-icons/si";

function Footer() {
    return (
        <div className='footer'>
            <div className="footer_main">
                <div className="logo_footer">
                    <img src={img1} alt="" />
                    <p>All rights reserved. NEW OXFORD 2024.</p>
                    <div className="icons_footer">
                        <BsTelegram />
                        <BsInstagram />
                        <SiYoutube />
                    </div>
                </div>
                <div className="nav_footer">
                    <p>About us</p>
                    <p>Courses</p>
                    <p>Career</p>
                    <p>Branches</p>
                </div>
                <div className="nav_footer">
                    <p>FAQ</p>
                    <p>Blog</p>
                    <p>User Agreement</p>
                    <p>Cookie Settings</p>
                </div>
                <div className="nav_footer1">
                    <p>English language</p>
                    <p>Russian language</p>
                    <p>DTM</p>
                </div>

            </div>
        </div>
    )
}

export default Footer
