import React, { useState } from "react";


export default function Searchbar(props) {
  const [search, setSearch] = useState("");
  const { onSearch } = props;
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  return (
    <>
      <div className="search">
        <input placeholder="Search fro pokemon" onChange={onChangeHandler} />
      </div>
      <div className="search-button">
        <button onClick={onButtonClickHandler}>Search</button>
      </div>
    </>
  );
}