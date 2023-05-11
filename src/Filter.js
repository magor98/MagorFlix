import React from 'react';

const Filter = ({ filterTitle, filterRating }) => {
  return (
    <div className="filter">
      <label htmlFor="title">Filtrer par Titre:</label>
      <input
        type="text"
        id="title"
        placeholder="Enter title here"
        onChange={(e) => filterTitle(e.target.value)}
      />
      <label htmlFor="rating">Filtrer par Rating:</label>
      <input
        type="number"
        id="rating"
        min="1"
        max="10"
        placeholder="Enter rating here"
        onChange={(e) => filterRating(e.target.value)}
      />
    </div>
  );
};

export default Filter;
