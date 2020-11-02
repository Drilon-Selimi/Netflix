import React, { useState ,useEffect } from 'react';
import './style/Nav.css';

function Nav() {
    const[show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          if(window.scrollY > 100) {
            handleShow(true)
          }else handleShow(false);
        });
          return () => {
            window.removeEventListener("scroll");
          };
        }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo"
            src="http://static.wixstatic.com/media/cbafe1_63c8e817ce56404193de0db66bc66418~mv2_d_1600_1600_s_2.png"
            alt="netflix-logo"></img>

            <img
        className="nav_avatar"
        src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg"
        alt="Netflix Avatar"
      />
        </div>
    )
}

export default Nav
