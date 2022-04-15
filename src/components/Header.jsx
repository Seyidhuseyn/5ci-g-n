import React from 'react'
import Typed from 'react-typed'
import Logo from '../components/logo.png'

const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className="main-info">
            <h1>Majidov Seyidhuseyn</h1>
            <Typed
              className='typed-text'
              strings={[
                'Student of Azerbaijan Technical University',
                'Junior Front-End Developer',]}
                typeSpeed={40}
                backSpeed={50}
                loop >
            </Typed>
            <a href={Logo} className='download-cv' download>Download CV</a>
        </div>
    </div>
  )
}

export default Header