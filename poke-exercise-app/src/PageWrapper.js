import React from 'react';
import './App.css';


function PageWrapper({children}) {
    return (
        <div className="PageWrapper">{children}</div>
    )
}

export default PageWrapper;