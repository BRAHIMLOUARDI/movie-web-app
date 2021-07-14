import React, { useState, useEffect } from 'react';
//import React, { useState, useEffect } from 'react';
import './navbar.css'
//import App, { printSerchmovie } from './App.js'

function NavBar() {
  const [Count, setCount] = useState(0);
  const [Serchvalue, setSerchvalue] = useState('');
  const handleChange = (e) => {
    setSerchvalue(e.target.value);
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   printSerchmovie(Serchvalue);
  // }
  return (
    <div className="navBar">
      <div className="routesarea">
        <div><a href="#">top Movie</a></div>
        <div><a href="#">series</a></div>
        <div><a href="#">log in</a></div>
        <div><a href="#">resigter</a></div>
        <div className="About"><a href="#">about</a></div>
      </div>
      <div className="hidden">
        <button>show</button>
      </div>
      <div className="searchbox">
        <form>
          <input type="text" placeholder="serch" />
          <button>search</button>
        </form>
      </div>
    </div>
  )

}

export default NavBar;