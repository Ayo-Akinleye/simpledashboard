import React, { useState } from 'react';

const Signup = () => {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.includes("@")) {
            setError("Invalid email!");
            return;
        }

        if (password !== confirmPassword) {
            setError("passwords do not match")
            return;
        }

        // setError("")
        setFullname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };


    return (
        <div>
            <div className='border-2 rounded-md flex flex-col gap-2 p-2'>

                <h1 className='text-center text-2xl font-serif font-extrabold'>
                    Sign up
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-3 m-2'
                >
                    <div className='flex gap-1'>
                        <label className='font-bold'>Fullname:</label>
                        <input required
                            type='text'
                            placeholder='e.g John Doe'
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            className='border border-gray-100 rounded px-2 placeholder-gray-400
                                        focus:outline-none focus:border-black'
                        />
                    </div>

                    <div className='flex gap-1'>
                        <label className="font-bold">Email address:</label>
                        <input required
                            type='email'
                            placeholder='e.g johndoe@gmail.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='border border-gray-100 rounded px-2 placeholder-gray-400
                                        focus:outline-none focus:border-black'
                        />
                    </div>

                    <div className='flex gap-1'>
                        <label className="font-bold">Password:</label>
                        <input required
                            type='password'
                            placeholder='********'
                            value={password}
                            onChange={(e) => {setPassword(e.target.value);
                            if (error) setError("");}}
                            className='border border-gray-100 rounded px-2 placeholder-gray-400
                                        focus:outline-none focus:border-black'
                        />

                    </div>

                    <div className='flex gap-1'>
                        <label className="font-bold">Confirm Password:</label>
                        <input required
                            type='password'
                            placeholder='********'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className='border border-gray-100 rounded px-2 placeholder-gray-400
                                        focus:outline-none focus:border-black'
                        />
                    </div>

                    {error ? <p className="text-red-500 text-sm">{error}</p> : null}

                    <button
                        type='submit'
                        className='border rounded-md p-1.5 cursor-pointer w- bg-black text-white hover:animate-pulse'>
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Signup
