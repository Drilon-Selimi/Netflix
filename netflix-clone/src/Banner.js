import React, { useState, useEffect } from "react";

import "./style/banner.css";
import requests from "./requests";
import axios from "./axios";

function Banner() {
  const [movie, setMovies] = useState([]);

  //run once when the row loads, and don't run again
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

/*Adding ... to the text*/

  function truncate(str, lengthAll) {
    if (!str) return;
    return str.length > lengthAll ? str.substr(0, lengthAll - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1>{movie.title || movie.name || movie.original_name}</h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        
        <h1 className="banner__description">{truncate(movie.overview, 100)}</h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;