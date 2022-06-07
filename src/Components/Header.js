import './Header.css';
import React from "react";
import { Link, Outlet } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav className="navbar-background">
                <Link to="/"><h1 className="logo">LOGO</h1></Link>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/create"><li>Create Routine</li></Link>
                    <Link to="/contact"><li>Contact Us</li></Link>
                </ul>
            </nav>

            <Outlet />
        </div>
    )
}

export default Header;