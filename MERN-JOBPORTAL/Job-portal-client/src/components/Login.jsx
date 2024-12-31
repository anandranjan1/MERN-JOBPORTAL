import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log('User logged in:', user);
        // Optionally, redirect to home page or handle state accordingly
      })
      .catch((error) => {
        console.error('Error during Google login:', error.message);
        // Handle error, e.g., show error message to user
        toast.error('Google login failed. Please try again.');
      });
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();

    try {
      // Example Firebase email/password login
      // Replace with your actual Firebase authentication logic
      // Here we assume you have set up Firebase authentication correctly

      // Simulating Firebase email/password login flow with fetch
      const signInUrl = 'https://your-auth-api.com/login'; // Replace with your actual API endpoint
      const response = await fetch(signInUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful login
        toast.success('Login successful');
        navigate('/'); // Redirect to home page or dashboard
      } else {
        // Login failed
        toast.error(data.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during email/password login:', error.message);
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <div className='h-screen w-full flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded shadow-md w-full max-w-sm'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
        <form onSubmit={handleEmailLogin}>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded mt-1'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-700'>
              Password
            </label>
            <div className='bg-slate-100 p-2 flex'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='enter password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full h-full outline-none bg-transparent'
                required
              />
              <div
                className='cursor-pointer text-xl'
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
              </div>
            </div>
          </div>
          <div className='mb-6 text-right'>
            <Link
              to={'/forgot-password'}
              className='text-sm text-blue-600 hover:underline'
            >
              Forgot password?
            </Link>
          </div>
          <button
            type='submit'
            className='w-full bg-blue text-white py-2 rounded hover:bg-blue-700 transition duration-300'
          >
            Login
          </button>
        </form>
        <div className='mt-6 text-center'>
          <button
            className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300'
            onClick={handleLogin}
          >
            Login with Google
          </button>
        </div>
        <p className='my-5'>
          Don't have an account?{' '}
          <Link
            to={'/sign-up'}
            className='text-red-600 hover:text-red-700 hover:underline'
          >
            Sign up
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default Login;
