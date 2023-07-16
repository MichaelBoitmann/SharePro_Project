import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';

import logo from '../assets/sharepro.png';

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 eas capitalize dark:text-white';
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black dark:border-white transition-all duration-200 eas capitalize';

const categories = [
  { name: 'Animals'},
  { name: 'WallPapers'},
  { name: 'Photography'},
  { name: 'Coding'},
  { name: 'Gaming'},
  { name: 'Others'},
]

const Sidebar = ({ user, closeToggle }) => {
  const handleCloseSidebar = () => {
    if(closeToggle) closeToggle(false);
  };

  return (
    <div className="flex flex-col justify-between bg-white dark:bg-darkHome h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img 
            src={localStorage.getItem('theme') === "dark" ? logoWhite : logo}
            alt="logo" 
            className="w-full"              
          />  
        </Link>
        <div className="flex flex-col gap-5 mb-2">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
            onClick={ handleCloseSidebar }
          >
            <RiHomeFill className="dark:text-black" />
            Home

          </NavLink>
          <h3 className="mt-2 px-5 text-base 3xl:text-xl">Discover Categories</h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${ category.name }`}
              className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
              onClick={ handleCloseSidebar }
              key={ category.name }
            >
              <img src={ category.picture } className="w-8 h-8 rounded-full shadow-sm" />
              { category.name }
            </NavLink>
          ))}
        </div>
      </div>
      {user && (
        <Link
          to={`user-profile/${user._id}`}
          className="flex my-5 gap-2 p-2 items-center bg-white dark:bg-dark2 rounded-lg shadow-lg mx-3"
          onClick={ handleCloseSidebar }
        >
          <img 
            src={ user.picture } 
            className="w-10 h-10 rounded-full" 
            alt="user-profile"
          />
          <div className="flex items-center">
            <p className="dark:text-black">{user.userName}</p>
            <IoIosArrowForward className="dark:text-white" />
          </div>          
        </Link>
      )}
    </div>
  )
};

export default Sidebar;