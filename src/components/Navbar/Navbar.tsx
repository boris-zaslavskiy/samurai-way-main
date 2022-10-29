import React from "react";
import {NavLink} from "react-router-dom";
import c from "./Navbar.module.css";

const Navbar = () => {
    return   <nav className={c.nav}>
        <div className={c.item}>
            <NavLink to="/profile" activeClassName={c.active} >Profile</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to="/dialogs" activeClassName={c.active} >Messages</NavLink>
        </div>
        <div className={c.item}>
            <a>News</a>
        </div>
        <div className={c.item}>
            <a>Music</a>
        </div>
    </nav>
}

export default Navbar;