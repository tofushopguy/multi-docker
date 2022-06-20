import React from 'react';
import { Link } from 'react-router-dom';

const my_function = () => {
  return (
    <div>
      Im some other page!
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default my_function;
