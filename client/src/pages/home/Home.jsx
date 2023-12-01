import { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from "../../components/ListingItem";

export default function Home() {
    const [offerListings, setOfferListings] = useState([]);
    const [saleListings, setSaleListings] = useState([]);
    const [rentListings, setRentListings] = useState([]);
    SwiperCore.use([Navigation]);

    useEffect(() => {
        const fetchOfferListings = async () => {
            try {
                const res = await fetch('/api/listing/get?offer=true&limit=4');
                const data = await res.json();
                setOfferListings(data);
                fetchRentListings();
            } catch (error) {
                console.log(error);
            }
        };

        const fetchRentListings = async () => {
            try {
                const res = await fetch('/api/listing/get?type=rent&limit=4');
                const data = await res.json();
                setRentListings(data);
                fetchSaleListings();
            } catch (error) {
                console.log(error);
            }
        };

        const fetchSaleListings = async () => {
            try {
                const res = await fetch('/api/listing/get?type=sale&limit=4');
                const data = await res.json();
                setSaleListings(data);
            } catch (error) {
                log(error);
            }
        };
        fetchOfferListings();
    }, []);
    return (
        <div>

            {/* top */}
            <div className="mt-6">
                <div className='w-11/12 mx-auto md:flex rounded-3xl'>
                    {/* left */}
                    <div className='h-[470px] md:h-[430px] lg:h-[520px] md:w-1/2 rounded-2xl bg-indigo-200 md:rounded-tl-3xl pl-5 pr-5 md:pr-5 lg:pr-0 md:pl-8 lg:pl-20 py-20 md:py-24 lg:py-32 md:rounded-tr-none md:rounded-br-none md:rounded-bl-3xl relative'>

                        <div className='absolute md:w-[453px] lg:w-[660px] md:top-28 lg:top-32 left-6 md:left-[20px] lg:left-20'>
                            <h1 className='text-4xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-4 lg:mb-8 text-indigo-700'>Find your dream home</h1>
                            <p className='text-lg md:text-base lg:text-lg text-gray-700 md:w-8/12'>This Site will help you find your home fast, easy and comfortable.
                                Our expert support are always available.</p>
                        </div>

                        <div className='flex absolute md:w-[453px] lg:w-[660px] top-[310px] md:top-64 lg:top-72 left-6 md:left-[20px] lg:left-20 shadow-2xl shadow-[#34325ae1]'>
                            <input className='w-full px-5 py-3 rounded-tl-lg rounded-bl-lg focus:outline-none' type="text" placeholder='Search a city' />
                            <button className='bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-2 rounded-tr-lg rounded-br-lg'>Search</button>
                        </div>
                        <Link to={"/search"}>
                            <button className='absolute top-96 md:top-[328px] lg:top-[365px] left-6 md:left-[20px] lg:left-20 text-indigo-700 hover:text-indigo-600 font-bold px-1 pb-1'>Lets Start Now...</button>
                        </Link>
                    </div>

                    {/* right */}
                    <div className='md:w-1/2 md:h-[430px] lg:h-[520px] hidden md:grid bg-indigo-200 rounded-tr-3xl rounded-br-3xl overflow-hidden'>
                        <img className='h-full w-full' src="https://img.freepik.com/premium-photo/minimal-living-room-interior-design-scene-with-photo-frame-mockup_31479-461.jpg" alt="" />

                    </div>
                </div>

                <div className='my-8'>
                    <div className='bg-base-100 p-3 rounded-full w-[54px] block relative mx-auto z-10'>
                        <CiLocationOn className='text-indigo-600 text-3xl ' />
                    </div>
                    <hr className='border h-0 border-indigo-600 w-3/12 relative z-0 bottom-7 mx-auto' />
                </div>
            </div>

            {/* middle */}

            <Swiper navigation>
                {offerListings &&
                    offerListings.length > 0 &&
                    offerListings.map((listing) => (
                        <SwiperSlide>
                            <div
                                style={{
                                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                                    backgroundSize: 'cover',
                                }}
                                className='h-[500px]'
                                key={listing._id}
                            ></div>
                        </SwiperSlide>
                    ))}
            </Swiper>

            {/* listings */}

            <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
                {offerListings && offerListings.length > 0 && (
                    <div className=''>
                        <div className='my-3'>
                            <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
                            <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            {offerListings.map((listing) => (
                                <ListingItem listing={listing} key={listing._id} />
                            ))}
                        </div>
                    </div>
                )}
                {rentListings && rentListings.length > 0 && (
                    <div className=''>
                        <div className='my-3'>
                            <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
                            <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            {rentListings.map((listing) => (
                                <ListingItem listing={listing} key={listing._id} />
                            ))}
                        </div>
                    </div>
                )}
                {saleListings && saleListings.length > 0 && (
                    <div className=''>
                        <div className='my-3'>
                            <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
                            <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            {saleListings.map((listing) => (
                                <ListingItem listing={listing} key={listing._id} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}
