import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Description = () => {
  const [desc, setDesc] = useState(null);
  let { movId } = useParams();
  const getMovieDesc = async (movId) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movId}?api_key=be31e1bf2d04569a5db5aa222d161eae&language=en-US`
      );

      return setDesc(res.data);
    } catch (error) {
      //console.log(error)
    }
  };

  useEffect(() => {
    getMovieDesc(movId);
    console.log(movId);
    console.log(desc);
  }, [movId]);

  useEffect(() => {
    console.log(desc);
  }, [desc]);
  return (
    <div className="description">
      {desc ? (
        <div>
          <h1>{desc.original_title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w200${desc.poster_path}`}
            alt=""
          />

          <div className="genres">
            <h3>Genres :</h3>
            <ul>
              {desc.genres.map((e) => {
                return <li>{e.name}</li>;
              })}
            </ul>
          </div>
            
          <div className="overallDetails">
            <div className="description">
               <p>{desc.overview}</p>
            </div>
              <div>
                <p>Popularity : {desc.popularity}</p>
                <p>Rating :{desc.vote_average}</p>

              </div>
          </div>

        </div>
      ) : null}
    </div>
  );
};

export default Description;
