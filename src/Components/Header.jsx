import React from 'react'
import '../Styles/Header.css'
import { Link } from 'react-router-dom'


const Header = () => {
  return (

    <div className=''>
      <header className="header">
        <span class="site-logo-img"><a> <img src="https://iravad.com/wp-content/uploads/2019/10/cropped-FullColor_TransparentBg_1024x1024_72dpi1-28-35x54.png" class="custom-logo" alt="IRAVAD" /></a></span>
        <div className="logo">
          IRAVAD
          <span className="tagline">UNLEASHING IDEAS</span>
        </div>

        <nav className="navigation"
          itemType="https://schema.org/SiteNavigationElement"
          itemScope={true}
          id="site-navigation"
          aria-label="Site Navigation"
        >
          <ul>
            <li><Link to='/Homepage' href="#home">HOME</Link></li>
            <li>
              <select className='nav-product'>
                <option value="0" href="#product">PRODUCT</option>
                <option value="1" href="">OCR</option>
              </select>
            </li>
            <li><Link to='/Aboutus'   href="#aboutus">ABOUT US</Link></li>
            <li><Link to='/Contactus' href="#contactus">CONTACT US</Link></li>
          </ul>
        </nav>
      </header>
    </div>

  )
}

export default Header
