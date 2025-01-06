import React, { useEffect, useState } from 'react'
import './banner.css'
import axios from '../../utils/axios'
import request from '../../utils/request'

const Banner = () => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const requeste = await axios.get(request.fetchNetflixOriginals)
                console.log(requeste);
                setMovie(requeste.data.results[
                    Math.floor(Math.random() * requeste.data.results.length)
                ]);
            } catch (error) {
                console.log("error",error);
            }
        })()
    }, []);
    function trancuate(str, n) {
        return str?.length > n? str.substr(0, n-1) + '...': str;
    };
  return (
    <div className='banner'
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path
        }")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }}
    >
        <div className='banner-contents'>
            <h1 className='banner-title'>
                {movie?.title||movie?.name
||movie?.original_name
}
            </h1>
            <div className='banner-buttons'>
                <button className='banner-button play'>Play</button>
                <button className='banner-button'>My List</button>
            </div>
            <h1 className='banner-description'>{trancuate(movie?.overview, 150)}</h1>
        </div>
        <div className='banner-fadeBottom'/>
    </div>
  )
}

export default Banner;