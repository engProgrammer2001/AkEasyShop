import React, { useState } from "react";
import PageHeader from "../Components/PageHeader";
import Data from "../products.json";
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";
import Search from "./Search";

const showResults = "Showing 01 - 12 of 139 Results";

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setproducts] = useState(Data);
  console.log(Data)

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastproduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastproduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct,indexOfLastproduct);

  // function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <PageHeader title="Our Shop page" curPage="Shop" />

      {/* Shop page  */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* layout and title Here  */}
                <div className="shop-title d-flex flex-warp justify-content-between">
                  <p>{showResults}</p>
                  <div
                    className={`product-view-mode ${
                      GridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>

                {/* products card  */}
                <div>
                  <ProductCards GridList={GridList} products={currentProducts} />
                </div>

                {/* Pagination here  */}
                <Pagination 
                productsPerPage = {productsPerPage}
                totalProducts = {products.length}
                paginate = {paginate} 
                activePage = {currentPage}
               />

              </article>
            </div>
            {/* Right side code start Here  */}
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} GridList={GridList}/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shop;
