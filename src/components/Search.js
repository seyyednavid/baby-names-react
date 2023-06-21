import React from "react";

const Search = (props) => {
  const searchContentHandler = (event) => {
    props.onSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search a baby"
        value={props.searchContent}
        onChange={searchContentHandler}
      />
    </div>
  );
};

export default Search;
