import React from 'react';
import logo from '../images/logo.png';
import Avatar from 'react-avatar';

function Navbar() {
  return (
    <>
      <nav className='h-[90px] flex items-center justify-between px-4 md:px-[100px]'>
        {/* Logo */}
        <img className='w-[100px] md:w-[140px]' src={logo} alt="Website Logo" />

        {/* Search box and Avatar */}
        <div className='flex items-center gap-2 md:gap-4'>
          {/* Search Box */}
          <div className='inputBox w-[150px] sm:w-[200px] md:w-[250px] !rounded-[30px]'>
            <input
              type="text"
              className='!rounded-[30px] !pl-[15px] md:!pl-[20px] border-amber-50 bg-gray-800 text-white h-[40px] md:h-[50px] w-full'
              placeholder="Search Here...!"
            />
          </div>

          {/* Avatar */}
          <div>
            <Avatar round="50%" className="cursor-pointer" name="Deepak Kumar" size="30" md:size="40" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;