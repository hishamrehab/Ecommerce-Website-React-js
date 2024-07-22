import React, { useState } from 'react'



const ProductDisplay = ({ item }) => {
    const { name, id, price, seller, ratingCount, quantity } = item
    const [preQuantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState(" Select Size");
    const [color, setColor] = useState(" Select Color");


    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }

    const handleChangeColor = (e) => {
        setColor(e.target.value);
    }

    const handleDecrease = () => {
        if (preQuantity > 1) {
            setQuantity(preQuantity - 1)
        }
    }
    const handleIncrease = () => {
        setQuantity(preQuantity + 1)
    }

    return (
        <div>
            <h4>{name}</h4>
            <p className='rating'>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <span>{ratingCount} review</span>
            </p>
            <h4>${price}</h4>
            <h6>{seller}</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quaerat nobis suscipit vitae iure illum praesentium.</p>
            {/* cart component */}
            <div>
                <form >
                    {/* sizing */}
                    <div className='select-product size' onChange={handleSizeChange}>
                        <select value={size}>
                            <option>Select Size</option>
                            <option value="SM">SM</option>
                            <option value="MD">MD</option>
                            <option value="LG">LG</option>
                            <option value="XXL">XXL</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>

                    {/* color */}
                    <div className='select-product color' onChange={handleChangeColor}>
                        <select value={color}>
                            <option>Select Color</option>
                            <option value="Pink">Pink</option>
                            <option value="Ash">Ash</option>
                            <option value="Red">Red</option>
                            <option value="White">White</option>
                            <option value="Blue">Blue</option>
                            <option value="Black">Black</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    {/* cart plus minus */}
                    <div className='cart-plus-minus'>
                        <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                        <input className='cart-plus-minus-box' type='text' name='qtybutton' id='qtybutton' value={preQuantity} onChange={(e) => setQuantity(parent(e.target.value, 10))} />
                        <div className='inc qtybutton' onClick={handleIncrease}>+</div>
                    </div>
                    {/* coupon field */}
                </form>
            </div>
        </div>
    )
}

export default ProductDisplay