import React from "react";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  activePage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="default-pagination lab-ul">
      {/* left arrow  */}
      <li>
        <a
          href="#"
          onClick={() => {
            if (activePage < pageNumbers.length) {
              paginate(activePage - 1);
            }
          }}
        >
          <i className="icofont-rounded-left"></i>
        </a>
      </li>
      {/* number here  */}
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`page-item ${number === activePage ? "bg-warning" : ""}`}
        >
          <button onClick={() => paginate(number)} className="bg-transparent">
            {number}
          </button>
        </li>
      ))}
      {/* right arrow */}
      <li>
        <a
          href="#"
          onClick={() => {
            if (activePage < pageNumbers.length) {
              paginate(activePage + 1);
            }
          }}
        >
          <i className="icofont-rounded-right"></i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
