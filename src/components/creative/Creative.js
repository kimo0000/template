import React from 'react';
import './creative.css';

const Creative = () => {
  return (
    <div className="creative">
     <div className="creative-container">
           
      <div className="creative-content">   
        <h3 className="creative-title"><span>This Is</span> Me</h3>
        <h1 className="creative-info"><span>Creative</span> Director</h1>
        <div className="creative-desc">
        <p className="creative-description1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Etiam ornare, magna vel tincidunt <a href="/">dignissim</a>, risus dui condimentum nisl, vel
             Quisque sem mi, dapibus et urna in, bibendum scelerisque diam. Praesent et erat nibh. 
               Morbi efficitur commodo tincidunt. Mauris maximus fringilla mauris, vel sagittis 
        </p>
        <p className="creative-description2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Donec lobortis et est a efficitur. Nulla congue lacus mauris, 
          et tempor justo ullamcorper eu. Orci varius natoque penatibus
        </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Creative