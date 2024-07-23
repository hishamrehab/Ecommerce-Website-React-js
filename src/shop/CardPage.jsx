import React, { useEffect, useState } from 'react'
import PageHeader from '../components/pageHeader';
import { Link } from 'react-router-dom';

const CardPage = () => {
    const [cardItems, setCardItems] = useState([]);


    useEffect(() => {
        // fetch card item from local storage
        const storedCardItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCardItems(storedCardItems);
    }, [])

    console.log(cardItems);
    // calculate prices
    const calculateTotalPrice = (item) => (item.price * item.quantity)
    const handleIncrease = (item) => {
        item.quantity += 1;
        setCardItems([...cardItems]);

        //update local storage with new cart items
        localStorage.setItem("cart", JSON.stringify(cardItems));
    }

    // handle Quantity decrease
    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setCardItems([...cardItems]);
            localStorage.setItem("cart", JSON.stringify(cardItems));
        }
    }

    // handle item remove
    const handleRemoveItem = (item) => {
        const updatedCart = cardItems.filter((cardItem) => cardItem.id !== item.id);
        // update new card
        setCardItems(updatedCart);
        updateLocalStorage(updatedCart);
    }
    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    // cart subtotal
    const cartSubTotal = cardItems.reduce((total, item) => {
        return total + calculateTotalPrice(item)
    }, 0);

    // order total
    const orderTotal = cartSubTotal;

    return (
        <div>
            <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />

            <div className='shop-cart padding-tb'>
                <div className="container">
                    <div className="section-wrapper">
                        {/* Cart top */}
                        <div className='cart-top'>
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cat-product'>Product</th>
                                        <th className='cat-price'>Price</th>
                                        <th className='cat-quantity'>Quantity</th>
                                        <th className='cat-toprice'>Total</th>
                                        <th className='cat-edit'>Edit</th>
                                    </tr>
                                </thead>
                                {/* table head */}
                                <tbody>
                                    {
                                        cardItems.map((item, index) => (
                                            <tr key={index}>
                                                <td className='product-item cat-product'>
                                                    <div className='p-thumb'>
                                                        <Link to="/shop">
                                                            <img src={item.img} alt='' />
                                                        </Link>
                                                    </div>
                                                    <div className='p-content'>
                                                        <Link to="/shop" >{item.name}</Link>
                                                    </div>
                                                </td>
                                                <td className='cat-price'>
                                                    ${item.price}
                                                </td>
                                                <td className='cat-quantity'>
                                                    <div className='cart-plus-minus'>
                                                        <div className='dec qtybutton' onClick={() => handleDecrease(item)}> - </div>
                                                        <input type='text' className='cart-plus-minus-box' name='qtybutton' value={item.quantity} />
                                                        <div className='inc qtybutton' onClick={() => handleIncrease(item)}> + </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>

                        </div>
                        {/* cart top ends */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPage