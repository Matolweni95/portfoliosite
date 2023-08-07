import React from 'react';
import './Navbar.css';
import './toggle.css';

const Navbar = () => {

  const SetDarkMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'dark')
  }
  
  const SetLightMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'light')
  }

  SetDarkMode();

  const toggleTheme = (e) => {
    if (e.target.checked) SetLightMode();
    else SetLightMode()
  }
  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "light") {
    SetLightMode()
  }
  return (
    <div className='Navbar'>
      <header className='header'>
        <div className='header-content'>
            <div className="logo-container">
                <a href='#' className='logo'>MASI</a>
                <svg width="40" height="23" viewBox="0 0 90 71" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="10" width="35" height="52" fill="#000000"></rect><path d="M0 0V70.338H89.521V0H0ZM19.184 53.481L12.79 47.085L19.184 40.691L25.578 34.2971C25.578 34.2971 21.681 30.4 19.184 27.903C16.687 25.406 12.79 21.509 12.79 21.509L15.987 18.3115L19.184 15.114L28.7755 24.7055L38.367 34.2971L28.7755 43.889L19.184 53.481Z" fill="aliceblue"></path><rect className="blinkit" x="45" y="44" width="29" height="8" fill="#000000"></rect></svg>
            </div>
          <nav className="navbar">
            <ul className='nav-list'>
              <li className='nav-item'>
                  <button href='#' >Contact</button>
                  <label class="switch">
                    <input
                    className='dark_mode'
                    type="checkbox"
                    id='darkmodetoggle'
                    onChange={toggleTheme}
                    />
                    <span class="slider"></span>
                  </label> 
              </li>
            </ul>
          </nav>
          <div className="hamburger">
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
        </div>
        
      </header>
      <div className='svg-cont'>
        <svg className="github" width="30" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-alt"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path fill="aliceblue" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg>
      </div>
    </div>
  );
};

export default Navbar;