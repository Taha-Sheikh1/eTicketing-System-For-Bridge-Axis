import React, {useContext, useState} from 'react';
import './MovieDetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import ShowCase from './ShowCase';
import Cinema from './Cinema';
import AuthContext from '../../Store/auth-context';

const MovieDetails = () => {
  const {movieId} = useParams();
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext)
  
  const occupiedSpaces = [
    {
      name:movieId,
      price: Math.floor(Math.random() * 100),
      occupied: [2, 16, 10, 19, 18, 37] // can create random number then save it into an array, but iam going with these numbers.
    },
  ];

  const [selectedMovie, setSelectedMovie] = useState(occupiedSpaces[0])
  const [selectedSeats, setSelectedSeats] = useState([]) 

const seats = Array.from({ length: 8 * 8 }, (_, i) => i);

const Browser = (e) => {
  e.preventDefault()
  navigate('/movies')
}

const Booking = (e) => {
  e.preventDefault()
  if(selectedSeats.length === 0) {
    alert('Please Select Seats!')
    return; // Not saving/sending the data which doesn't contains any seats which were supposed to be selected!.
  }

  const sendData = async () => {
     const url = 'https://etickets-bc4ff-default-rtdb.firebaseio.com/bookingInfo.json'
     const response = await fetch(url, {
      method:'POST',  
      body: JSON.stringify({
        movie: movieId,
        seats: selectedSeats.length,
        totaCost: selectedSeats.length * selectedMovie.price,
        userId: authCtx.token // iam sending token to backend DB so that the actual user can be authenticated, so, that the tickets are selled accordingly.
      }),
      headers: {
        'Content-Type':'application/json'
      }
     })
  }
  try {
    sendData();
    alert('Seats Booked Successfully!');
    setSelectedSeats([])
    setTimeout(() => {
      navigate('/movies')
      // I am navigating/redirecting the user to the movies page, so that he can book more tickets!
    }, [1000])
    // setTimeout will not run until the SelectedSeats array is emptied!
  }catch {
    const ErrorMessage = 'Sending Request Failed!'
    throw new Error(ErrorMessage)
  }
};
    
  return (
    <div>
    <div className='Seats'>
      <h1 className='text-center'>Booking For The Movie: {movieId}</h1>
        <ShowCase />
        <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
        seats={seats}
      />
      <p className='info text-center'>
        You have selected <span className='count'>{selectedSeats.length}</span>{' '}
        seats for the price of{' '}
        <span className='total'>
          {selectedSeats.length * selectedMovie.price}$
        </span>
      </p>
      <div className='text-center'>
        <button className='purchaseBtn' onClick={Booking}>Book My Seat!</button>
        <button onClick={Browser} className='ms-2 ContinueBtn'>Continue Browsing</button>
      </div>
   </div>
    </div>
  )
}

export default MovieDetails;
