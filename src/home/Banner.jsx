import React, { useState } from 'react'
import productData from "../products.json";
import { Link } from 'react-router-dom';
import SelectedCategory from "../components/SelectedCategory"
const title = (
    <h2>Search Your One <span>Thousand</span> of Products</h2>
)
const desc = "We have the largest collection of products "


const bannerList = [
    {
        iconName: "icofont-users-alt-4",
        text: "1.5 Million Customers",
    },
    {
        iconName: "icofont-notification",
        text: "More then 2000 Marchent",
    },
    {
        iconName: "icofont-globe",
        text: "Buy Anything Online",
    },
];



const Banner = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filterProducts, setFilterProducts] = useState(productData);

    // Search funtionality
    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);

        // filtering products based on search
        const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilterProducts(filtered);
    }


    return (
        <div className='banner-section style-4'>
            <div className='container'>
                <div className='banner-content'>
                    {title}
                    <form>
                        <SelectedCategory select={"all"} />
                        <input type="text" name='search' id="search" placeholder='Search Your Products' value={searchInput} onChange={handleSearch} />
                        <button type='submit'>
                            <i className='icofont-search'></i>
                        </button>
                    </form>
                    <p>{desc}</p>
                    <ul className="lab-ul">
                        {
                            searchInput && filterProducts.map((product, i) => {
                                return (
                                    <li key={i}>
                                        <Link to={`/shop/${product.id}`}>{product.name}</Link>
                                        <Link to={`/shop/${product.id}`}>
                                            <img src={product.img} alt='' style={{
                                                width: "80px",
                                                height: "80px",
                                                paddingLeft: "10px",
                                                borderRadius: "5px"
                                            }} />
                                        </Link>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Banner