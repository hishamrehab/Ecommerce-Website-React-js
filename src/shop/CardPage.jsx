import React, { useEffect, useState } from 'react'
import PageHeader from '../components/pageHeader';
import { Link } from 'react-router-dom';
import delImageUrl from "../assets/images/shop/del.png"
import CheckOutPage from "./CheckOutPage"
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
                                        <th className='cat-edit'>delete</th>
                                    </tr>
                                </thead>
                                {/* table head */}
                                <tbody>
                                    {
                                        cardItems.length > 0 ? (cardItems.map((item, index) => (
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
                                                <td className='cat-toprice'>
                                                    ${calculateTotalPrice(item)}
                                                </td>
                                                <td className='cat-edit'>
                                                    <a href='#' onClick={() => handleRemoveItem(item)}>
                                                        <img src={delImageUrl} alt='' />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))) : (<h2 className='py-3'>No Products in your cart  ...</h2>)
                                    }
                                </tbody>
                            </table>

                        </div>
                        {/* cart top ends */}


                        {/* card bottom */}
                        <div className='cart-bottom'>
                            {/* check out box */}
                            <div className='cart-checkout-box'>
                                <form className='coupon'>
                                    <input className='card-page-input-text' type='text' name='coupon' id='coupon' placeholder='Coupon Code....' />
                                    <input type='submit' value={"Apply Coupon"} />
                                </form>
                                <form className='cart-checkout'>
                                    <input type='submit' value="Update Card" />
                                    <div>
                                        <CheckOutPage />
                                    </div>
                                </form>
                            </div>
                            {/* checkOut box */}
                            <div className='shiping-box'>
                                <div className='row'>
                                    <div className='col-md-6 col-12'>
                                        <div className='calculate-shiping'>
                                            <h3>Calculate Shiping</h3>
                                            <div className='outline-select'>
                                                <select>
                                                    <option value="uk">United Kindom (Uk)</option>
                                                    <option value="us">United States (USA)</option>
                                                    <option value="bd">Bangladesh</option>
                                                    <option value="pak">Pakistan</option>
                                                    <option value="ind">India</option>
                                                    <option value="np">Napal</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                            </div>

                                            <div className='outline-select shipping-select'>
                                                <select>
                                                    <option value="uk">New York</option>
                                                    <option value="us">London</option>
                                                    <option value="bd">Dhaka</option>
                                                    <option value="pak">Korachi</option>
                                                    <option value="ind">New Delhi</option>

                                                </select>
                                                <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                            </div>
                                            <input type='text' name='postalCode' id="postalCode" placeholder='postcode/ZIP*' className='cart-page-input-text' />
                                            <button type='submit'>Update Address</button>

                                        </div>
                                    </div>
                                    <div className='col-md-6 col-12'>
                                        <div className='cart-overview'>
                                            <h3>Cart Total</h3>
                                            <ul className='lab-ul'>
                                                <li>
                                                    <span className='pul-left'>Cart Subtotal</span>
                                                    <p className='pull-right'>$ {cartSubTotal}</p>
                                                </li>

                                                <li>
                                                    <span className='pul-left'>Shipping and Handling</span>
                                                    <p className='pull-right'>Free Shipping</p>
                                                </li>

                                                <li>
                                                    <span className='pul-left'>Order Total</span>
                                                    <p className='pull-right'>${orderTotal.toFixed(2)}</p>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            {/* shopping box */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPage