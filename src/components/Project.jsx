import React from 'react'
import ProjectMedia from './utils/ProjectMedia';
import "./Project.css"

function Project() {
    return (
        <div className="project">
            <ProjectMedia image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1600px-Amazon_logo.svg.png"                           title="Amazone Clone" description="React.js | Stripe Payment Gateway | Context API | BEM Naming conention | Firebase Email-Password Authentication | Firestore " githubLink="https://github.com/brarjaskaran/amazon-clone" liveDemoLink="https://clone-8f1ad.web.app/"/>
            <ProjectMedia image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1024px-Netflix_2015_N_logo.svg.png"           title="Netflix Clone" description="React.js | Context API | BEM Naming conention | Firebase Hosting | Rest API's | Authentication" githubLink="https://github.com/brarjaskaran/netflix-clone" liveDemoLink='https://netflix-clone-89632.web.app/'/>
            <ProjectMedia image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2880px-Facebook_Logo_%282019%29.svg.png" title="Facebook Clone" description="React.js | Context API | BEM Naming conention | Firebase Google Authentication | Firebase Hosting" githubLink="https://github.com/brarjaskaran/facebook-clone" liveDemoLink=""/>
            <ProjectMedia image="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png"                                         title="iMessage Clone" description="React.js | Redux.js | BEM Naming conention | Firebase Google Authentication | Firestore | Firebase Hosting" githubLink="https://github.com/brarjaskaran/imessage-clone" liveDemoLink=""/>
        </div>
    )
}

export default Project;
