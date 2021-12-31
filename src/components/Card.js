import React from "react";
import { format } from "date-fns";
import {teams} from '../data/team-data';
import leagueLogo from '../images/league-logo.png';

export default function Card({ Aname, Bname, date, Ascore, Bscore }) {
  // Function that finds team logo, returns nothing if no logo found
  const findLogo = (teamLetter) => {
    const logo = teams.find(team => team.name === teamLetter);
    if(logo !== undefined) {
      return logo.logo;
    } else {
      return leagueLogo;
    }
  }

  const teamALogo = findLogo(Aname);
  const teamBLogo = findLogo(Bname);

  return (
    <div className="game-card">
      <div className="teams">
        <div className='team-info'>
          <p className='team-name'>{Aname}</p>
          <p className='team-score'>{Ascore}</p>
          <img alt='pic' src={teamALogo} />
        </div>
        <div className='team-info'>
          <p className='team-name'>{Bname}</p>
          <p className='team-score'>{Bscore}</p>
          <img alt='pic' src={teamBLogo} />
        </div>
      </div>
      <div className="game-date">
        <p>{format(new Date(date), "MMMM do, Y")}</p>
      </div>
    </div>
  );
}
