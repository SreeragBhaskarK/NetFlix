import React,{useContext} from 'react'

import DetailMovie from '../Details/DetailMovie/DetailMovie'
import MovieCast from '../Details/DetailMovie/MovieCast/MovieCast'
function Details() {
   
  return (
    <div>
   {/*    //Movie image and video page */}
        <DetailMovie/>
   {/*    //Movie cast page */}
        <MovieCast  />
    </div>
  )
}

export default Details