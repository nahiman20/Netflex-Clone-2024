import axios from "../../utils/axios";
import React, { useState, useEffect } from "react";
import requests from "../../utils/requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]); // to change the state. to change the movie poster
//   const originals = requests.fetchNetflixOriginals;

  useEffect(() => {
    (async () => {
        try {
    const request = await axios.get(requests.fetchNetflixOriginals);
    console.log(request)
    setMovie(request.data.results[
          Math.floor(Math.random() * request.data.results.length )
        ]);
    } catch (error) {
        console.log("error" , error);
    }
}) ()
  }, []);

  //   console.log(movie);

    function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

  return (
    /* background image for header */
    <div
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* ? aka optional chaining is for any reason a movie is undefined then it should not freak out and crash. instead handle it elegantly */}
      <div className="banner_contents">
        {/* title */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* div > 2 buttons */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
          {/* description */}
          <h1 className="banner_description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </div>
      <div className="banner_fade"></div>
    </div>
  );
}

export default Banner;






