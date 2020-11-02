import React from 'react'
import { Container, Grid } from '@material-ui/core';
import "./LandingPage.scss"
import { Cell } from 'react-mdl';
import stylishPhoto from './images/stylish.JPG';
import { Link } from 'react-router-dom';
import Header from './Header';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function LandingPage() {
    return (
        <div className="landingPage">
          

            <div className="landingpage__main">
                 <div className="landingpage__avatar">
                     <img src={stylishPhoto} alt=""/>
                 </div>

                 <div className="landingPage__intro">
                    <h1>Fullstack Web Developer</h1>
                    <hr />

                    <p>HTML/CSS</p> <p> MongoDB </p> <p>Express </p> <p>React  </p><p>Node.js </p><p> Firebase </p>
                </div>
                <div className="landingPage__socialLinks">
                    <a target="_blank"  rel="noopener noreferrer" href="https://www.linkedin.com/in/jaskaran-brar-605992b9/"><LinkedInIcon color="primary" fontSize="large" /></a>
                    <a target="_blank"  rel="noopener noreferrer" href="https://github.com/brarjaskaran"><GitHubIcon color="primary" fontSize="large" /></a>
                    <a target="_blank"  rel="noopener noreferrer" href="https://www.facebook.com/brarjaskaran/"><FacebookIcon color="primary" fontSize="large" /></a>

                   
                    
                </div>
            </div>
            {/* <ArrowUpwardIcon className="landingPage__arrow" fontSize="large" color="primary"/> */}
        </div>
    )
}

export default LandingPage
