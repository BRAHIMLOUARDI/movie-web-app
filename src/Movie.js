import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'
import './App.css';
import { useGlobalContext } from './context'

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const Movie = (props) => {

  const [movies, setMovie] = useState([]);
  const [count, setCount] = useState(1);
  const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${count}`;

  const { search, issubmit, handlesubmit } = useGlobalContext()

  const fetchdata = async (URL) => {

    const response = await fetch(URL + search);
    const data = await response.json()
    setMovie(() => data.results)
    handlesubmit();

  }
  if (issubmit) {
    fetchdata(SEARCHAPI);
  }

  useEffect(() => {
    fetch(APIURL).then(movie1 => movie1.json()).then(json => setMovie(() => {
      return movies.concat(...movies, json.results);
    }));

  }, [count])
  const handlclassName = (props) => {
    if (props < 5) {
      return "red";
    }
    else if (props > 5 && props < 7.6)
      return "orange";
    else if (props >= 7.6)
      return "green";
  }
  if (movies.length === 1) {

    return (
      <div className="movie-detaile">
        <div className="image-container">
          <img src={IMGPATH + movies[0].backdrop_path} alt="ggggggggg" />
        </div>
        <div className="movie-info">
          <h1>{movies[0].title}</h1>
          <p><span>language</span> :  {movies[0].original_language}</p>
          <p><span>movie title</span>    :        {movies[0].title}</p>
          <p><span>date of release</span>:      {movies[0].release_date}</p><br />
          <p><span >vote average</span>   :        <span className={"span" + handlclassName(movies[0].vote_average)}>{movies[0].vote_average}</span></p><br />
        </div>
        <div className="review">
          <h4>review :</h4>
          <p>{movies[0].overview}</p>
        </div>

      </div>
    )
  }
  return (

    <div className="movies_container">
      <div className="images_container">
        {movies.map(movie => {
          return (
            <div key={movie.id} className="movie-container" >
              <img movie={movie} alt="hhhhhhhh" onClick={() => {
                setMovie(() => {
                  return movies.splice(0, movies.length, movie)
                })
              }} src={IMGPATH + movie.backdrop_path} />
              <p >{movie.title}  <span className={"span" + handlclassName(movie.vote_average)}>   {movie.vote_average}</span></p>
            </div>
          )
        })}
      </div>
      <div className="load_more">
        <button className="load-button" onClick={() => setCount(count + 1)} >{<AiOutlinePlus />}</button>
      </div>
    </div>

  );
}


export default Movie;

