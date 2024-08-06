import React, { useState } from 'react'
import PageHeader from '../components/pageHeader'
import Data from "../products.json"
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import Tags from './Tags';

const showResults = "Showing 01- 12 of 139 Results";
const Shop = () => {
    const [GridList, setGridList] = useState(true);
    const [products, setProducts] = useState(Data);

    // Pagination
    const [currentPge, setCurrentPage] = useState(1);
    const productsParPage = 12;


    const indexOfLastProduct = currentPge * productsParPage;
    const indexOfFirstProduct = indexOfLastProduct - productsParPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // function to change the current page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    // filter product based on category
    const [selectedCategory, setSelectedCategory] = useState("All");
    const menuItems = [...new Set(Data.map((val) => val.category))];

    const filterItem = (curcat) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === curcat;
        })
        setSelectedCategory(curcat);
        setProducts(newItem);
    }


    return (
        <div>
            <PageHeader title="Our Shop Page" curPage="Shop" />
            {/* shop page */}
            <div className='shop-page padding-tb'>
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className='col-lg-8 col-12'>
                            <article>
                                {/* layout and title here */}
                                <div className='shop-title d-flex flex-wrap justify-content-between'>
                                    <p>{showResults}</p>
                                    <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                                        <a className='grid' onClick={() => setGridList(!GridList)}>
                                            <i className='icofont-ghost'></i>
                                        </a>
                                        <a className='list' onClick={() => setGridList(!GridList)}>
                                            <i className='icofont-listine-dots'></i>
                                        </a>
                                    </div>
                                </div>
                                {/* product cards  */}
                                <div>
                                    <ProductCard GridList={GridList} products={currentProducts} />
                                </div>

                                <Pagination productsParPage={productsParPage} totalProducts={products.length} paginate={paginate} activePage={currentPge} />
                            </article>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <aside>
                                <Search products={products} GridList={GridList} />
                                <ShopCategory
                                    filterItem={filterItem}
                                    setItem={setProducts}
                                    menuItems={menuItems}
                                    setProducts={setProducts}
                                    selectedCategory={selectedCategory}
                                />
                                <PopularPost />
                                <Tags />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
