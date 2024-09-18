import React from 'react';
import Ar from '../assests/Ar.svg';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { TonConnectButton } from '@tonconnect/ui-react';

function First({ loading }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <div className="text-white flex flex-col md:flex-row justify-around items-center pt-15 min-h-screen bg-gray-900">
            <div className="mb-16 max-w-xl mx-3">
                <h1 className="font-semibold text-5xl mb-8">
                    Buy and Sell Apartments<br />
                    <span className="font-thin text-sky-400">Real Estate Marketplace</span>
                </h1>
                <div className="text-xl font-thin">
                    <span className='text-sky-400 font-bold'>Welcome to Ignitus Networks</span> – your premier destination for buying and selling apartments. Navigate the real estate landscape with ease and confidence, whether you’re a first-time buyer or a seasoned investor.
                </div>
                {/* <Slider {...settings}>
                    <div className="text-xl font-thin">
                        <span className='text-sky-400 font-bold'>Buy:</span> Discover a wide range of apartments that fit your lifestyle and budget. From cozy studios to luxurious penthouses, our user-friendly platform makes it easy to find your dream home in prime locations.
                    </div>
                    <div className="text-xl font-thin">
                        <span className='text-sky-400 font-bold'>Sell:</span> List your property with ease and connect with potential buyers. Our marketing tools and expert guidance ensure your apartment gets the visibility it deserves, helping you achieve the best possible price.
                    </div>
                    <div className="text-xl font-thin">
                        <span className='text-sky-400 font-bold'>Explore:</span> Browse comprehensive listings with detailed descriptions and high-quality images. Get all the information you need to make informed decisions about your next real estate investment.
                    </div>
                    <div className="text-xl font-thin">
                        <span className='text-sky-400 font-bold'>Ignitus Networks</span>  is more than a platform; it’s a revolution in the real estate space. List your property and be part of the future of real estate today.
                    </div>
                </Slider> */}
            </div>
            <div>
                <img src={Ar} alt="AR Illustration" className="h-[490px]" />
            </div>
        </div>
    );
};

export default First;