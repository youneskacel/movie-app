import MoviesList from "./MoviesList"
import {useState,useEffect} from 'react'
import Pagination from "@mui/material/Pagination";
import axios from 'axios'


const Home = () => {
     const [page,setPage] = useState(1)
     const [movies,setMovies] = useState(null)
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

      useEffect(()=>{
        getMovies(page)
        console.log(movies)
      },[page])

    return (
        <div>
            {
                movies ? ( <>
                <MoviesList movies={movies} />
                    
                    <Pagination count={movies.total_pages} page={page} onChange={(e,value) => {
               setPage(value)
               console.log(page)
               
             }} />
                   </> ) : null
            }
            
        </div>
    )
}

export default Home
