import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        className="  pa2 mb4 ba b--green b--lightest-blue"
        type="search"
        placeholder="find bot friend"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
