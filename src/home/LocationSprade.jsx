import React from 'react'
import { Link } from 'react-router-dom';
import image1 from "../../src/assets/images/clients/avater.jpg"
import image2 from "../../src/assets/images/clients/avater.jpg"
import image3 from "../../src/assets/images/clients/avater.jpg"
import image4 from "../../src/assets/images/clients/avater.jpg"
import image5 from "../../src/assets/images/clients/avater.jpg"
import image6 from "../../src/assets/images/clients/avater.jpg"
import image7 from "../../src/assets/images/clients/avater.jpg"

const title = "More Then 60,000 Customers";

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
    {
        imgUrl: image1,
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: image2,
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: image3,
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: image4,
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: image5,
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: image6,
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: image7,
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
]



const LocationSprade = () => {
    return (
        <div className='clients-section style-2 padding-tb'>
            <div className='container'>
                <div className='section-header text-center'>
                    <h2 className='title'>{title}</h2>
                    <p>{desc}</p>
                </div>
                {/* main content */}
                <div className='section-wrapper'>
                    <div className='clients'>
                        {
                            clientsList.map((val, i) => (
                                <div key={i} className='client-list'>
                                    <Link to="/sign-up" className='client-content'>
                                        <span>{val.text}</span>
                                    </Link>
                                    <div className='client-thumb'>
                                        <img src={val.imgUrl} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationSprade
