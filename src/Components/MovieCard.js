import {Card , Button} from 'react-bootstrap'
import Rating from '@mui/material/Rating';
import {useState} from 'react'

const MovieCard = (props) => {

 const [desc,setDesc] = useState(false)
    return (
        <div className="movieCard">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w200${props.movie.poster_path}`} />
  <Card.Body>
    <Card.Title>{props.movie.original_title}</Card.Title>
    <Button variant="primary" onClick={()=> setDesc(!desc)}>Show description</Button>
    { desc &&
    <Card.Text>
      <div>
      {props.movie.overview}
      <p className="releaseDate">
       released : {props.movie.release_date}
      </p>
      </div>
    </Card.Text>
    }
      <Rating name="read-only" value={Math.floor(props.movie.vote_average / 2)} readOnly />
  </Card.Body>
</Card>
        </div>
    )
}

export default MovieCard