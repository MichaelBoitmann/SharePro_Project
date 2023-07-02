import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';;

import { client } from '../client';
import BrickLayout from './BrickLayout';
import Spinner from './Spinner';

const Feed = () => {
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    if(categoryId) {

    } else {
      
    }
  }, [categoryId])

  if(loading) return <Spinner message="We are adding new ideas to your feed!" />

  return (
    <div>
      Feeds
    </div>
  );
};

export default Feed;
