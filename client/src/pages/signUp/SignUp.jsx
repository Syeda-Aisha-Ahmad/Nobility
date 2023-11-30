import { IoLogoGoogle } from "react-icons/io";
import './SignUp.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <div className="max-w-[1400px] mx-auto loggout-style h-screen py-40 md:py-52 lg:py-10 " >

            <h2 className='text-5xl font-semibold text-center text-white'>Sign Up</h2>
            <div className="lg:grid place-items-center w-11/12 md:w-9/12 lg:w-full mx-auto">


                <div className="card shrink-0 lg:w-4/12">
                    <form className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-indigo-200">User name</span>
                            </label>
                            <input type="text" placeholder="username" id="username" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-indigo-200">Email</span>
                            </label>
                            <input type="email" placeholder="email" id="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-indigo-200">Password</span>
                            </label>
                            <input type="password" placeholder="password" id="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-indigo-500 hover:bg-indigo-600 border-none text-white">Sign up</button>
                        </div>
                        <div className="divider text-indigo-200  after:bg-indigo-200 before:bg-indigo-200">OR</div>
                        <div className="form-control">
                            <button className="btn bg-gray-600 hover:bg-gray-700 border-none text-white flex items-center gap-2"><IoLogoGoogle className='text-xl' /> Continue With Google</button>
                        </div>
                        <p className='text-white font-semibold'>Have an account?

                            <Link to={"/sign-in"}>
                                <span className="text-indigo-200 hover:text-indigo-300"> Sign In</span>
                            </Link>
                        </p>
                    </form>
                </div>

            </div>

        </div >
    )
}
