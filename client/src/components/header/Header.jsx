import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoSearchSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    const { currentUser } = useSelector((state) => state.user);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('searchTerm', searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if (searchTermFromUrl) {
            setSearchTerm(searchTermFromUrl);
        }
    }, [location.search]);

    return (
        <div className=" navbar px-5 lg:px-16 py-2 text-lg text-gray-700 font-semibold lg:max-w-[1400px] mx-auto flex justify-between items-center bg-indigo-100">
            {/* Small and medium Device */}
            <div className="navbar-start w-screen  flex justify-between lg:w-3/12">
                <a href='/' className="normal-case text-xl md:text-3xl font-bold text-indigo-800">Nobility</a>
                <form onSubmit={handleSubmit} className="lg:hidden bg-gray-50 px-5 h-8 md:h-10 rounded-md flex items-center">

                    <input type="text" placeholder="Search" className="  focus:outline-none w-[150px] md:w-[400px] "
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button>
                        <IoSearchSharp className='text-xl md:text-2xl text-indigo-800' />
                    </button>
                </form>
                <div className="dropdown">
                    <ul tabIndex={0} className="menu menu-compact right-0 top-10 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='hover:text-indigo-600'><a href='#about' className='hover:bg-base-100'>About</a></li>
                        <li className='hover:text-indigo-600'><a href='#experience' className='hover:bg-base-100'>Home</a></li>

                        <Link to='/profile'>
                            {currentUser ? (
                                <img
                                    className='rounded-full h-7 w-7 object-cover'
                                    src={currentUser.avatar}
                                    alt='profile'
                                />
                            ) : (
                                <li className=' text-slate-700 hover:underline'> Sign in</li>
                            )}
                        </Link>

                    </ul>
                    <div className='mr-auto'>
                        <label tabIndex={0} className="btn btn-ghost text-2xl text-indigo-800 lg:hidden">
                            <FiMenu />
                        </label>
                    </div>
                </div>

            </div>

            <a href='/' className="hidden btn bg-base-100 hover:text-indigo-600 hover:bg-base-100 border-none normal-case text-[27px] font-bold md:hidden w-3/12">Nobility</a>

            <form className="hidden lg:flex bg-gray-50 px-5 h-10 rounded-md">
                <input type="text" placeholder="Search" className="  focus:outline-none md:w-[500px] " />
                <IoSearchSharp className='text-2xl text-indigo-800' />
            </form>

            {/* Large device */}
            <div className="navbar-end  w-3/12 hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 flex items-center gap-5">
                    <li className='hover:text-indigo-600'><a href='#about' className='hover:bg-base-100 text-base'>About</a></li>
                    <li className='hover:text-indigo-600'><a href='#experience' className='hover:bg-base-100 text-base'>Home</a></li>
                    <Link to='/profile'>
                        {currentUser ? (
                            <img
                                className='rounded-full h-7 w-7 object-cover'
                                src={currentUser.avatar}
                                alt='profile'
                            />
                        ) : (
                            <li className=' text-slate-700 hover:underline'> Sign in</li>
                        )}
                    </Link>
                </ul>
            </div>
        </div>
    )
}
