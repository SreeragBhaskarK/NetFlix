import React, { useEffect, useState, useContext } from 'react'
import { API_KEY, imageUrl } from '../../../../constants/constants'
import axios from '../../../../axios';
/* import { AppContext } from '../../../../App' */
import './MovieCast.css'
import imageCast from '/images/no_cast.png'
import { useParams } from 'react-router-dom'
import { Card, Container, Row, Col } from 'react-bootstrap'
function MovieCast() {

    const [cast, setCast] = useState([])
    const { id } = useParams()
    const urlSearchParams = new URLSearchParams(window.location.search)
    const tv = urlSearchParams.get('tv')
    {
        useEffect(() => {
            id && axios.get(`${tv}` == 'true' ? `tv/${id}/credits?api_key=${API_KEY}` : `movie/${id}/credits?api_key=${API_KEY}`).then((response) => {
                setCast(response.data.cast)
            })


        })



        return (

            <div className='row_card'>

                <h2>Cast</h2>
                <div className='cast '>
                    {cast.map((item, index) => {
                        return (
                            <div key={index} className="me-3 card_item ">
                                {item && item.name && <img className='img' src={`${item.profile_path ? imageUrl + item.profile_path : imageCast}`} alt="" />}

                                {item && <div style={{
                                    fontSize: 'medium'
                                }} className='rowTitle text-white '>{item ? item.name : ''}</div>}


                            </div>


                        )
                    })}

                </div>

            </div>

        )


    }
}

export default MovieCast