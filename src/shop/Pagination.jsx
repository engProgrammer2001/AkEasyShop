import React from "react";

const Pagination = (productsPerPage, totalProduct, paginate, activePage) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProduct / productsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <ul className="default-pagination lab-ul">
      {pageNumber.map((number) => (
        <li
          key={number}
          className={`page-item ${number === activePage ? "bg:worning" : ""}`}
        >
          <button onClick={() => paginate(number)} className="bg-transparent">
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;



