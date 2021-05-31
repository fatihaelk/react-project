import React, { useState, useEffect } from 'react';
import './Button.scss';

const Button = ({link, children, submit}) => {
    return (
        <>
           <a type={submit}  href={link} className="button">
                {children}
            </a>      
        </>
    )
}

export default Button
