import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
function Header() {
    return (
        <div className="header">
             <div className="header__header">
                <Link className="header__link__logo"  to="/"><h3 className="header__name">Jaskaran's Portfolio</h3></Link>
                <div className="header__menuList">
                  <Link className="header__link" to="/resume"><h2>Resume</h2></Link>  
                  <Link className="header__link" to="/projects"><h2>Projects</h2></Link>  
                  <Link className="header__link" to="/contact"><h2>Contact</h2></Link>  
                  {/* <Link className="header__link" to="/about"><h2>About</h2></Link>   */}
                    
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Header
