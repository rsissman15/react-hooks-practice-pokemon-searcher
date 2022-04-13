import React from "react";

function Search({search, setSearch}) {

  function handleOnChange(e){
    setSearch(e.target.value)
  }


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
        onChange={handleOnChange}
         className="prompt"
         value={search} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
