import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetails = ({ movie }) => {
  const { title, description, trailerLink } = movie;

  return (
    <div className="movie-details">
      <h2>{title}</h2>
      <p>{description}</p>
      <iframe
        src={trailerLink}
        title={`${title} Trailer`}
        width="560"
        height="315"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default MovieDetails;
