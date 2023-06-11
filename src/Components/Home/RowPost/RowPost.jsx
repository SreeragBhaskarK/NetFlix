import React, { useEffect, useState, useContext } from 'react'
import './RowPost.css'
import YouTube from 'react-youtube'
import { Link } from 'react-router-dom'
/* import {AppContext} from '../../../App' */
import { Container, Col, Row, Placeholder } from 'react-bootstrap'

import axios from '../../../axios'
import { API_KEY, imageUrl } from '../../../constants/constants'


function RowPost(props) {

  const [Movies, setMovies] = useState([])

  const [UrlId, setUrlId] = useState()
  const [dImg, setDimg] = useState({ state: true })
  /*   const {movieData,setMovieData}= useContext(AppContext) */
  useEffect(() => {
    axios.get(props.url).then((response) => {

      setMovies(response.data.results)
    }).catch(error => {
      console.log('RowPostError = :', error);
    })
  })

  const opts = {
    height: '275px',
    width: '490px',
    cursor: 'pointer',
    marginRight: '10px',
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,

    },

  }

  const optsSmall = {
    height: '165px',
    width: '294px',
    cursor: 'pointer',
    marginRight: '10px',

    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,


    }
  }
  const handleMovie = (id) => {
    axios.get(`${props.keyVal}` != 0 ? `movie/${id}/videos?api_key=${API_KEY}&language=en-US` : `tv/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {

      if (response.data.results.length) {
        setUrlId({ movie: response.data.results[0], index: id })
        setDimg({ state: false, index: id })
      }
    })
      .catch((error) => {
        console.log(error);
      })

  }

  const leaveMovie = (id) => {
    setUrlId(null)
    setDimg({ state: true, index: id })
  }
  return (

    <Container fluid>
      <Row >
        <Col>
          <div key={props.keyVal} className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
              {Movies.map((obj, index) => {

                return (


                  <Link key={index} to={`${props.keyVal}` != 0 ? `/movie/${obj.id}` : `/movie/${obj.id}?tv=true`}>
                    <div id={obj.id} key={obj.id} onMouseEnter={() => handleMovie(obj.id)} onMouseLeave={() => { leaveMovie(obj.id) }}>

                      {UrlId?.movie && UrlId.index == obj.id ? (<YouTube key={obj.id} opts={props.isSmall ? optsSmall : opts} videoId={UrlId.movie.key} />) :
                        (<img className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />)}
                    </div>
                    <h1 className='rowTitle'>{obj.original_title ? obj.original_title : obj.original_name}</h1>
                    
                  </Link>

                )

              })}
            </div>


          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default RowPost