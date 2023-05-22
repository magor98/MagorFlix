import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { title, posterURL, rating } = movie;

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img src={posterURL} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className="rating">{rating}</span>
      </div>
    </Link>
  );
};

export default MovieCard;
