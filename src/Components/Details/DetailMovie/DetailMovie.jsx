import React, { useContext, useState, useEffect } from "react";
/* import { AppContext } from '../../../App' */
import axios from "../../../axios";
import { imageUrl, API_KEY } from "../../../constants/constants";
import defaultImage from '/images/no_movie.jpg'
import YouTube from 'react-youtube'
import { useParams } from 'react-router-dom'
import './DetailMovie.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
function DetailMovie() {
    const [movieData, setMovieData] = useState()
    const [playMovie, setPlayMovie] = useState(false)
    const [watchMovie, setWatchMovie] = useState()
    const { id } = useParams()
    const urlSearchParams = new URLSearchParams(window.location.search);
    const tv = urlSearchParams.get('tv');
    useEffect(() => {
        id && axios.get(`${tv}`=='true' ? `tv/${id}/videos?api_key=${API_KEY}&language=en-US` : `movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            setWatchMovie(response.data.results[0])
        })

        id && axios.get(`${tv}` =='true' ?`tv/${id}?api_key=${API_KEY}`:`movie/${id}?api_key=${API_KEY}`).then((response) => {
            setMovieData(response.data)
        })
    },[])

    const opts = {
        height: '448px',
        width: '100%',
        playerVars: {
            autoplay: 1,
        }
    }



    return (
        <div>
            {playMovie && movieData && watchMovie && <button onClick={() => setPlayMovie(!playMovie)} className="DetailMovie-closeButton" >
                <FontAwesomeIcon icon={faTimes} />
            </button>}
            <div style={{ backgroundImage: `url(${movieData ? imageUrl + movieData.backdrop_path : defaultImage})` }} className='detailMovie'>
                <div className='content'>
                  { movieData && <h1 className='title'>{movieData.original_title ? movieData.original_title : movieData.original_name}</h1>}
                    <div className='detailMovie_button'>
                        <button onClick={() => setPlayMovie(!playMovie)} className='button'>Play</button>
                        <button className='button'>My list</button>
                    </div>
                   {movieData && <h1 className='description_detail'>{movieData ? movieData.overview : ''}</h1>}
                </div>
                <div className="fade_bottom"></div>

            </div>
            {playMovie && movieData && watchMovie && <YouTube className='DetailMovie' opts={opts} onEnd={() => setPlayMovie(!playMovie)} videoId={watchMovie.key}></YouTube>}

        </div>

    )
}

export default DetailMovie