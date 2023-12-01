import { useSelector } from "react-redux";

export default function Profile() {
    const { currentUser } = useSelector((state) => state.user)
    return (
        <div className="max-w-[1400px] bg-indigo-50 mx-auto  h-screen pb-10 ">

            {/* <h2 className='text-5xl font-semibold text-center'>Profile</h2> */}
            {/* <div className='bg-indigo-200 h-[150px] profile-styles'>
                <div className='bg-white border border-gray-400 w-[150px] mx-auto relative top-16 h-[150px] rounded-full'></div>
            </div> */}
            <div className='bg-indigo-200 h-[150px] profile-styles'>
                <div className=''>
                    <img className="bg-white border border-gray-400 w-[150px] mx-auto relative top-16 h-[150px] rounded-full" src={currentUser.avatar} alt="" />
                </div>
            </div>
            <div className="hero mt-20">


                <div className="card shrink-0 lg:w-4/12">
                    <form className="card-body">

                        <div className="form-control">

                            <input type="text" placeholder="username" className="input input-bordered" required />
                        </div>

                        <div className="form-control">

                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">

                            <input type="password" placeholder="password" className="input input-bordered" required />

                        </div>

                        <div className='flex items-center gap-2'>
                            <div className="form-control w-full">
                                <button className="btn bg-indigo-500 hover:bg-indigo-600 border-none text-white">Update</button>
                            </div>
                            <div className="form-control w-full">
                                <button className="btn bg-gray-600 hover:bg-gray-700 border-none text-white flex items-center gap-2">Create Listing</button>
                            </div>
                        </div>

                        <div className='grid grid-cols-3 items-center gap-8 text-center text-sm md:text-base text-red-600 mt-5'>
                            <span>Delete Account</span>
                            <span className='font-semibold text-indigo-600'>Show listings</span>
                            <span>Sign Out</span>
                        </div>

                    </form>
                </div>

            </div>

        </div>
    )
}
