import React, { useState, useRef, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';

import {Sidebar, UserProfile} from './components';
import Pins from './Pins';
import { client } from '../client';
import logo from '../assets/logo.png';


const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
    </div>
  )
}

export default Home
