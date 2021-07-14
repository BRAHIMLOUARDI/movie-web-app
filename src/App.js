import react, { useEffect, useState } from 'react';
import './App.css';
import Movie from './Movie';
import NavBar from './NavBar';


const App = () => {
  return (
    <>
      <NavBar />
      <h1>welcome</h1>
      <Movie />
    </>
  )
}

export default App
