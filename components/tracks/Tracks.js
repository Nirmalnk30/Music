import React, { useContext } from 'react';
import { Track } from './Track';
import { Context } from '../../context/GlobalContext';
import { Prev } from './Previous';

export const Tracks = () => {
  const value = useContext(Context);
  const { track_list, heading, prev } = value;

  let result, prevPage;

  if (track_list === undefined || track_list.length === 0) {
    
  } else {
    result = (
      <>
        <h3 className='text-center1'>{heading}</h3>
        <div className='row'>
          {track_list.map((item) => {
            return <Track key={item.id} track={item} />;
          })}
        </div>
      </>
    );
  }

  

  return (
    <>
      <div className='wrapper m-5'>
        {/* Results from API */}
        {result}
        {/* Next and Prev Button */}
        <div className='row text-center mx-auto d-flex justify-content-around'>
          {prevPage && (
            <div className='col-md-6'>
              <div className='btn w-75'>
                <Prev link={prev} />
              </div>
            </div>
          )}
          
        </div>
      </div>
    </>
  );
};