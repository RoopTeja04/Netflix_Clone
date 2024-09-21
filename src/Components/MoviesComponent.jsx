import React, { useState } from 'react';
import MovieData from './Movie';

const MoviesComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 5;
  const totalItems = MovieData.length;

  const nextSlide = () => {
    setCurrentIndex((currentIndex) => Math.min(currentIndex + itemsToShow, totalItems - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex) => Math.max(currentIndex  - itemsToShow, 0));
  };

  return (
    <>
        <div className='slider'>
            <h1 className='slider-name'>Trending Now</h1>
            <div className="slider-container">
                <button 
                    className="slider-button" 
                    onClick={prevSlide} 
                    disabled={currentIndex === 0}
                >
                &#10216;
                </button>
            
                <div className="movies-slider">
                    {MovieData.slice(currentIndex, currentIndex + itemsToShow + 1).map((movie, index) => (
                    <>
                        <div className="movie-item" key={index}>
                            <img className="image-poster" src={movie.img} alt="movie-poster" />
                        </div>

                    </>
                    ))}
                    
                </div>

                <button 
                    className="slider-button" 
                    onClick={nextSlide} 
                    disabled={currentIndex + itemsToShow >= totalItems}
                >
                &#10217;
                </button>
            </div>
        </div>
    </>
  );
};

export default MoviesComponent;
