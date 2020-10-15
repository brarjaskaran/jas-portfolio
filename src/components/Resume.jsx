import React from 'react'
import { Cell, Grid } from 'react-mdl';
import Header from './Header';
import "./Resume.css"
import Experience from './utils/Experience';
import Skills from './utils/Skills';
import Education from './utils/Education';
import potraitImg from './images/potrait.jpg' 
function Resume() {
    return (
        <div className="resume">
            
            <div className="resume__details">
                <div className="resume__photo">
                    <img src={potraitImg} alt="jas"/>
                </div>
                    <h2 >Jaskaran Brar</h2>
                    <h4 >Frontend Web Developer</h4>
                    <hr/>
                    <p>
                    A motivated and enthusiastic graduate with a master’s in Software
                    Engineering seeking a position to utilize my skills, particularly
                    in the area of web development. Skilled in using various software
                    programs such as <strong> MongoDB, Express, React.js and Node.js</strong>   Looking for a suitable
                    position where I can use my strong communication skills and build
                    professional relationships.
                    </p>
                    <hr/>
                    <h5>Address</h5>
                    <p>Port Adelaide, SA</p>
                    <h5>Phone</h5>
                    <p>+61 420 626 001</p>
                    <h5>Email</h5>
                    <p>brarjaskaran@icloud.com</p>

                    <hr/>
                
            </div>

            <div className="resume__qualities">
                <div className="resume__education">
                    <h2>Education</h2>

                    <Education
                        startYear={2012}
                        endYear={2016}
                        schoolName={"GNDEC, Ludhiana, India"}
                        schoolDescription={"Batchelor of Information Technology"}
                        />
                    <Education
                        startYear={2018}
                        endYear={2020}
                        schoolName={"Federation University, Adelaide"}
                        schoolDescription={"Masters of Software Engineering"}
                        />
                </div>
       

                    <hr/>

                <div className="resume__experience">


                    <h2>Experience</h2>
                    <Experience
                    startYear={2019}
                    endYear={2020}
                    jobName={"Freelance Web Designer + Developer + Content Creator"}
                    jobDescription={
                        "-Designing and developing personal, interactive websites using HTML, CSS and Javascript.-Developing E-commerce and personal websites using Shopify and WordPress.-Designing and making Logos, promotional Flyers & Pamphlets using Affinity Designer and Affinity Photo.-Producing promotional videos using Final Cut Pro."
                    }
                    />
                    <Experience
                    startYear={2016}
                    endYear={2016}
                    jobName={"Infotech Zone, Ludhiana"}
                    jobDescription={
                        "-My role at infotech was to design and implement static websites using Javascript, HTML, CSS and Bootstrap. A part of my role as Digital Marketer, which included to Develop and monitor campaign budgets. Plan and manage social media platforms. Prepare accurate reports on our marketing campaign’s overall performance."
                    }
                    />
                </div>
                <div className="resume__skills">
                    <h2>Skills</h2>
                    <Skills/>
                </div>
            </div>

        </div>
    )
}

export default Resume
