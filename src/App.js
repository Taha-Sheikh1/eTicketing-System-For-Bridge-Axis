import React, { useContext } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Authentication from './Pages/Authentication';
import Movies from './Pages/Movies';
import NotFound from './Pages/NotFound';
import AuthContext from './Store/auth-context';
import MovieDetails from './Components/MovieList/MovieDetails';


function App() {
  const authCtx = useContext(AuthContext);

  return (
    <React.Fragment>

      <Header />
      <Routes>

      <Route path='/' element={<Navigate to='/auth' replace={true} />} />
      {!authCtx.isLoggedIn && <Route path='/auth' element={<Authentication />} />}
      {authCtx.isLoggedIn && <Route path='/movies' element={<Movies />} />}
      {authCtx.isLoggedIn && <Route path='/auth' element={<Navigate to='/movies' replace={true} />} />}
      {!authCtx.isLoggedIn && <Route path='/movies' element={<Navigate to='/auth' replace={true} />} />}
      <Route path='/movies/:movieId' element={<MovieDetails />} />
      <Route path='*' element={<NotFound />} />
        
      </Routes>
      <Footer />
      
    </React.Fragment>
  );
}

export default App;

