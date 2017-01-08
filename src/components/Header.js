import React, { PropTypes } from 'react';

const Header = ({subText}) => (
   <div>
      <h1>Fateh Inc.</h1>
      <p>{subText}</p>
   </div>
);

Header.propTypes = {
   subText: PropTypes.string.isRequired
};

export default Header;