import { FiMenu } from 'react-icons/fi';
import { IoSearchSharp } from "react-icons/io5";

export default function Header() {
    return (
        <div className=" navbar px-5 lg:px-16 py-2 text-lg text-gray-700 font-semibold lg:max-w-[1400px] mx-auto flex justify-between items-center bg-indigo-100">
            {/* Small and medium Device */}
            <div className="navbar-start w-screen  flex justify-between lg:w-3/12">
                <a href='/' className="normal-case text-xl md:text-3xl font-bold text-indigo-800">Nobility</a>
                <form className="lg:hidden bg-gray-50 px-5 h-8 md:h-10 rounded-md flex items-center">
                    <input type="text" placeholder="Search" className="  focus:outline-none w-[150px] md:w-[400px] " />
                    <IoSearchSharp className='text-xl md:text-2xl text-indigo-800' />
                </form>
                <div className="dropdown">
                    <ul tabIndex={0} className="menu menu-compact right-0 top-10 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='hover:text-indigo-600'><a href='#about' className='hover:bg-base-100'>About</a></li>
                        <li className='hover:text-indigo-600'><a href='#experience' className='hover:bg-base-100'>Home</a></li>
                        <li className='hover:text-indigo-600'><a href='#skills' className='hover:bg-base-100'>Sign In</a></li>
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
                    <li className='hover:text-indigo-600'><a href='#skills' className='hover:bg-base-100 text-base'>Sign In</a></li>
                </ul>
            </div>
        </div>
    )
}
