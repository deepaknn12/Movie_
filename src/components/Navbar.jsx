import React from 'react';
import logo from '../images/logo.png';
import Avatar from 'react-avatar';

function Navbar() {
  return (
    <>
      <nav className='h-[90px] flex items-center justify-between px-[100px]'>
        <img className='w-[140px]' src={logo} alt="" />
        
        {/* Search box and Avatar */}
        <div className='flex items-center gap-4'>
          {/* Search Box */}
          <div className='inputBox w-[200px] md:w-[250px] !rounded-[30px]'>
            <input 
              type="text" 
              className='!rounded-[30px] !pl-[20px] border-amber-50 bg-gray-800 text-white h-[50px] w-full' 
              placeholder="Search Here...!" 
            />
          </div>

          {/* Avatar */}
          <div>
            <Avatar round="50%" className="cursor-pointer" name="Deepak kumar" size="40" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
