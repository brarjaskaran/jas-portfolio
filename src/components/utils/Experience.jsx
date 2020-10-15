import React from 'react';
import "./Experience.css"

function Experience(props) {
    return (
     
         <div className="experience">
          <div className="experience__time">
            <p>
              {props.startYear} - {props.endYear}
            </p>
          </div>
          <div className="experience__description">
            <h4>{props.jobName}</h4>
            <p>{props.jobDescription}</p>
          </div>
        </div>
        
    )
}

export default Experience
