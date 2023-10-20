import React from 'react';

const Footer = () => {
  const footerStyle = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    left:0,
    padding: '10px',   
  };

  return (
    <div style={footerStyle}><p><strong>Tutorial: </strong><a href='https://youtu.be/eWgc1_30sHU?feature=shared'>Watch on Youtube</a></p></div>
  );
};

export default Footer;
