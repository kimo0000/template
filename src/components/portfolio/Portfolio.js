import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
      <ul className="portfolio-info">
          <li className="item one">All</li>
          <li className="item">HTML</li>
          <li className="item">Photoshop</li>
          <li className="item">Wordpress</li>
          <li className="item">Mobil</li>
      </ul>
      <div className="box">
        <div>
           <img src='/images/portfolio/portfolio-img1.jpg' alt='photo1' />
           <p className='overflow'>
             <span>lorem Ipsum</span>
           </p>
        </div>
        <div>
           <img src='/images/portfolio/portfolio-img2.jpg' alt='photo2' />
           <p className='overflow'>
            <span>lorem Ipsum</span>
           </p>
        </div>
        <div>
           <img src='/images/portfolio/portfolio-img3.jpg' alt='photo3' />
           <p className='overflow'>
            <span>lorem Ipsum</span>
           </p>
        </div>
        <div>
           <img src='/images/portfolio/portfolio-img4.jpg' alt='photo4' />
           <p className='overflow'>
            <span>lorem Ipsum</span>
           </p>
        </div>
        <div>
           <img src='/images/portfolio/portfolio-img5.jpg' alt='photo5' />
           <p className='overflow'>
             <span>lorem Ipsum</span>
           </p>
        </div>
        <div>
           <img src='/images/portfolio/portfolio-img6.jpg' alt='photo6' />
           <p className='overflow'>
            <span>lorem Ipsum</span>
           </p>
        </div>
        <div>
           <img src='/images/portfolio/portfolio-img7.jpg' alt='photo7' />
           <p className='overflow'>
            <span>lorem Ipsum</span>
           </p>
        </div>
        <div>
           <img src='/images/portfolio/portfolio-img8.jpg' alt='photo8' />
           <p className='overflow'>
            <span>lorem Ipsum</span>
           </p>
        </div>
      </div>
       
    </div>
  )
}

export default Portfolio