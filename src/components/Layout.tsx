import React, { ReactNode } from 'react';
import { Link } from 'gatsby';

type LayoutProps = {
    children: ReactNode;
}

export default ({children}:LayoutProps)=>{
    return (
        <div>
        <Link to='/about'>About</Link>

        {children}
        </div>
    )
}