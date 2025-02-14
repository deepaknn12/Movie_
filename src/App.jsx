import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import NoPage from './pages/NoPage';
import Login from './pages/Login';
import SingleMovie from './pages/SingleMovie';
import AdminLogin from './pages/admin/AdminLogin';
import CreateMovie from './pages/admin/CreateMovie';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/singleMovie/:movieId" element={<SingleMovie />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/CreateMovie" element={<CreateMovie />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;