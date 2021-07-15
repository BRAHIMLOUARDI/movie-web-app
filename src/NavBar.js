import React, { useState } from 'react';
import './navbar.css'

function NavBar() {
  const [Serchvalue, setSerchvalue] = useState('');
  const [shownavbar, setshownabar] = useState("");
  const handleChange = (e) => {
    setSerchvalue(e.target.value);
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   printSerchmovie(Serchvalue);
  // }
  return (
    <div className={"navBar" + shownavbar}>
      <div className={"hidden" + shownavbar}>
        <button onClick={() => {
          if (shownavbar === "") { setshownabar("show") }
          else { setshownabar('') }
          console.log("hhhhh");
        }}>show</button>
      </div>
      <div className={"routesarea" + shownavbar}>
        <div><a href="#">top Movie</a></div>
        <div><a href="#">series</a></div>
        <div><a href="#">log in</a></div>
        <div><a href="#">resigter</a></div>
        <div className="About"><a href="#">about</a></div>
      </div>

      <div className={"searchbox" + shownavbar}>
        <form>
          <input type="text" placeholder="serch" />
          <button  >search</button>
        </form>
      </div>
    </div>
  )

}

export default NavBar;