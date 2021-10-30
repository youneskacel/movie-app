import MovieCard from "./MovieCard";
import Pagination from "@mui/material/Pagination";

const MoviesList = (props) => {
  return (
     <>
    <div className="moviesList">
         {props.movies.results.map(e => {
         return  <MovieCard movie={e} />
      })}  
      
    </div>
       
      </>
  );
};

export default MoviesList;
