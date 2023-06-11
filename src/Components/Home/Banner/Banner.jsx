import React, { useEffect, useState } from 'react'
import axios from "../../../axios";
import { imageUrl } from "../../../constants/constants";
import './Banner.css'
import {Link} from 'react-router-dom'
import { Carousel } from 'react-bootstrap'

function Banner(props) {
    const [Movie, setMovie] = useState([])

    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovie(response.data.results)
        }).catch((error) => {
            console.log('BannerError = :', error);

        })

    }, [])



    return (
        <Carousel style={{marginTop:"30px"}}>
            {Movie.map((item, index) => {
                return (
                    <Carousel.Item key={index} interval={3000}>
                        <div style={{ backgroundImage: `url(${item ? imageUrl + item.backdrop_path : ""})` }} className='banner'>
                            <Carousel.Caption >
                                <h1 className='title'>{item ? item.original_title : ''}</h1>
                                <div className='banner_button'>
                                    <button onClick={() => playMovies(index, item.id)} className='button'>
                                        <Link to={`/movie/${item.id}`}>
                                        Watch
                                        </Link>
                                        </button>
                                    <button className='button'>My list</button>
                                </div>
                                <h1 className='description '>{item ? item.overview : ''}</h1>
                            </Carousel.Caption>
                            <div className="fade_bottom"></div>

                        </div>

                    </Carousel.Item>

                )
            })}
        </Carousel>
    )
}

export default Banner