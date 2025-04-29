
import React from 'react';
import './App.css'; 

const ImageContainer = () => {
  return (
    <div className="image-section">
      <h1 className="i-heading">Welcome to Demo App </h1>
      <p className="i-para">You can login and add files</p>
      <div style={{display:"flex"}}>
      <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1722424991/Screenshot_2024-07-31_165244_bewubg.png" alt="m-image" style={{width:"100px",marginRight:"10px"}}/>
      <p className="i-para">More people joined us, it's your turn.</p>
      </div>
    </div>
  );
};

export default ImageContainer;