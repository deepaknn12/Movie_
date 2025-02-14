import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='w-screen min-h-screen flex items-center justify-center bg-[#09090B] text-white'>
      <div className='w-[23vw] bg-[#18181B] p-6 rounded-lg shadow-md'>
        <h3 className='text-2xl mb-4'>Login</h3>
        <input type="email" placeholder="Email" className="w-full p-2 mb-2 bg-[#25252B] text-white rounded"/>
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 bg-[#25252B] text-white rounded"/>
        <button className='w-full bg-blue-600 py-2 rounded'>Login</button>
        <p className="mt-2 text-center text-sm">Don't have an account? <Link to="/signup" className="text-blue-400">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default Login;
