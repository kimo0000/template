import React from 'react';
import './profil.css';

const Profil = () => {
  return (
    <div className="profil-skills">
      <div className="container">
      
      <div className="profil">
         <h1 className="profil-title"><span>My</span> Profil</h1>
         <ul className="profil-list">
           <li className="profil-item">
             <span>Name </span>
              touati karim
            </li>
           <li className="profil-item">
             <span>Birthday </span>
              21/02/1985
           </li>
           <li className="profil-item">
             <span>Adress </span>
              ezzouhour 4 tunis
           </li>
           <li className="profil-item">
             <span>Phone </span>
             +216 21457854
           </li>
           <li className="profil-item">
             <span>Email </span>
             karim@gmail.com
           </li>
           <li className="profil-item">
             <span>Website  </span>
             <span className='profil-item-web'> www.company.com </span>
           </li>
         </ul>
         
      </div>
      <div className="skills">
           <h1 className="skills-title">Some <span>Skills</span></h1>
           <p className="skills-desc">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam lectus arcu, mollis quis suscipit sodales, ornare nec arcu.
              Vivamus tempus vehicula mi, a auctor dolor auctor ac.
           </p>
            <div className="bar">
             <div className="bar-text">
               <span>Bootstrap</span>
               <span>100%</span>
             </div>
               <div className="bar-progress">
                 <span className="bar-one"></span>
               </div>
           </div>

           <div className="bar">
             <div className="bar-text">
               <span>Bootstrap</span>
               <span className="bar-pourcentage-one">90%</span>
             </div>
               <div className="bar-progress">
                 <span className="bar-two"></span>
               </div>
           </div>

           <div className="bar">
             <div className="bar-text">
               <span>Bootstrap</span>
               <span className="bar-pourcentage-two">80%</span>
             </div>
               <div className="bar-progress">
                 <span className="bar-three"></span>
               </div>
           </div>
      </div>
     </div>
    </div>
  )
}

export default Profil