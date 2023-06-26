import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar, Feed, PinDetail, CreatePin, Search } from '../components';

const Pins = () => {
  const [serachTerm, serSearchTesrm] = useState('')

  return (
    <div>
      <h1>PINS</h1>
    </div>
  )
}

export default Pins
