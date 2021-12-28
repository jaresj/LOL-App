import React from "react";

export default function Card({ Aname, Bname, date, Ascore, Bscore }) {
  return (
    <div className="gameCard">
      <div className="gameTeams">
        <p>{Aname}</p>
        <p>{Ascore}</p>
        <p>{Bname}</p>
        <p>{Bscore}</p>
      </div>
      <p>{date}</p>
    </div>
  );
}
