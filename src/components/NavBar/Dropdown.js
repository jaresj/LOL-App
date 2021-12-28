import React from 'react';
import { Link } from "react-router-dom";

export default function Dropdown({dropdownName, links}) {
    const showMenu = (id) => {
        document.getElementById(id).classList.toggle('show');
    }
    return (
        <div className='dropdown'>
            <button className="dropbtn" onClick={() => showMenu(dropdownName)}>
                {dropdownName}<span>&#9660;</span>
            </button>
            <div className='dropdown-content' id={dropdownName}>
                {links.map(link => {
                    return (
                        <Link to={link.pageRoute} key={link.title}>{link.title}</Link>
                    )
                })}
            </div>
        </div>
    )
}
