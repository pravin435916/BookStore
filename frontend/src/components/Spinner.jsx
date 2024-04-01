import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center w-16 h-16 m-8">
      <div className="w-12 h-12 rounded-full border-t-4 border-b-4 border-blue-500 animate-spin"></div>
    </div>
  );
};

export default Spinner;
