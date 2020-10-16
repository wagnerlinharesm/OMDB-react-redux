import React from 'react';
import MovieCard from './MovieCard';


const MovieList = (props) => {
  return (
    <div style={{display: 'flex', width:'100%' , flexWrap: 'wrap', marginTop : '10px'}}>
    {
    Object.keys(props.movies).length > 0  && props.movies.map(movie => (
      <MovieCard
        key={movie.imdbID}
        title={movie.Title}
        posterUrl={movie.Poster}
        average={movie.Average}
        movie={movie}
        />
    ))}
  </div>

  )
}

export default MovieList;
