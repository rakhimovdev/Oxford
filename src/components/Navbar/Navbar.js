import React from 'react'
import "./Navbar.css"
import img1 from "../../Images/logo.png"
import { BsMoon } from "react-icons/bs";
import img2 from '../../Images/Flags.png'
import img3 from '../../Images/uz.jpg'
import { IoChevronDown } from "react-icons/io5";
function Navbar() {
    return (
        <div>
            <nav>
                <div className="nav">
                    <div className="logo">
                        <img src={img1} alt="" className='nav_img' />
                    </div>
                    <ul className='nav_ul'>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Courses</a>
                        </li>
                        <li>
                            <a href="#">Career</a>
                        </li>
                        <li>
                            <a href="#">Feedback</a>
                        </li>
                        <li>
                            <a href="#">Branches</a>
                        </li>
                        <div className="translate">
                            <div className="translate1">
                                <img src={img2} alt="" />
                                <p>RU</p>
                                <IoChevronDown className='icon1' />
                            </div>
                            <div className="translate2">
                                <div className="ru">
                                    <img src={img2} alt="" />
                                    <h1>RU</h1>
                                </div>
                                <div className="uz">
                                    <img src={img3} alt="" />
                                    <h1>UZ</h1>
                                </div>
                            </div>
                        </div>
                        <BsMoon className='icon2' />
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
