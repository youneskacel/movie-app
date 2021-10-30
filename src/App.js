import Footer from "./Components/Footer";
import Header  from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./Components/MovieCard";
import MoviesList from "./Components/MoviesList";
import Pagination from "@mui/material/Pagination";


function App() {
  //const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${apiQuery}`
  //const apiKey = "f663adeff9dff21e12b155d555d16bb0"
  //const apiQuery = "Jack+Reacher"
  const [movies, setMovies] = useState(null);
  const [page , setPage] = useState(1)
  const [section , setSection] = useState("home")

  const getMovies = async (page) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=be31e1bf2d04569a5db5aa222d161eae&language=en-US&page=${page}`
      );

      return setMovies(res.data);
    } catch (error) {
      //console.log(error)
    }
  };
  const getMoviesNew = async (page) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=be31e1bf2d04569a5db5aa222d161eae&language=en-US&page=${page}`
      );

      return setMovies(res.data);
    } catch (error) {
      //console.log(error)
    }
  };

  useEffect(() => {

    {section === "home" && getMovies(page);}
    {section === "newest" && getMoviesNew(page)}
  }, [page,section]);

  return (
    <div className="App">
      <Header setSection={setSection} />
      <div className="movieWrap">

      {movies ? (
        <>
          {console.log(movies)}

          <MoviesList movies={movies}  />
      <Pagination count={movies.total_pages} page={page} onChange={(e,value) => {
        setPage(value)
        console.log(page)
      }} />    
      </>
    ) : null}
        </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
