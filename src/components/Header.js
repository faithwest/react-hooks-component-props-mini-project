// Header.js
import React from 'react';

function Header(props) {
  const { blogName } = props;
  
  return (
    <header>
      <h1>{blogName}</h1>
    </header>
  );
}

export default Header;
