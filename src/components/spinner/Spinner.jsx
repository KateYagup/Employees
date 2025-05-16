import React, { Component } from 'react';
import { Oval } from 'react-loader-spinner';
import './spinner.scss';
// import CircularProgress from '@mui/material/CircularProgress';
// import Spinner from 'react-spinner-material';

const Spinner = () => {
  return (
    <div className="spinner">
      {/* <CircularProgress /> */}
      {/* <Spinner radius={120} color={'#333'} stroke={2} visible={true} /> */}
      <Oval color="black" circle="grey" height="100px" width="100px" background-color="black" />
    </div>
  );
};

export default Spinner;
