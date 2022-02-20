import React from 'react';
import './social.css';

const Social = () => {
  return (
    <div className="social">

       <div className="social-facebook">
          <i className="icon fa fa-facebook fa-lg"></i>
          <div className="social-info">
            <span className="social-text1">Folow Me On</span>
            <span className="social-text2">Social Facebook</span>
          </div>
       </div> 

       <div className="social-twitter">
          <i className="icon fa fa-twitter fa-lg"></i>
          <div className="social-info">
            <span className="social-text1">tweet Me On</span>
            <span className="social-text2">Social twitter</span>
          </div>
       </div> 

       <div className="social-pinterest">
          <i className="icon fa fa-pinterest fa-lg"></i>
          <div className="social-info">
            <span className="social-text1">Pin Me On</span>
            <span className="social-text2">Social pinterest</span>
          </div>
       </div> 
    </div>
  )
}

export default Social