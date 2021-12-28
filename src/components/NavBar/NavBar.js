import React from "react";
import Dropdown from './Dropdown';

const NavBar = () => {
  const scheduleLinks = [
    {
      title: 'LCS',
      pageRoute: '/'
    },
    {
      title: 'LCK',
      pageRoute: '/lck'
    },
    {
      title: 'LEC',
      pageRoute: '/lec'
    },
    {
      title: 'LPL',
      pageRoute: '/lpl'
    },
  ]

  return (
    <nav>
      <ul>
        <li>
          <Dropdown dropdownName='Schedule' links={scheduleLinks} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
