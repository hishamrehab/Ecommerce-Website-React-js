import React from 'react'
import Data from "../products.json"
const ShopCategory = ({ filterItem, setItem, menuItems, setProducts, selectedCategory }) => {
    return (
        <>
            <div className='widget-header'>
                <h5 className='ms-2'>
                    All Categories
                </h5>
            </div>
            <button onClick={() => setProducts(Data)} className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}>All</button>
            <div>{menuItems.map((val, id) => {
                return (
                    <button key={id} className={`m-2 ${selectedCategory === val ? "bg-warning" : ""}`} onClick={() => filterItem(val)}>{val}</button>
                )
            })}</div>
        </>
    )
}

export default ShopCategory