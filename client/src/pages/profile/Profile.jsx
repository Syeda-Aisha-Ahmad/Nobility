import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";

import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from 'firebase/storage';

import { app } from "../../firebase.js";


import {
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    deleteUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    signOutUserStart,
} from '../../redux/user/userSlice.js';

import { useDispatch } from 'react-redux';

export default function Profile() {
    const fileRef = useRef(null);
    const { currentUser, loading, error } = useSelector((state) => state.user);
    const [file, setFile] = useState(undefined);
    const [filePerc, setFilePerc] = useState(0);
    const [fileUploadError, setFileUploadError] = useState(false);
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();




    useEffect(() => {
        if (file) {
            handleFileUpload(file);
        }
    }, [file]);

    const handleFileUpload = (file) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setFilePerc(Math.round(progress));
            },
            (error) => {
                setFileUploadError(true);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
                    setFormData({ ...formData, avatar: downloadURL })
                );
            }
        );
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(updateUserStart());
            const res = await fetch(`/api/user/update/${currentUser._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success === false) {
                dispatch(updateUserFailure(data.message));
                return;
            }

            dispatch(updateUserSuccess(data));
            setUpdateSuccess(true);
        } catch (error) {
            dispatch(updateUserFailure(error.message));
        }
    };

    const handleDeleteUser = async () => {
        try {
            dispatch(deleteUserStart());
            const res = await fetch(`/api/user/delete/${currentUser._id}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (data.success === false) {
                dispatch(deleteUserFailure(data.message));
                return;
            }
            dispatch(deleteUserSuccess(data));
        } catch (error) {
            dispatch(deleteUserFailure(error.message));
        }
    };

    const handleSignOut = async () => {
        try {
            dispatch(signOutUserStart());
            const res = await fetch('/api/auth/signout');
            const data = await res.json();
            if (data.success === false) {
                dispatch(deleteUserFailure(data.message));
                return;
            }
            dispatch(deleteUserSuccess(data));
        } catch (error) {
            dispatch(deleteUserFailure(data.message));
        }
    };

    return (
        <div className="max-w-[1400px] bg-indigo-50 mx-auto  h-screen pb-10 ">

            {/* <h2 className='text-5xl font-semibold text-center'>Profile</h2> */}
            {/* <div className='bg-indigo-200 h-[150px] profile-styles'>
                <div className='bg-white border border-gray-400 w-[150px] mx-auto relative top-16 h-[150px] rounded-full'></div>
            </div> */}

            <div className="">


                <div className="card shrink-0 ">
                    <form onSubmit={handleSubmit} className="card-body p-0">

                        <div className='bg-indigo-200 h-[150px] profile-styles mb-20'>
                            <div className=''>
                                <input onChange={(e) => setFile(e.target.files[0])}
                                    type="file"
                                    ref={fileRef}
                                    hidden
                                    accept="image/*" />

                                <img onClick={() => fileRef.current.click()}
                                    className="bg-white border border-gray-400 w-[150px] mx-auto relative top-16 h-[150px] rounded-full"
                                    src={formData.avatar || currentUser.avatar}
                                    alt="profile" />

                                <p className='text-sm text-center mt-16'>
                                    {fileUploadError ? (
                                        <span className='text-red-700'>
                                            Error Image upload (image must be less than 2 mb)
                                        </span>
                                    ) : filePerc > 0 && filePerc < 100 ? (
                                        <span className='text-slate-700'>{`Uploading ${filePerc}%`}</span>
                                    ) : filePerc === 100 ? (
                                        <span className='text-green-700'>Image successfully uploaded!</span>
                                    ) : (
                                        ''
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-5/12 mx-auto">
                            <div className="form-control mb-5">

                                <input type="text" defaultValue={currentUser.username} placeholder="username" className="input input-bordered" required onChange={handleChange} />
                            </div>

                            <div className="form-control mb-5">

                                <input type="email" defaultValue={currentUser.email} placeholder="email" className="input input-bordered" required onChange={handleChange} />
                            </div>
                            <div className="form-control mb-5">

                                <input type="password" placeholder="password" className="input input-bordered" onChange={handleChange} />

                            </div>

                            <div className='flex items-center gap-2'>
                                <div className="form-control mb-5 w-full">
                                    <button disabled={loading} className="btn bg-indigo-500 hover:bg-indigo-600 border-none text-white">
                                        {loading ? 'Loading...' : 'Update'}
                                    </button>
                                </div>
                                <div className="form-control mb-5 w-full">
                                    <button className="btn bg-gray-600 hover:bg-gray-700 border-none text-white flex items-center gap-2">Create Listing</button>
                                </div>
                            </div>


                        </div>

                    </form>

                    <div className='grid grid-cols-3 items-center gap-8 text-center text-sm md:text-base text-red-600 mt-5'>
                        <span onClick={handleDeleteUser} className="cursor-pointer"
                        >Delete Account</span>
                        <span className='font-semibold text-indigo-600'>Show listings</span>
                        <span onClick={handleSignOut} className="cursor-pointer">Sign Out</span>
                    </div>
                </div>

            </div>

        </div>
    )
}
