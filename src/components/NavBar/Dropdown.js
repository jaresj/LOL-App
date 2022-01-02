import React from 'react';
import { Link } from "react-router-dom";

export default function Dropdown({dropdownName, links}) {
    const showMenu = (id) => {
        // if dropdown is not displaying
        if(!document.getElementById(id).classList.contains('show')) {
            // add class to make it display
            document.getElementById(id).classList.add('show')
            // add eventListener that will run hideMenu on click
            setTimeout(() => document.querySelector('body').addEventListener('click', hideMenu), 100)
        }
    }
    const hideMenu = () => {
        // Remove show class, hiding the dropdown
        document.getElementById(dropdownName).classList.remove('show');
        // remove eventListener for hiding the menu on click
        document.querySelector('body').removeEventListener('click', hideMenu)
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
