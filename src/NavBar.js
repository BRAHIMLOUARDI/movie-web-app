import React, { useState, useRef, useEffect, useContext } from 'react';
import { links, social } from './data';
import { FaBars } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go'

import logo from './logo.svg';
import './navbar.css'
const NavBar = () => {
  const [showlinks, setshowlinks] = useState(false);
  const linksContainerRef = useRef(null)
  const linksref = useRef(null)

  const toggleLinks = () => {
    setshowlinks(!showlinks);
  }
  useEffect(() => {
    const linksheight = linksref.current.getBoundingClientRect().height
    if (showlinks) {
      linksContainerRef.current.style.height = `${linksheight}px`
      console.log(linksheight);
    } else {
      linksContainerRef.current.style.height = "0px"
    }

  }, [showlinks])
  return (
    <>
      <nav>


        <div className='nav-center'>
          <div className='nav-header'>
            <img src={logo} className='logo' alt='logo' />
            <button className='nav-toggle' onClick={toggleLinks}>
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksref} >
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id} ><a href={url}>{text}</a></li>
                )
              })}
              <li className="search-box">
                <input type="txt" placeholder="search"></input>
                <button><GoSearch /></button>
              </li>
            </ul>
          </div>

          <ul className="social-icons">
            {social.map(socia => {
              const { id, url, icon } = socia
              return (
                <li key={id}><a href={url} >{icon}</a></li>
              )
            })}

          </ul>
        </div>
      </nav>
    </>
  )
}
export default NavBar;