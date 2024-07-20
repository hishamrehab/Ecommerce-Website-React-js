import React from 'react'
import { Link } from 'react-router-dom';
import image1 from "../../src/assets/images/category/01.jpg"
import image2 from "../../src/assets/images/category/02.jpg"
import image3 from "../../src/assets/images/category/03.jpg"
import image4 from "../../src/assets/images/category/04.jpg"
import image5 from "../../src/assets/images/category/05.jpg"
import image6 from "../../src/assets/images/category/06.jpg"

// **/_ Home Category _/**

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
    {
        imgUrl: image1,
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'DSLR Camera',
    },
    {
        imgUrl: image2,
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Shoes',
    },
    {
        imgUrl: image3,
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Photography',
    },
    {
        imgUrl: image4,
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Formal Dress',
    },
    {
        imgUrl: image5,
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Colorful Bags',
    },
    {
        imgUrl: image6,
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Home Decor',
    },
]




const HomeCategory = () => {
    return (
        <div className='category-section style-4 padding-tb'>
            <div className='container'>
                {/* section-header */}
                <div className='section-header text-center'>
                    <span className='subtitle'>{subTitle}</span>
                    <h2 className='title'>{title}</h2>
                </div>
                {/* section-card */}
                <div className='section-wrapper'>
                    <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1 '>
                        {
                            categoryList.map((val, i) => (
                                <div key={i} className='col'>
                                    <Link to="/shop" className='category-item'>
                                        <div className='category-inner'>
                                            {/* image-thumbnail */}
                                            <div className='category-thumb'>
                                                <img src={val.imgUrl} alt='' />
                                            </div>
                                            {/* content */}
                                            <div className='category-content'>
                                                <div className='cate-icon'>
                                                    <i className={val.iconName}></i>
                                                </div>
                                                <Link to="/shop"><h6>{val.title}</h6></Link>
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* btn get started */}
                <div className='text-center mt-5'>
                    <Link to="/shop" className='lab-btn'><span>{btnText}</span></Link>
                </div>
            </div>

        </div>
    )
}

export default HomeCategory