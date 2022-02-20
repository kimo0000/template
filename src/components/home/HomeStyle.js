import styled from 'styled-components';

export const HomeSection = styled.div `
   position: relative;
   margin-top: 5px;
   margin-bottom: 20px;
  `

export const HomeImg = styled.img `
   background-size: cover;
   background-position: center;
   max-width: 100%;
   max-height: 100%;
`

export const Contents = styled.div `
   width: 50%;
   position: absolute;
   top: 30%;
   left: 25%;
   margin-top: 50px;
   text-align: center;
`

export const HomeTitle = styled.h2 `
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 50px;
    margin-bottom: 40px;
`

export const HomeInfo = styled.h5 `
    color: #f50;
    margin-bottom: 20px;
    font-size: 30px;
`

export const HomeDesc = styled.p `
    line-height: 1.5;
    color: rgb(124, 118, 118)
`

export const HomeBtn = styled.button `
     border: 0;
    border-radius: 3px;
    outline: 0;
    background: #f50;
    color: #fff;
    padding: 10px;
    font-weight: bold;
    font-size: 15px;
    margin-top: 15px;
    cursor: pointer;

    &:hover {
        background: #fff;
        color: #f50;
    }
`


