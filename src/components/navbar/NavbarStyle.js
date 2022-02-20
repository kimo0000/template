import styled from 'styled-components';

export const NavbarSection = styled.div `
    background: #ccc;
    padding: 10px 0;
    position: relative;
`

export const NavbarContainer = styled.div `
    width: 80%;
    margin: -15px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavbarLogo = styled.div `
    font-size: 20px;
    letter-spacing: 2px;
`

export const NavbarUL = styled.ul `
    list-style: none;
`

export const NavbarLi = styled.li `
    display: inline-block;
    margin: 0 15px;
    padding: 10px;
`

export const NavbarA = styled.a `
    text-decoration: none;
    color: #222;
    cursor: pointer;
    padding: 5px 10px;
    
    &:hover {
        color: #f50;
    }
`


export const Image = styled.img `
    position: absolute;
    top: 10px;
    right: 50px;
    width: 25px;
    height: 25px;
    padding: 10px;
    cursor: pointer;

    &:hover {
       background: rgb(158, 148, 148);
    }
`














