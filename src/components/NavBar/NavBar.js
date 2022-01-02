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
      pageRoute: '/lck-schedule'
    },
    {
      title: 'LEC',
      pageRoute: '/lec-schedule'
    },
    {
      title: 'LPL',
      pageRoute: '/lpl-schedule'
    },
  ]
  const teamLinks = [
    {
      title: 'LCS',
      pageRoute: '/lcs-teams'
    },
    {
      title: 'LCK',
      pageRoute: '/lck-teams'
    },
    {
      title: 'LEC',
      pageRoute: '/lec-teams'
    },
    {
      title: 'LPL',
      pageRoute: '/lpl-teams'
    },
  ]
  const standingsLinks = [
    {
      title: 'LCS',
      pageRoute: '/lcs-standings'
    },
    {
      title: 'LCK',
      pageRoute: '/lck-standings'
    },
    {
      title: 'LEC',
      pageRoute: '/lec-standings'
    },
    {
      title: 'LPL',
      pageRoute: '/lpl-standings'
    },
  ]

  return (
    <nav>
      <ul>
        <li>
          <Dropdown dropdownName='Schedule' links={scheduleLinks} />
          <Dropdown dropdownName='Teams' links={teamLinks} />
          <Dropdown dropdownName='Standings' links={standingsLinks} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
