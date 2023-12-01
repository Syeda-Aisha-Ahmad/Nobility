
import './SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    signInStart,
    signInSuccess,
    signInFailure,
} from '../../redux/user/userSlice';
import OAuth from "../../components/OAuth";

export default function SignIn() {
    const [formData, setFormData] = useState({});
    const { loading, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.id]: e.target.value,
            }
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            dispatch(signInStart());
            const res = await fetch('api/auth/signin',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                }
            );
            const data = await res.json();
            if (data.success === false) {
                dispatch(signInFailure(data.message));
                return;
            }
            dispatch(signInSuccess(data));
            navigate('/');
        }
        catch (error) {
            dispatch(signInFailure(error.message));
        }


    }
    return (
        <div className="max-w-[1400px] mx-auto loggin-style h-screen py-44 md:py-52 lg:py-20" >

            <h2 className='text-5xl font-semibold text-center text-white'>Sign In</h2>
            <div className="lg:grid place-items-center w-11/12 md:w-9/12 lg:w-full mx-auto">


                <div className="card shrink-0 lg:w-4/12">
                    <form onSubmit={handleSubmit} className="card-body">


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-indigo-200">Email</span>
                            </label>
                            <input type="email" placeholder="email" id="email" onChange={handleChange} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-indigo-200">Password</span>
                            </label>
                            <input type="password" placeholder="password" id="password" onChange={handleChange} className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button disabled={loading} className="btn bg-indigo-500 hover:bg-indigo-600 border-none text-white">
                                {loading ? 'Loading...' : 'Sign In'}
                            </button>
                        </div>
                        <div className="divider text-indigo-200  after:bg-indigo-200 before:bg-indigo-200">OR</div>
                        <div className="form-control">
                            <OAuth />
                            {/* <button className="btn bg-gray-600 hover:bg-gray-700 border-none text-white flex items-center gap-2"><IoLogoGoogle className='text-xl' /> Continue With Google</button> */}
                        </div>
                        <p className='text-white font-semibold'>Dont have an account?

                            <Link to={"/sign-up"}>
                                <span className="text-indigo-200 hover:text-indigo-300"> Sign Up</span>
                            </Link>
                        </p>
                        {error && <p className="bg-red-500 bg-opacity-30 font-bold text-red-200 mt-5">{error}</p>}
                    </form>
                </div>

            </div>

        </div >
    )
}
