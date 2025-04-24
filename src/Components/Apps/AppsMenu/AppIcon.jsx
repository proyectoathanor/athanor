import React from 'react';
import { Link } from 'react-router-dom';

export default function AppIcon({ children, url }) {
    return (
        <div className="AppIcon">
            {url ? <Link to={url}>{children}</Link> : children}
        </div>
    );
}
