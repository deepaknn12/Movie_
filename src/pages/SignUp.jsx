import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-[#09090B] text-white">
      <div className="w-[30vw] bg-[#18181B] p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-semibold mb-6 text-center">Sign Up</h3>

        <div className="space-y-4">
          <input type="text" placeholder="Username" className="w-full p-3 bg-[#25252B] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input type="text" placeholder="Name" className="w-full p-3 bg-[#25252B] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input type="email" placeholder="Email" className="w-full p-3 bg-[#25252B] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input type="password" placeholder="Password" className="w-full p-3 bg-[#25252B] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>

        <button className="w-full bg-blue-600 py-3 mt-6 rounded-lg hover:bg-blue-700 transition-all">Sign Up</button>

        <p className="mt-4 text-center text-sm">
          Already have an account? <Link to="/login" className="text-blue-400 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
