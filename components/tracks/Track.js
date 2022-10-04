import React, { useContext } from 'react';
import { Context } from '../../context/GlobalContext';

export const Track = (props) => {
  // Context API
  const value = useContext(Context);

  const { track } = props;
  return (
    <div className='col-md-4'>
      <div className='cardmb'>
        <img className='card-img-top' src={track.album.cover_big} alt='df' />
        <div className='card-body'>
          <h5 className='card-title'>{track.title}</h5>
          <p className='card-text'>
            <strong>
              <i className='fas fa-play'></i> Artist
            </strong>{' '}
            : {track.artist.name}
            <br />
            <strong>
              <i className='fas fa-compact-disc'></i> Album
            </strong>{' '}
            : {track.album.title}
          </p>
          
        </div>
      </div>
    </div>
  );
};