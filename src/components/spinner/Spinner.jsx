import React, { Component } from 'react';
import { Oval } from 'react-loader-spinner';
import './spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner">
      <Oval color="black" circle="grey" height="100px" width="100px" background-color="black" />
    </div>
  );
};

export default Spinner;
