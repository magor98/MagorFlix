import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'The Shawshank Redemption',
      description:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL:
        'https://images-na.ssl-images-amazon.com/images/I/51BkTt%2BZ%2BXL._AC_.jpg',
      rating: 9.3,
    },
    {
      id: 2,
      title: 'The Godfather',
      description:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterURL:
        'https://images-na.ssl-images-amazon.com/images/I/51O9G8oLw3L._AC_.jpg',
      rating: 9.2,
    },
    {
      id: 3,
      title: 'The Dark Knight',
      description:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterURL:
        'https://images-na.ssl-images-amazon.com/images/I/51kqf4z%2BvKL._AC_.jpg',
      rating: 9.0,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleFilter = (value) => setTitleFilter(value);
  const handleRatingFilter = (value) => setRatingFilter(value);

  const addMovie = (title, description, posterURL, rating) => {
    const newMovie = {
      id: movies.length + 1,
      title,
      description,
      posterURL,
      rating,
    };
    setMovies([...movies, newMovie]);
  };
  const selectedMovie = movies.find(movie => movie.id === 1);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );
   
  return (
    <div className="app">
      <h1>Magor_Flix</h1>
      <Router>
      <Routes>
  <Route path="/" element={<Filter filterTitle={handleTitleFilter} filterRating={handleRatingFilter} />} />
  <Route path="/movie/:id" element={<MovieDetails movie={selectedMovie} />} />
</Routes>


      </Router>
      <div className="add-movie">
        <h2>Ajouter un nouveau Film</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addMovie(
              e.target.title.value,
              e.target.description.value,
              e.target.posterURL.value,
              e.target.rating.value
            );
          }}
        >
          <label htmlFor="title">Titre:</label>
          <input type="text" id="title" />
          <label htmlFor="description">Description:</label>
          <textarea id="description" />
          <label htmlFor="posterURL">Poster URL:</label>
          <input type="text" id="posterURL" />
          <label htmlFor="rating">Rating:</label>
          <input type="number" id="rating" min="1" max="10" />
          <button type="submit">Ajouter un film</button>
        </form>
      </div>
    </div>
  );
};

export default App;
