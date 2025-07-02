import React from 'react'
import { useState } from 'react'

export const Navbar = () => {
    const [active, setActive] = useState('home');

  const menuItems = ['home', 'services', 'projects', 'contact', 'about', 'reviews'];

  return (
   <div className='h-[60px] w-[650px] border rounded-4xl ml-[400px] mt-[20px] flex items-center bg-black'>
      <ul className='flex justify-evenly items-center w-full h-full'>
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => setActive(item)}
            className={`cursor-pointer px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              active === item
                ? 'bg-[#262424] text-[#BE6A26]'
                : 'text-white hover:text-[13px] hover:bg-[#d0d0d0]'
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Navbar
