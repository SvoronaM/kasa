import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar () {
    return (
        <header>
            <Logo/>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' style={({ isActive }) => ({ textDecoration : isActive? "underline" : 'none' })}>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to='/a-propos' style={({ isActive }) => ({ textDecoration : isActive? "underline" : 'none'})}>A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}