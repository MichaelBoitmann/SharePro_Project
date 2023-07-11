import React from 'react';
import { Circles } from 'react-loader-spinner';

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Circles
        height="60"
        width="60"
        color="skyblue"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        className="m-5"
      />
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

export default Spinner;
