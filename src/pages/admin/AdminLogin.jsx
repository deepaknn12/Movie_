import React, { useState } from "react";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminKey, setAdminKey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, adminKey });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div className="w-[23vw] bg-[#181818] p-6 rounded-lg shadow-lg text-white flex flex-col">
        <h3 className="text-2xl mb-6 text-center">AdminLogin</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Admin Key"
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
            required
            className="p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none"
          />
          <button
            type="submit"
            className="mt-4 p-3 bg-blue-600 rounded text-white hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
