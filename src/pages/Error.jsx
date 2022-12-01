import React from 'react';
import { Link } from 'react-router-dom';

export default function Error () {
    return (
        <main className='error'>
            <div className='error-titles'>
                <h1 className='error-title'>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
            </div>
            <div className='error-redirect'>
                <Link to='/'>Retourner sur la page d’accueil</Link>
            </div>
        </main>
    );
}



