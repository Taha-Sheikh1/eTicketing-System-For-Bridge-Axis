import React from 'react';
import { Link } from 'react-router-dom';
import './MyMovies.css';


const MyMovies = ({movies}) => {

  return (

    <>

  {movies.splice(0,1).map((movie, index) => (
				<div key={index} className='image-container d-flex justify-content-start m-2'>
        <Link to={`/movies/${movie.title}`}>
      <div className='card'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt='movie' className='img-fluid' />
      <div className='card-body'>
        <h5 className='card-title'>{movie.title}</h5>
        <p className='card-text'>{movie.overview}</p>
      </div>
      </div>
        </Link>
      </div>
	))}

    </>

  );
};

export default MyMovies;

