import React from 'react';
import "./Education.css"

function Education({startYear, endYear, schoolDescription, schoolName}) {
    return (
     
        <div className="education">
          <div className="education__time">
            <p>
              {startYear} - {endYear}
            </p>
          </div>
          <div className= "education__description">
            <h4>{schoolName}</h4>
            <p>{schoolDescription}</p>
          </div>
        </div>
      
    )
}

export default Education;
