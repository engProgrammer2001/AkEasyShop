import React, { useState } from "react";

const Search = (products, GridList) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="widget widget-search">
      <form className="search-wrapper mb-3">
        <input type="text" name="search" id="search" placeholder="searech...." defaultValue={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <button type="submit">
          <i className="icofont-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
