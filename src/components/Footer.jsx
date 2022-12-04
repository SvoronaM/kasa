import React from 'react';
import logoMobileWhite from '../images/logoMobileFooter.png';

export default function Footer () {
    return (
        <footer>
            <img src={logoMobileWhite} alt="Logo de Kasa" />
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    );
}