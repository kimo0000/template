import React from 'react';
import {HomeImg, HomeSection, Contents, HomeTitle, HomeInfo, HomeDesc, HomeBtn} from './HomeStyle.js';

const Home = () => {
  return (
       <HomeSection>
        <HomeImg src='/images/home/home-bg.jpg' alt='photoHome' />
      <Contents>
        <HomeTitle>Touati Karim</HomeTitle>
        <HomeInfo>creative design</HomeInfo>
        <HomeDesc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Integer vitae <strong>Ux Designer</strong> neque, sit amet imperdiet urna.
          Vestibulum porta varius lorem non pretium. Nulla ullamcorper
          mi non elit lobortis rhoncus. Curabitur in elit vitae ante
          molestie sollicitudin.  
        </HomeDesc>
        <HomeBtn>Let's Begin</HomeBtn>
      </Contents>
    </HomeSection>
  )
}

export default Home;