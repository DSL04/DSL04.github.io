import { useEffect } from 'react';
import '../navbar/navbar.scss'


const Navbar = () => {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">

          <a role="button" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href='http://localhost:3000/'>
              <img/>
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button">
                  CONTACT
                </a>
                <a className="button" href='http://localhost:3000/team'>
                  TEAM
                </a>
                <a className="button">
                  SERVICES & APPOINTMENTS
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

    );   
}



export default Navbar;