import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Details from './Components/Details/Details'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Error from './Components/Error/Error'
import { createContext, useState } from 'react'

/* export const AppContext = createContext() */
function App() {
  return (
    <div>
     {/*  <AppContext.Provider value={{ movieData, setMovieData }}> */}

        <NavBar />
        <Routes >
     {/*    // Home page */}
          <Route path='/' element={<Home />} />
       {/*  //Error page */}
          <Route path='*' element={<Error />} />
      {/*   //Movie detail page */}
          <Route path='/movie/:id' element={<Details />} />
        </Routes>
        <Footer />

 {/*      </AppContext.Provider> */}
    </div >
  )
}

export default App