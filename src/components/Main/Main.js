import React from 'react'
import img1 from "../../Images/logo.png"
import { MdRecordVoiceOver } from "react-icons/md";
import { FiRefreshCw } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import img2 from '../../Images/Rectangle 6.png'
import img3 from "../../Images/Rectangle 6 (1).png"
import img4 from '../../Images/Rectangle 6 (2).png'
import img5 from '../../Images/Rectangle 6 (3).png'
import img6 from "../../Images/Rectangle 10.png"
import img7 from '../../Images/Rectangle 10 (1).png'
import img8 from "../../Images/Rectangle 10 (2).png"
import { BiSolidCircle } from "react-icons/bi";
import "./Main.css"
function Main() {
    return (
        <div>
            <div className="card">
                <div className="card_in">
                    <img src={img1} alt="" className='card_img' />
                    <h1>How and where to learn English so that it's easy and simple?</h1>
                    <p>More than tens of thousands of students are already achieving stellar results. They start speaking English even at the beginner stages. If they could do it - you can too!</p>
                    <button className='card_btn'>"Sign up" or "Register"</button>
                </div>
            </div>
            <div className="learn">
                <h1>With us, you will learn:</h1>
                <div className="skills">
                    <div className="skill">
                        <MdRecordVoiceOver className='main_icon1' />
                        <p>To speak confidently, articulately, with every letter, with minimal or no accent</p>
                    </div>
                    <div className="skill">
                        <div className="skill">
                            <h1 className='main_icon1' >30+</h1>
                            <p>New words are added to your vocabulary every day</p>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill">
                            <h1 className='main_icon1' >30+</h1>
                            <p>New words are added to your vocabulary daily</p>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill">
                            <FiRefreshCw className='main_icon1' />
                            <p>How to incorporate the habit of repeating words every hour</p>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill">
                            <h1 className='main_icon1' >30+</h1>
                            <p>You add new words to your vocabulary every day.</p>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill">
                            <h1 className='main_icon1' >30+</h1>
                            <p>You add new words to your vocabulary every day.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="teachers">
                <h1 className='techer_h1'>Our teachers</h1>
                <div className="teacher">
                    <div className="teach">
                        <img src={img2} alt="" />
                        <h2>Irina Koraseva</h2>
                        <p>Russian language</p>
                    </div>
                    <div className="teach">
                        <img src={img3} alt="" />
                        <h2>Dmitry Bezrukov</h2>
                        <p>English language</p>
                    </div>
                    <div className="teach">
                        <img src={img4} alt="" />
                        <h2>Aziza Akhadova</h2>
                        <p>Russian language</p>
                    </div>
                    <div className="teach">
                        <img src={img5} alt="" />
                        <h2>Luda Vasilyevna</h2>
                        <p>Russian language</p>
                    </div>
                </div>
            </div>
            <div className="Reviews">
                <h1>Reviews</h1>
                <div className="reviews1">
                    <div className="person">
                        <div className="person_div">
                            <img src={img6} alt="" />
                            <div className="letters">
                                <h2>Alexey Pivovarov</h2>
                                <p>Definitely the best in my city. It's rare to find something like this</p>
                                <div className="stars">
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                </div>
                            </div>
                        </div>
                        <button className='person_btn'>Read in full</button>
                    </div>
                    <div className="person">
                        <div className="person_div">
                            <img src={img7} alt="" />
                            <div className="letters">
                                <h2>Anastasia Stepanovna</h2>
                                <p>Learned to speak English literally in just 4 lessons</p>
                                <div className="stars">
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                </div>
                            </div>
                        </div>
                        <button className='person_btn'>Read in full</button>
                    </div>
                    <div className="person">
                        <div className="person_div">
                            <img src={img8} alt="" />
                            <div className="letters">
                                <h2>Yevgeny Bogdanov</h2>
                                <p>I haven't found any centers yet that are close in quality to this one</p>
                                <div className="stars">
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                </div>
                            </div>
                        </div>
                        <button className='person_btn'>Read in full</button>
                    </div>
                </div>
            </div>
            <div className="contact">
                <div className="letter">
                    <form action="">
                        <div className="name">
                            <label htmlFor="">Your name</label>
                            <input type="text" placeholder='Ism Isimov' />
                        </div>
                        <div className="phone">
                            <label htmlFor="">Phone number</label>
                            <label htmlFor="" className='number_inp'>
                                <p>+998</p>
                                <input type="number" name="" id="" />
                            </label>
                        </div>
                        <div className="contact_btn">SEND</div>
                    </form>
                    <div className="text_letter">
                        <p>Monday ≻ Saturdays</p>
                        <p>08:00 ≻ 18:00</p>
                    </div>
                </div>
                <div className="text_contact">
                    <div className="text_con1">
                        <h3>Can multiple people use the lesson recording?</h3>
                        <p>The recording is intended for one person's use only. Distribution is prohibited.</p>
                    </div>
                    <div className="text_con2">
                        <h3>Can I pay in installments?</h3>
                        <p>You can, but with mandatory approval from the administrator.</p>
                    </div>
                    <div className="text_con3">
                        <h3>What level of IELTS is required for work?</h3>
                        <p>You need at least IELTS 6+ to comfortably communicate with others.</p>
                    </div>
                    <div className="text_con4">
                        <h3>What if I didn't pass the exam?</h3>
                        <p>Your teacher will give you the date of the retake. If you fail this exam again, the training stops until the next payment.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
