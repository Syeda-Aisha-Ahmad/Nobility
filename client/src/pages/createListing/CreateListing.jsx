import { FaCamera } from "react-icons/fa";
import './CreateListing.css';

export default function CreateListing() {
    return (
        <div className='bg-indigo-100'>
            <h1 className='text-4xl font-semibold text-center pt-14 pb-5'>Create a Listing</h1>

            <form action="" className='flex flex-col lg:flex-row gap-10 px-6 lg:px-32 py-10'>
                {/* left */}
                <div className='lg:w-1/2'>
                    <input type="text" placeholder='Name' id="name" className='w-full mb-3 px-3 h-10 rounded-md border-indigo-200 shadow-lg shadow-indigo-200 focus:outline-none ' />
                    <input type="text" placeholder='Address' id="address" className='w-full mb-3 px-3 h-10 rounded-md border-indigo-200 shadow-lg shadow-indigo-200 focus:outline-none' />
                    <textarea name="" cols="30" rows="5" placeholder="Description" id="description" className='w-full mb-2 p-3 rounded-md border-indigo-200 shadow-lg shadow-indigo-200 focus:outline-none' ></textarea>

                    <div className='grid grid-cols-2 gap-x-4 gap-y-5'>
                        <div className='flex items-center border-none bg-base-100 rounded-md border-indigo-200 shadow-lg shadow-indigo-200 focus:outline-none py-3  px-3'><input type="checkbox" name="webdesign-management" value="Web design or management" id="sell" className="checkbox checkbox-indigo-400 text-white w-[18px] h-[18px] mr-4 focus:outline-none border-indigo-300 shadow-lg shadow-indigo-200 " />
                            Sell
                        </div>

                        <div className='flex items-center border-none bg-base-100 rounded-md py-3  px-3  border-indigo-200 shadow-lg shadow-indigo-200 focus:outline-none'><input type="checkbox" name="graphic-design" value="Graphic Design" id="rent" className="checkbox checkbox-indigo-400 text-white w-[18px] h-[18px] mr-4 border-indigo-300 shadow-xl shadow-indigo-200" />
                            Rent</div>
                    </div>

                    <div className='grid grid-cols-2 md:flex gap-3 mt-4 items-center justify-between w-full'>
                        <div className='flex items-center border-none bg-base-100 rounded-md py-3  px-3 md:w-4/12 focus:outline-none border-indigo-200 shadow-lg shadow-indigo-200 '><input type="checkbox" name="bug-fixing" value="Bug Fixing" id="parking" className="checkbox checkbox-indigo-400 text-white w-[18px] h-[18px] mr-4 border-indigo-300 shadow-lg shadow-indigo-200" />
                            Parking Spot
                        </div>
                        <div className='flex items-center border-none bg-base-100 rounded-md py-3  px-3 md:w-4/12 focus:outline-none border-indigo-200 shadow-lg shadow-indigo-200'><input type="checkbox" name="other" value="Other" id="furnished" className="checkbox checkbox-indigo-400 text-white w-[18px] h-[18px] mr-4 border-indigo-300 shadow-lg shadow-indigo-200" />
                            Furnished</div>

                        <div className='flex items-center border-none bg-base-100 rounded-md py-3  px-3 md:w-4/12 border-indigo-200 shadow-lg shadow-indigo-200 focus:outline-none'><input type="checkbox" name="other" value="Other" id="offer" className="checkbox checkbox-indigo-400 text-white w-[18px] h-[18px] mr-4 border-indigo-300 shadow-lg shadow-indigo-200" />
                            Offer</div>
                    </div>

                    <div className='flex gap-3 mt-4 items-center w-full'>
                        <div className='flex items-center border-none bg-base-100 rounded-md py-3  px-3 w-full lg:w-4/12 outline-none border-indigo-200 shadow-lg shadow-indigo-200 focus:outline-none'><input type="number" id="bedrooms" name="bedrooms" min="1" max="10" value={1} className="mr-4 border shadow-sm shadow-indigo-300 text-center" />
                            Bedrooms
                        </div>
                        <div className='flex items-center border-none bg-base-100 rounded-md py-3  px-3 w-full lg:w-4/12 outline-none border-indigo-200 shadow-lg shadow-indigo-200 focus:outline-none'><input type="number" id="bathrooms" name="bathrooms" min="1" max="10" value={1} className="mr-4 border shadow-sm shadow-indigo-300 text-center" />
                            Bathrooms
                        </div>

                    </div>

                    <div className='flex flex-col md:flex-row lg:flex-col gap-3 mt-4 justify-start w-full'>
                        <div className='flex items-center border-none bg-base-100 rounded-md py-3  px-3 md:w-8/12 outline-none border-indigo-200 shadow-lg shadow-indigo-200 focus:outline-none'><input type="number" id="regularPrice" name="regularPrice" min="1" max="10" value={1} className="mr-4 border shadow-sm shadow-indigo-300 text-center" />
                            Regular price <small className="ml-2">($ / Month)</small>
                        </div>
                        <div className='flex items-center border-none bg-base-100 rounded-md py-3  px-3 md:w-8/12 outline-none border-indigo-200 shadow-lg shadow-indigo-200 focus:outline-none'><input type="number" id="discountPrice" name="discountPrice" min="1" max="10" value={1} className="mr-4 border shadow-sm shadow-indigo-300 text-center" />
                            Discounted price <small className="ml-2">($ / Month)</small>
                        </div>

                    </div>
                </div >

                {/* right */}
                <div className='h-[32] lg:w-1/2' >
                    <div className="form-control mt-2">
                        <h3 className='mb-5'><span className='font-bold'>Images:</span> The first image will be the cover (max 6)</h3>
                        {/* <label htmlFor="inputTag" className='cursor-pointer input input-bordered h-36 pt-10 lg:pr-10 flex flex-col items-center border-indigo-200 shadow-xl shadow-indigo-200'>
                            <FaCamera className='mr-2 text-4xl mb-3' /> <span className=''>Upload Image</span>
                            <input id='inputTag' type="file" name='photo' placeholder="Photo" className="" />
                        </label> */}

                        <div>
                            <input type="file" id="images" accept="image/*" multiple />
                            <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Upload</button>
                        </div>

                        <button className='mt-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold'>Create Listing</button>
                    </div>
                </div >
            </form >
        </div >
    )
}
