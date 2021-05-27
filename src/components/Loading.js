import React, { Fragment } from 'react';
import loader from '../assets/loader.gif';

const Loading = () => {
  return (
    <Fragment>
      <img
        src={loader}
        alt='Loading...'
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </Fragment>
  );
};

export default Loading;
