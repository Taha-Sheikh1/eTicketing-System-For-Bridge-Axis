import React from 'react';
import './Cinema.css';
import clsx from 'clsx';

const Cinema = ({ movie, selectedSeats, onSelectedSeatsChange, seats }) => {

    function handleSelectedState(seat) {
        const isSelected = selectedSeats.includes(seat)
        if (isSelected) {
          onSelectedSeatsChange(
            selectedSeats.filter(selectedSeat => selectedSeat !== seat),
          )
        } else {
          onSelectedSeatsChange([...selectedSeats, seat])
        }
      }

  return (
    <div className='Cinema'>
      <div className='screen' />

      <div className='seats'>
        {seats.map(seat => {
          const isSelected = selectedSeats.includes(seat)
          const isOccupied = movie.occupied.includes(seat)
          return (
            <span
              tabIndex='0'
              key={seat}
              className={clsx(
                'seat',
                isSelected && 'selected',
                isOccupied && 'occupied',
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : e => {
                      if (e.key === 'Enter') {
                        handleSelectedState(seat)
                      }
                    }
              }
            />
          )
        })}
      </div>
    </div>
  )
}

export default Cinema