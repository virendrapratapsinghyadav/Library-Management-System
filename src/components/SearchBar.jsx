import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="Search by title or author"
    className="p-2 border rounded w-full mb-4"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
);

export default SearchBar;
