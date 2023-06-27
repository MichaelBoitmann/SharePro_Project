import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Loader
        type="Circles"
        color="00BFFF"
        height={50}
        width={200}
        className="m-5"
      />
    </div>
  );
};

export default Spinner;
