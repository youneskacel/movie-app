import Footer from "./Components/Footer";
import Header  from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import {Routes , Route } from 'react-router-dom'
import { useEffect, useState } from "react";
import MovieCard from "./Components/MovieCard";
import MoviesList from "./Components/MoviesList";
import Pagination from "@mui/material/Pagination";
import Home from "./Components/Home";
import Newest from "./Components/Newest";
import  Description  from "./Components/Description";
import SearchResult from "./Components/SearchResult";


function App() {
  //const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${apiQuery}`
  //const apiKey = "f663adeff9dff21e12b155d555d16bb0"
  //const apiQuery = "Jack+Reacher"
  const [page , setPage] = useState(1)

  

  // useEffect(() => {

  //   {section === "home" && getMovies(page);}
  //   {section === "newest" && getMoviesNew(page)}
  // }, [page,section]);

  return (
    <div className="App">
      <Header />
      
      <div className="movieWrap">
       <Routes>
          <Route path="/" element={ <Home page={page} /> } />
          <Route path="/newest" element={ <Newest page={page} /> } />
          <Route path="movie/:movId" exact element={ <Description /> } />
          <Route path="search/:search" exact element={ <SearchResult /> } />
       </Routes>
      {/* {movies ? (
        <>
          {console.log(movies)}

          <MoviesList movies={movies}  />
          <Pagination count={movies.total_pages} page={page} onChange={(e,value) => {
         setPage(value)
         console.log(page)
       }} />
          </>
        ) : null} */}
        </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
