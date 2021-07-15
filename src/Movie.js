import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
function Movie(props) {
  const [movies, setMovie] = useState([]);
  const [count, setCount] = useState(1);
  const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${count}`;



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
      <div className="moviedetaile">
        <h1>{movies[0].title}</h1>
        <img src={IMGPATH + movies[0].backdrop_path} alt="ggggggggg" />
        <table>
          <tr>
            <td>movie title</td>
            <td>movie vote average</td>
            <td>movie period</td>
          </tr>
          <tr>
            <td>{movies[0].title}</td>
            <td>{movies[0].vote_average}</td>
            <td>{movies[0].id}</td>
          </tr>
        </table>
      </div>
    )
  }
  return (

    <div className="movies_container">
      <div className="images_container">
        {movies.map(movie => {
          return (
            <div key={movie.id}>
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
        <button onClick={() => setCount(count + 1)} >load more</button>
      </div>
    </div>

  );
}


export default Movie;


// const SEARCHAPI =
//     "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";