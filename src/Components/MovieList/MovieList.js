import React, {useState, useEffect, useContext} from 'react';
import './MovieList.css';
import MyMovies from './MyMovies';
// import AuthContext from '../../Store/auth-context';
// import { Link } from 'react-router-dom';
// import MovieView from './MovieView';

 

const MovieList = () => {
   const [Movies, setMovies] = useState([]);
    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async () => {
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=b9b56d23fab5358c53373b92f85c6788&language=en-US&page=1';
        const response = await fetch(url)
        const movies = await response.json()
        console.log(movies.results)
        setMovies(movies.results)
    };
    fetchMovies().catch((err) => {
        console.log(err)
    });

  return (
    <div>
        <section className='MovieList mt-5 mb-5' id='movies'>
        <div className='container movie-app'>
        <h1 className='mb-5 mt-5'>Best Selling Movies!</h1>

        <div className='row gx-0'>

            <div className='col-lg-4'>
            <MyMovies movies={Movies} />
            </div>

            <div className='col-lg-4'>
            <MyMovies movies={Movies} />
            </div>

            <div className='col-lg-4'>
            <MyMovies movies={Movies} />
            </div>

        </div>  

        
        <div className='row gx-0'>

            <div className='col-lg-4'>
            <MyMovies movies={Movies} />
            </div>

            <div className='col-lg-4'>
            <MyMovies movies={Movies} />
            </div>

            <div className='col-lg-4'>
            <MyMovies movies={Movies} />
            </div>

        </div>  

        <div className='row gx-0'>

            <div className='col-lg-4'>
            <MyMovies movies={Movies} />
            </div>

            <div className='col-lg-4'>
            <MyMovies movies={Movies} />
            </div>

            <div className='col-lg-4'>
            <MyMovies movies={Movies} />
            </div>

        </div> 

        </div>
    </section>
    </div>
  );
};

export default MovieList;
