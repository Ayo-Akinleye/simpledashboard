import { useState } from 'react';
import SimpleButton from '../Components/SubmitButton';
import { useNavigate, Link } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()


    navigate("/dashboard")
  };


  return (
    <div>
      <div className='border-2 rounded-md flex flex-col gap-2 p-2'>

        <h1 className='text-center text-2xl font-serif font-extrabold'>
          Sign in
        </h1>

        <form className='flex flex-col gap-3 m-2' onSubmit={handleSubmit}>

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
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError("");
              }}
              className='border border-gray-100 rounded px-2 placeholder-gray-400
                                        focus:outline-none focus:border-black'
            />
          </div>

          {error ? <p className="text-red-500 text-sm">{error}</p> : null}

          <SimpleButton text="Sign in" type='submit' />
        </form>
      </div>
      <p className='text-center mt-2'>
        Don't have an account yet?
        <Link to="/signup" className='text-blue-500 underline cursor-pointer'>Sign up</Link>
      </p>
    </div>

  )
}

export default Signin
