import React from 'react';
import { NavLink } from 'react-router-dom';
import {NavbarSection , NavbarContainer, NavbarLogo, NavbarUL, NavbarLi, NavbarA, Image} from './NavbarStyle';

const Navbar = () => {
    return (
        <NavbarSection className='navbar'>
            <NavbarContainer>
                <NavbarLogo>
                    <h2 className='logo-text'>Ultra Profil</h2>
                </NavbarLogo>
                <NavbarUL>
                    <NavbarLi><NavLink to='/'>Home</NavLink></NavbarLi>
                    <NavbarLi><NavbarA href='/'>About</NavbarA></NavbarLi>
                    <NavbarLi><NavbarA href='/'>Resume</NavbarA></NavbarLi>
                    <NavbarLi><NavbarA href='/'>Portfolio</NavbarA></NavbarLi>
                    <NavbarLi><NavbarA href='/'>Work</NavbarA></NavbarLi>
                    <NavbarLi><NavLink to='/contact'>Contact</NavLink></NavbarLi>
                    <Image src='/images/nav/menu.jpg' alt='logo-menu' />
                </NavbarUL>
            </NavbarContainer>

        </NavbarSection>
    )
}

export default Navbar;