import React from 'react';

export default function Tag ({tags}) {
    return (
        <div className='tags'>
            {
                tags.map((element, index) => {
                    return (<span key={index}>{element}</span>)
                })
            }
        </div>
    );
}