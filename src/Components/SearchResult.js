import axios from 'axios'
import {useState,useEffect} from 'react'
import {useParams , useLocation} from 'react-router-dom'
import MoviesList from './MoviesList'


const SearchResult = () => {

    const [movies , setMovies] = useState(null)
    const location = useLocation()
    let search = useParams()
    const getSearchRes = async (search) => {
        try {
          const res = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=be31e1bf2d04569a5db5aa222d161eae&query=${search}`
          );
            const searchRes = res.data
            console.log(res.data)
            return setMovies(searchRes);
        } catch (error) {
          //console.log(error)
        }
      };

      useEffect(()=>{
          getSearchRes(search)
          
      },[])
    return (
        <div>
             {
                movies ? ( <>
                <MoviesList movies={movies} />
                    
                  
               
              
                   </> ) : null
            }
            
        </div>
    )
}

export default SearchResult
