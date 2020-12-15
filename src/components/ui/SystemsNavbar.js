import React from 'react';
import {  NavLink } from 'react-router-dom';

export const SystemsNavbar = () => {
    return (
        <div className="systems">
            <NavLink
                activeClassName="active"
                className="link"
                exact
                to="/english"
            > 
                English System
            </NavLink>
            
            <label>|</label>
            <NavLink
                activeClassName="active"
                className="link"
                exact
                to="/metric"
            >
                Metric System
            </NavLink>
        </div>
    )
}
